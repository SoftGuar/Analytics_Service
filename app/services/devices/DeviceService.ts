import { PrismaClient as MainPrismaClient } from "../../prisma/generated/main";
import { PrismaClient as AnalyticsClient } from "../../prisma/generated/anayltics";

export class DeviceService {
  static async getDeviceStatus(
    analyticsPrisma: AnalyticsClient = new AnalyticsClient()
  ) {
    try {
      const result = await analyticsPrisma.$queryRaw<
        {
          dispositive_id: number;
          connected: boolean;
          timestamp: Date;
          battery_level: number;
        }[]
      >`
            SELECT d1.dispositive_id, d1.connected, d1.timestamp, d1.battery_level
            FROM "DeviceUsageLogs" d1
            WHERE d1.timestamp = (
                SELECT MAX(d2.timestamp)
                FROM "DeviceUsageLogs" d2
                WHERE d1.dispositive_id = d2.dispositive_id
            );
`;
      return result;
    } catch (error) {
      console.error("Error fetching device status:", error);
      throw error;
    }
  }

  static async getDeviceIssuesOverTime(
    prisma: MainPrismaClient = new MainPrismaClient()
  ) {
    try {
      const result = await prisma.$queryRaw<
        { dispositive_id: number; issue_count: number }[]
      >`
            SELECT 
            DATE_TRUNC('month', di.date) AS month,
            d.type,
            COUNT(di.id) AS issue_count
            FROM "DispoIssue" di
            JOIN "Dispositive" d ON di."dispositiveId" = d.id
            GROUP BY DATE_TRUNC('month', di.date), d.type
            ORDER BY month, d.type;
            `;
      return result;
    } catch (error) {
      console.error("Error fetching device issues over time:", error);
      throw error;
    }
  }

  static async getDeviceIssues(
    prisma: MainPrismaClient = new MainPrismaClient()
  ) {
    try {
      const deviceIssueFrequency = await prisma.dispoIssue.groupBy({
        by: ["dispositiveId"],
        _count: {
          id: true,
        },
        orderBy: {
          _count: {
            id: "desc",
          },
        },
      });
      return deviceIssueFrequency;
    } catch (error) {
      console.error("Error fetching device issues:", error);
      throw error;
    }
  }

  static async getDevicePerformance(
    prisma: MainPrismaClient = new MainPrismaClient(),
    analyticsPrisma: AnalyticsClient = new AnalyticsClient()
  ) {
    try {
      const dispositiveIssues = await prisma.dispositive.findMany({
        include: {
          DispotiveIssue: {
            select: {
              id: true,
              date: true,
              dispositiveId: true,
            },
          },
          Product: {
            select: {
              name: true,
            },
          },
        },
      });

      const deviceUsageLogs = await analyticsPrisma.deviceUsageLogs.findMany();

      const devicePerformance = dispositiveIssues
        .map((device) => {
          const deviceLogs = deviceUsageLogs.filter(
            (log) => log.dispositive_id === device.id
          );
          const avgBatteryLevel = deviceLogs.length
            ? deviceLogs.reduce((sum, log) => sum + log.battery_level, 0) /
              deviceLogs.length
            : null;

          const totalIssues = device.DispotiveIssue.length;
          const avgDaysToFirstIssue =
            totalIssues > 0
              ? device.DispotiveIssue.reduce((sum, issue) => {
                  const daysDiff =
                    (new Date(issue.date).getTime() -
                      new Date(device.start_date).getTime()) /
                    (1000 * 3600 * 24);
                  return sum + daysDiff;
                }, 0) / totalIssues
              : null;

          return {
            device_id: device.id,
            device_mac: device.MAC,
            avg_battery_level: avgBatteryLevel,
            total_issues: totalIssues,
            avg_days_to_first_issue: avgDaysToFirstIssue,
          };
        })
        .sort((a, b) => (b.total_issues || 0) - (a.total_issues || 0));

      return devicePerformance;
    } catch (error) {
      console.error("Error fetching device performance:", error);
      throw error;
    }
  }

