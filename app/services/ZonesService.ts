import { PrismaClient as MainPrismaClient } from "../prisma/generated/main";
import { PrismaClient as AnalyticsClient } from "../prisma/generated/anayltics";
const prisma = new MainPrismaClient();
const analyticsPrisma = new AnalyticsClient();

export class ZonesService {
  static async getTopVisitedZones(
    analyticsPrisma: AnalyticsClient = new AnalyticsClient
  ): Promise<
    { zone_id: number; visit_count: number }[]
  > {
    try {
      const result = await analyticsPrisma.zone_logs.groupBy({
        by: ["zone_id"],
        _count: {
          zone_id: true,
        },
        orderBy: {
          _count: {
            zone_id: "desc",
          },
        },
        take: 10,
      });

      return result.map((item) => ({
        zone_id: item.zone_id,
        visit_count: item._count.zone_id,
      }));
    } catch (error) {
      console.error("Error fetching top visited zones:", error);
      throw error;
    }
  }
  static async getAverageTimeSpentInZones(
    analyticsPrisma: AnalyticsClient = new AnalyticsClient
  ) {
    try {
      const result = await analyticsPrisma.$queryRaw<
        { zone_id: number; avg_time_seconds: number }[]
      >`
            SELECT 
            "zone_id", 
            AVG(EXTRACT(EPOCH FROM ("end_time" - "start_time"))) AS avg_time_seconds
            FROM "Zone_logs"
            WHERE "end_time" IS NOT NULL
            GROUP BY "zone_id"
            ORDER BY avg_time_seconds DESC;
            `;
      return result;
    } catch (error) {
      console.error("Error calculating average time spent in zones:", error);
      throw error;
    }
  }
  static async getZonesWithHighestObstacleCount(
    analyticsPrisma: AnalyticsClient = new AnalyticsClient
  ) {
    try {
      const result = await analyticsPrisma.$queryRaw<
        { zone_id: number; total_obstacles: number }[]
      >`
          SELECT zone_id, SUM(obstacles_encountered)::Integer AS total_obstacles
          FROM "Zone_logs"
          GROUP BY zone_id
          ORDER BY total_obstacles DESC
          LIMIT 5;
            `;
      return result;
    } catch (error) {
      console.error("Error fetching zones with highest obstacle count:", error);
      throw error;
    }
  }
}
