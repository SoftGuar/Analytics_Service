import { PrismaClient as AnalyticsClient } from "../prisma/analytics/generated";
const analyticsPrisma = new AnalyticsClient();

function formatHours(value: number | null): string {
  if (value === null) return "N/A";
  const hours = Math.floor(value);
  const minutes = Math.round((value - hours) * 60);
  return `${hours}h ${minutes}m`;
}

async function fetchUptimeStats(
    prisma: AnalyticsClient = analyticsPrisma
) {
  const fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - 60);
  const toDate = new Date();

  try {
    const stats = await prisma.executiveReport.aggregate({
      _avg: { system_uptime: true },
      _max: { system_uptime: true },
      where: {
        timestamp: {
          gte: fromDate,
          lte: toDate,
        },
      },
    });

    const result = {
      averageUptimeRaw: stats._avg.system_uptime,
      maxUptimeRaw: stats._max.system_uptime,
      averageUptime: formatHours(stats._avg.system_uptime),
      maxUptime: formatHours(stats._max.system_uptime),
    };
    return result;
  } catch (error) {
    console.error("❌ Error fetching uptime stats:", error);
    return null;
  }
}

async function fetchAnomalies(
    prisma: AnalyticsClient = analyticsPrisma
) {
  return prisma.executiveReport.findMany({
    where: {
      OR: [
        { cpu_usage: { gt: 90 } },
        { memory_used: { gt: 8000 } },
        { network_errors: { gt: 10 } }
      ],
      timestamp: {
        gte: new Date(new Date().setDate(new Date().getDate() - 30)) // Last 30 days
      }
    }
  });
}
async function fetchDiskUsage(
    prisma: AnalyticsClient = analyticsPrisma
) {
  return prisma.executiveReport.findMany({
    where: { timestamp: { gte: new Date(new Date().setDate(new Date().getDate() - 40)), lte: new Date() } },
    select: { timestamp: true, disk_usage_percent: true , cpu_usage: true },
  });
}
export class SystemService {
  static async getUptimeStats(
    prisma: AnalyticsClient = analyticsPrisma
  ) {
    return fetchUptimeStats(
        prisma
    );
  }

  static async getAnomalies(
    prisma: AnalyticsClient = analyticsPrisma
  ) {
    return fetchAnomalies(
        prisma
    );
  }

  static async getDiskUsage(
    prisma: AnalyticsClient = analyticsPrisma
  ) {
    return fetchDiskUsage(
        prisma
    );
  }
}
