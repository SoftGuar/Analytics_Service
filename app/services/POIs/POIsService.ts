import { PrismaClient as MainPrismaClient } from "../../prisma/main/generated";
import { PrismaClient as AnalyticsClient } from "../../prisma/analytics/generated";
const prisma = new MainPrismaClient();
const analyticsPrisma = new AnalyticsClient();
export class POIsService {
  private static prisma: AnalyticsClient = analyticsPrisma;
  static async getTopVisitedPOIs(analyticsPrisma: AnalyticsClient = POIsService.prisma): Promise<{ POI_id: number; visit_count: number }[]> {
    try {
      const result = await analyticsPrisma.pOI_logs.groupBy({
        by: ["poi_id"],
        _count: {
          poi_id: true,
        },
        orderBy: {
          _count: {
            poi_id: "desc",
          },
        },
        take: 10,
      });

      if (!Array.isArray(result)) {
        console.error('No data found for top visited POIs', result);
        return [];
      }

      return result.map((item) => ({
        POI_id: item.poi_id,
        visit_count: item._count.poi_id,
      }));
    } catch (error) {
      console.error('Error fetching top visited POIs:', error);
      throw error;
    }
  }
}