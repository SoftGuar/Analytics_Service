import { PrismaClient as MainPrismaClient } from "../../prisma/main/generated";
import { PrismaClient as AnalyticsClient } from "../../prisma/analytics/generated";
const prisma = new MainPrismaClient();
const analyticsPrisma = new AnalyticsClient();
export class DeviceService {
  private static prisma: MainPrismaClient = prisma
  private static analyticsPrisma: AnalyticsClient = analyticsPrisma
  static async getDeviceTotal(
    prisma: MainPrismaClient = DeviceService.prisma
  ){
    try{
      const result = await prisma.dispositive.count();
      return result;
    }
    catch(error:any){
      console.error("Error fetching device total:", error);
      throw error;
    }
  }
  static async getDeviceStatus(
    analyticsPrisma: AnalyticsClient = DeviceService.analyticsPrisma
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
    prisma: MainPrismaClient = DeviceService.prisma
  ) {
    try {
      const result = await prisma.$queryRaw<
        { month: Date; type: string; issue_count: number }[]
      >`
            SELECT 
            DATE_TRUNC('month', di.created_at) AS month,
            d.type,
            COUNT(di.id) AS issue_count
            FROM "DispoIssue" di
            JOIN "Dispositive" d ON di."dispositiveId" = d.id
            GROUP BY DATE_TRUNC('month', di.created_at), d.type
            ORDER BY month, d.type;
            `;
      return result;
    } catch (error) {
      console.error("Error fetching device issues over time:", error);
      throw error;
    }
  }

  static async getDeviceIssues(
    prisma: MainPrismaClient = DeviceService.prisma
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
    prisma: MainPrismaClient = DeviceService.prisma,
    analyticsPrisma: AnalyticsClient =DeviceService.analyticsPrisma
  ) {
    try {
      //count the number of issues for each device
      const dispoIssuesCount = await prisma.dispoIssue.groupBy({
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
      //count the number of interventions for each device
      const dispoInterventionsCount = await prisma.intervention.groupBy({
        by: ["idDispositive"],
        _count: {
          id: true,
        },
        orderBy: {
          _count: {
            id: "desc",
          },
        },
      });
      //average battery level for each device
      const batteryLevel = await analyticsPrisma.deviceUsageLogs.groupBy({
        by: ["dispositive_id"],
        _avg: {
          battery_level: true,
        },
        orderBy: {
          _avg: {
            battery_level: "desc",
          },
        },
      });
      //joing results based on device id
      const devicePerformance = dispoIssuesCount.map((issue) => {
        const intervention = dispoInterventionsCount.find(
          (intervention) => intervention.idDispositive === issue.dispositiveId
        );
        const battery = batteryLevel.find(
          (battery) => battery.dispositive_id === issue.dispositiveId
        );
        return {
          device_id: issue.dispositiveId,
          issues_count: issue._count.id,
          interventions_count: intervention ? intervention._count.id : 0,
          avg_battery_level: battery ? battery._avg.battery_level : 0,
        };
      });
      return devicePerformance;
      
    } catch (error) {
      console.error("Error fetching device performance:", error);
      throw error;
    }
  }

  static async devicesSold(
    prisma: MainPrismaClient = DeviceService.prisma
  ) {
    try {
      const devicesSold = await prisma.$queryRaw<
        { sale_month: Date; devices_sold: number; total_revenue: number }[]
      >`
            SELECT 
                DATE_TRUNC('month', t.created_at) AS sale_month,
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
    prisma: MainPrismaClient = DeviceService.prisma
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
                    WHEN DATE_TRUNC('month', t.created_at) IS NULL THEN 'Total'
                    ELSE TO_CHAR(DATE_TRUNC('month', t.created_at), 'YYYY-MM')
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
                ROLLUP(DATE_TRUNC('month', t.created_at))
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
    prisma: MainPrismaClient = DeviceService.prisma
  ) {
    try {
      const mostPopularDevices = await prisma.$queryRaw<
        {
          product_name: string;
          total_devices: number;
          sales_count: number;
          total_revenue: number;
        }[]
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
    prisma: MainPrismaClient = DeviceService.prisma
  ) {
    try {
      const deviceIntervention = await prisma.$queryRaw<
        {
          intervention_month: Date;
          type: string;
          intervention_count: number;
          resolution_rate: number;
        }[]
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
