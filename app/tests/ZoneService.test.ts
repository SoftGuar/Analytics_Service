import { ZonesService } from '../services/ZonesService';
import { PrismaClient as AnalyticsClient } from "../prisma/analytics/generated";
// Create a manual mock of the Analytics Prisma client
jest.mock('../prisma/analytics/generated', () => {
    return {
        PrismaClient: jest.fn().mockImplementation(() => ({
            zone_logs: {
                groupBy: jest.fn(),
            },
            $queryRaw: jest.fn(),
        })),
    };
});

describe('ZonesService', () => {
    let analyticsPrisma: jest.Mocked<AnalyticsClient>;

    beforeEach(() => {
        jest.clearAllMocks();
        analyticsPrisma = new AnalyticsClient() as jest.Mocked<AnalyticsClient>;
    });

    describe('getTopVisitedZones', () => {
        it('should fetch the top visited zones successfully', async () => {
            const mockResult = [
                { zone_id: 1, _count: { zone_id: 100 } },
                { zone_id: 2, _count: { zone_id: 80 } },
            ];
            (analyticsPrisma.zone_logs.groupBy as jest.Mock).mockResolvedValue(mockResult);

            const result = await ZonesService.getTopVisitedZones(analyticsPrisma);

            expect(result).toEqual([
                { zone_id: 1, visit_count: 100 },
                { zone_id: 2, visit_count: 80 },
            ]);
            expect(analyticsPrisma.zone_logs.groupBy).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when fetching top visited zones fails', async () => {
            const mockError = new Error('Database error');
            (analyticsPrisma.zone_logs.groupBy as jest.Mock).mockRejectedValue(mockError);

            await expect(ZonesService.getTopVisitedZones(analyticsPrisma)).rejects.toThrow('Database error');
        });
    });

    describe('getAverageTimeSpentInZones', () => {
        it('should fetch the average time spent in zones successfully', async () => {
            const mockResult = [
                { zone_id: 1, avg_time_seconds: 300 },
                { zone_id: 2, avg_time_seconds: 250 },
            ];
            (analyticsPrisma.$queryRaw as jest.Mock).mockResolvedValue(mockResult);

            const result = await ZonesService.getAverageTimeSpentInZones(analyticsPrisma);

            expect(result).toEqual(mockResult);
            expect(analyticsPrisma.$queryRaw).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when fetching average time spent in zones fails', async () => {
            const mockError = new Error('Database error');
            (analyticsPrisma.$queryRaw as jest.Mock).mockRejectedValue(mockError);

            await expect(ZonesService.getAverageTimeSpentInZones(analyticsPrisma)).rejects.toThrow('Database error');
        });
    });

    describe('getZonesWithHighestObstacleCount', () => {
        it('should fetch the zones with the highest obstacle count successfully', async () => {
            const mockResult = [
                { zone_id: 1, total_obstacles: 50 },
                { zone_id: 2, total_obstacles: 30 },
            ];
            (analyticsPrisma.$queryRaw as jest.Mock).mockResolvedValue(mockResult);

            const result = await ZonesService.getZonesWithHighestObstacleCount(analyticsPrisma);

            expect(result).toEqual(mockResult);
            expect(analyticsPrisma.$queryRaw).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when fetching zones with the highest obstacle count fails', async () => {
            const mockError = new Error('Database error');
            (analyticsPrisma.$queryRaw as jest.Mock).mockRejectedValue(mockError);

            await expect(ZonesService.getZonesWithHighestObstacleCount(analyticsPrisma)).rejects.toThrow('Database error');
        });
    });
});