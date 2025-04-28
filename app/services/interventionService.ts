import { PrismaClient as MainPrismaClient } from "../prisma/main/generated";
import { PrismaClient as AnalyticsClient } from "../prisma/analytics/generated";
const prisma = new MainPrismaClient();
const analyticsPrisma = new AnalyticsClient();

export class InterventionService {
  private static prisma: MainPrismaClient = prisma;
  private static analyticsPrisma: AnalyticsClient = analyticsPrisma;
  static setPrismaClient(client: MainPrismaClient) {
    this.prisma = client;
  }
  static async getInterventionAverageDuration(
    prisma: MainPrismaClient = InterventionService.prisma
  ) {
    try {
      const result = await prisma.$queryRaw<{ avg_repair_time: number }>`
            SELECT AVG(EXTRACT(EPOCH FROM end_date) - EXTRACT(EPOCH FROM start_date)) AS avg_repair_time
            FROM "Intervention"
            WHERE end_date IS NOT NULL;
            `;
      return result;
    } catch (error) {
      console.error("Error fetching intervention average duration:", error);
      throw error;
    }
  }

  static async getMonthlyAverageDuration(
    prisma: MainPrismaClient = InterventionService.prisma
  ) {
    try {
      const result = await prisma.$queryRaw<
        { month: number; year: number; average_duration: number }[]
      >`
            SELECT
                EXTRACT(YEAR FROM start_date) AS year,
                EXTRACT(MONTH FROM start_date) AS month,
                AVG(EXTRACT(EPOCH FROM end_date - start_date) / 3600)::NUMERIC(10, 2) AS average_duration
            FROM "Intervention"
            WHERE end_date IS NOT NULL
            GROUP BY year, month
            ORDER BY year, month;
            `;

      return result;
    } catch (error) {
      console.error("Error fetching monthly average duration:", error);
      throw error;
    }
  }

  static async getMaintainerInterventionCount(
    prisma: MainPrismaClient = InterventionService.prisma
  ) {
    try {
      const result = await prisma.$queryRaw<
        { maintainer_id: number; intervention_count: number }[]
      >`
            SELECT
            "idMaintainer" AS maintainer_id,
            COUNT(*) AS intervention_count
            FROM
            "Intervention"
            GROUP BY
            "idMaintainer";
            `;
      return result;
    } catch (error) {
      console.error("Error fetching maintainer intervention count:", error);
      throw error;
    }
  }

  static async getAverageAnswerTime(
    prisma: MainPrismaClient = InterventionService.prisma
  ) {
    try {
      const result = await prisma.$queryRaw<
        {
          issue_id: number;
          maintainer_id: number;
          avg_response_time_minutes: number;
        }[]
      >`
            SELECT 
            d.id AS issue_id,
            i."idMaintainer" AS maintainer_id,
            AVG(EXTRACT(EPOCH FROM (i.start_date - d.created_at)) / 60) AS avg_response_time_minutes
            FROM "DispoIssue" d
            JOIN "Intervention" i ON d."maintainerId" = i."idMaintainer"
            WHERE i.start_date IS NOT NULL
            GROUP BY d.id, i."idMaintainer"
            ORDER BY avg_response_time_minutes ASC;
            `;
      return result;
    } catch (error) {
      console.error("Error fetching average answer time:", error);
      throw error;
    }
  }
}
