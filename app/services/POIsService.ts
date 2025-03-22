import { PrismaClient as MainPrismaClient } from '../prisma/generated/main';
import { PrismaClient as AnalyticsClient } from '../prisma/generated/anayltics';
const prisma = new MainPrismaClient();
const analyticsPrisma = new AnalyticsClient();

export class POIsService {
    static async getTopVisitedPOIs(): Promise<{ POI_id: number; visit_count: number }[]> {
        try {
            const result = await analyticsPrisma.pOI_logs.groupBy({
                by: ['poi_id'],
                _count: {
                    poi_id: true,
                },
                orderBy: {
                    _count: {
                        poi_id: 'desc',
                    },
                },
                take: 10,
            });

            return result.map(item => ({
                POI_id: item.poi_id,
                visit_count: item._count.poi_id,
            }));
        } catch (error) {
            console.error('Error fetching top visited POIs:', error);
            throw error;
        }
    }
}