  static async devicesSold(
    prisma: MainPrismaClient = new MainPrismaClient()
  ) {
    try {
      const devicesSold = await prisma.$queryRaw<
        { sale_month: Date; devices_sold: number; total_revenue: number }[]
      >`
            SELECT 
                DATE_TRUNC('month', t.date) AS sale_month,
                COUNT(DISTINCT pt.dispositive_id)::Integer AS devices_sold,
                SUM(p.price)::Integer AS total_revenue
            FROM 
                "Transaction" t
            JOIN 
                "ProductTransaction" pt ON t.id = pt.transaction_id
            JOIN 
                "Dispositive" d ON pt.dispositive_id = d.id
            JOIN 
                "Product" p ON d.product_id = p.id
            GROUP BY 
                sale_month
            ORDER BY 
                sale_month;`;
      return devicesSold;
    } catch (error) {
      console.error("Error fetching device sales:", error);
      throw error;
    }
  }

  static async deviceRevenue(
    prisma: MainPrismaClient = new MainPrismaClient()
  ) {
    try {
      const deviceRevenue = await prisma.$queryRaw<
        {
          sale_period: Date;
          devices_sold: number;
          total_revenue: number;
          avg_device_price: number;
        }[]
      >`
            SELECT 
                CASE 
                    WHEN DATE_TRUNC('month', t.date) IS NULL THEN 'Total'
                    ELSE TO_CHAR(DATE_TRUNC('month', t.date), 'YYYY-MM')
                END AS sale_period,
                COUNT(DISTINCT pt.dispositive_id)::Integer AS devices_sold,
                SUM(p.price)::Integer AS total_revenue,
                AVG(p.price)::Integer AS avg_device_price
            FROM 
                "Transaction" t
            JOIN 
                "ProductTransaction" pt ON t.id = pt.transaction_id
            JOIN 
                "Dispositive" d ON pt.dispositive_id = d.id
            JOIN 
                "Product" p ON d.product_id = p.id
            GROUP BY 
                ROLLUP(DATE_TRUNC('month', t.date))
            ORDER BY 
                sale_period;

            `;
      return deviceRevenue;
    } catch (error) {
      console.error("Error fetching device revenue:", error);
      throw error;
    }
  }

  static async getMostPopularDevices(
    prisma: MainPrismaClient = new MainPrismaClient()
  ) {
    try {
      const mostPopularDevices = await prisma.$queryRaw<
        { device_id: number; device_mac: string; issue_count: number }[]
      >`
            SELECT 
                p.name AS product_name,
                COUNT(DISTINCT d.id)::Integer AS total_devices,
                COUNT(DISTINCT pt.transaction_id)::Integer AS sales_count,
                SUM(CASE WHEN pt.transaction_id IS NOT NULL THEN p.price ELSE 0 END)::Integer AS total_revenue

            FROM 
                "Product" p
            JOIN 
                "Dispositive" d ON p.id = d.product_id
            LEFT JOIN 
                "ProductTransaction" pt ON d.id = pt.dispositive_id
            GROUP BY 
                p.name
            ORDER BY 
                sales_count DESC, total_revenue DESC;
            `;
      return mostPopularDevices;
    } catch (error) {
      console.error("Error fetching most popular devices:", error);
      throw error;
    }
  }

  static async getDeviceIntervention(
    prisma: MainPrismaClient = new MainPrismaClient()
  ) {
    try {
      const deviceIntervention = await prisma.$queryRaw<
        { device_id: number; intervention_count: number }[]
      >`
            SELECT 
                DATE_TRUNC('month', start_date) AS intervention_month,
                type,
                COUNT(*)::Integer AS intervention_count,
                AVG(CASE WHEN status = 'Resolved' THEN 1 ELSE 0 END)::Integer AS resolution_rate
            FROM 
                "Intervention"
            GROUP BY 
                intervention_month, type
            ORDER BY 
                intervention_month, type;
            `;
      return deviceIntervention;
    } catch (error) {
      console.error("Error fetching device interventions:", error);
      throw error;
    }
  }
}
