import { NavigationService } from '../services/Navigation/NavigationService';
import { PrismaClient as AnalyticsClient } from "../prisma/analytics/generated";

// Create a manual mock of the Analytics Prisma client
jest.mock('../prisma/analytics/generated', () => {
    return {
        PrismaClient: jest.fn().mockImplementation(() => ({
            navigation_logs: {
                findMany: jest.fn(),
            },
            $queryRaw: jest.fn(),
        })),
    };
});

describe('NavigationService', () => {
    let analyticsPrisma: jest.Mocked<AnalyticsClient>;

    beforeEach(() => {
        jest.clearAllMocks();
        analyticsPrisma = new AnalyticsClient() as jest.Mocked<AnalyticsClient>;
    });

    describe('getAllNavigationLogs', () => {
        it('should fetch all navigation logs successfully', async () => {
            const mockLogs = [
                { id: 1, environment_id: 1, start_time: new Date(), end_time: new Date() },
                { id: 2, environment_id: 2, start_time: new Date(), end_time: null },
            ];

            (analyticsPrisma.navigation_logs.findMany as jest.Mock).mockResolvedValue(mockLogs);

            const result = await NavigationService.getAllNavigationLogs(analyticsPrisma);
            expect(result).toEqual(mockLogs);
            expect(analyticsPrisma.navigation_logs.findMany).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when fetching navigation logs fails', async () => {
            const mockError = new Error('Database error');
            (analyticsPrisma.navigation_logs.findMany as jest.Mock).mockRejectedValue(mockError);

            await expect(NavigationService.getAllNavigationLogs(analyticsPrisma)).rejects.toThrow('Database error');
        });
    });

    describe('getMostReroutingRequests', () => {
        it('should fetch the most rerouting requests successfully', async () => {
            const mockResult = [
                { environment_id: 1, reroute_count: 10 },
                { environment_id: 2, reroute_count: 8 },
            ];

            (analyticsPrisma.$queryRaw as jest.Mock).mockResolvedValue(mockResult);

            const result = await NavigationService.getMostReroutingRequests(analyticsPrisma);

            expect(result).toEqual(mockResult);
            expect(analyticsPrisma.$queryRaw).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when fetching most rerouting requests fails', async () => {
            const mockError = new Error('Database error');
            (analyticsPrisma.$queryRaw as jest.Mock).mockRejectedValue(mockError);

            await expect(NavigationService.getMostReroutingRequests(analyticsPrisma)).rejects.toThrow('Database error');
        });
    });

    describe('getSuccessfulNavigations', () => {
        it('should fetch successful navigation metrics successfully', async () => {
            const mockResult = [
                {
                    date: new Date('2023-01-01'),
                    total_attempts: 100,
                    successful_navigations: 80,
                    success_rate: 80.0,
                },
            ];

            (analyticsPrisma.$queryRaw as jest.Mock).mockResolvedValue(mockResult);

            const result = await NavigationService.getSuccessfulNavigations(analyticsPrisma);

            expect(result).toEqual(mockResult);
            expect(analyticsPrisma.$queryRaw).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when fetching successful navigations fails', async () => {
            const mockError = new Error('Database error');
            (analyticsPrisma.$queryRaw as jest.Mock).mockRejectedValue(mockError);

            await expect(NavigationService.getSuccessfulNavigations(analyticsPrisma)).rejects.toThrow('Database error');
        });
    });
});