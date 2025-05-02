import { PrismaClient as MainPrismaClient } from "../prisma/main/generated";
import { PrismaClient as AnalyticsClient } from "../prisma/analytics/generated";
const prisma = new MainPrismaClient();
const analyticsPrisma = new AnalyticsClient();

export class LogsService {
  private static prisma: MainPrismaClient = prisma;
  private static analyticsPrisma: AnalyticsClient = analyticsPrisma;
  static setPrismaClient(client: MainPrismaClient) {
    this.prisma = client;
  }
  static async getLogs(prisma: MainPrismaClient = LogsService.prisma) {
    try {
      const logs = await analyticsPrisma.logs.findMany({
        orderBy: { created_at: "desc" },
        take: 100, // Limit to the last 100 logs
      });
      return logs;
    } catch (error) {
      console.error("Error fetching logs:", error);
      throw error;
    }
  }
}