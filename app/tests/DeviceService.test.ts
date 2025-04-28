import { DeviceService } from '../services/devices/DeviceService';
import { PrismaClient as MainPrismaClient } from "../prisma/main/generated";
import { PrismaClient as AnalyticsClient } from "../prisma/analytics/generated";

// Create a manual mock of the Prisma clients
jest.mock('../prisma/main/generated', () => {
    return {
        PrismaClient: jest.fn().mockImplementation(() => ({
            dispoIssue: {
                groupBy: jest.fn(),
            },
            dispositive: {
                findMany: jest.fn(),
                count: jest.fn(),
            },
            $queryRaw: jest.fn(),
        })),
    };
});

jest.mock('../prisma/analytics/generated', () => {
    return {
        PrismaClient: jest.fn().mockImplementation(() => ({
            $queryRaw: jest.fn(),
            deviceUsageLogs: {
                findMany: jest.fn(),
            },
        })),
    };
});

describe('DeviceService', () => {
    let mainPrisma: jest.Mocked<MainPrismaClient>;
    let analyticsPrisma: jest.Mocked<AnalyticsClient>;

    beforeEach(() => {
        jest.clearAllMocks();
        mainPrisma = new MainPrismaClient() as jest.Mocked<MainPrismaClient>;
        analyticsPrisma = new AnalyticsClient() as jest.Mocked<AnalyticsClient>;
    });

    describe('getDeviceTotal', () => {
        it('should return the total number of devices', async () => {
            (mainPrisma.dispositive.count as jest.Mock).mockResolvedValue(42);

            const result = await DeviceService.getDeviceTotal(mainPrisma);

            expect(result).toBe(42);
            expect(mainPrisma.dispositive.count).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when the query fails', async () => {
            const mockError = new Error('Database error');
            (mainPrisma.dispositive.count as jest.Mock).mockRejectedValue(mockError);

            await expect(DeviceService.getDeviceTotal(mainPrisma)).rejects.toThrow('Database error');
        });
    });

    describe('getDeviceStatus', () => {
        it('should fetch device status successfully', async () => {
            const mockDeviceStatusResult = [
                {
                    dispositive_id: 1,
                    connected: true,
                    timestamp: new Date('2024-03-27T10:00:00Z'),
                    battery_level: 85,
                },
                {
                    dispositive_id: 2,
                    connected: false,
                    timestamp: new Date('2024-03-27T09:30:00Z'),
                    battery_level: 42,
                },
            ];

            (analyticsPrisma.$queryRaw as jest.Mock).mockResolvedValue(mockDeviceStatusResult);

            const result = await DeviceService.getDeviceStatus(analyticsPrisma);

            expect(result).toEqual(mockDeviceStatusResult);
            expect(analyticsPrisma.$queryRaw).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when the query fails', async () => {
            const mockError = new Error('Database error');
            (analyticsPrisma.$queryRaw as jest.Mock).mockRejectedValue(mockError);

            await expect(DeviceService.getDeviceStatus(analyticsPrisma)).rejects.toThrow('Database error');
        });
    });

    describe('getDeviceIssues', () => {
        it('should return grouped device issues', async () => {
            const mockResult = [
                { dispositiveId: 1, _count: { id: 5 } },
                { dispositiveId: 2, _count: { id: 3 } },
            ];

            (mainPrisma.dispoIssue.groupBy as jest.Mock).mockResolvedValue(mockResult);

            const result = await DeviceService.getDeviceIssues(mainPrisma);

            expect(result).toEqual(mockResult);
            expect(mainPrisma.dispoIssue.groupBy).toHaveBeenCalledWith({
                by: ['dispositiveId'],
                _count: { id: true },
                orderBy: { _count: { id: 'desc' } },
            });
        });

        it('should throw an error when the query fails', async () => {
            const mockError = new Error('Database error');
            (mainPrisma.dispoIssue.groupBy as jest.Mock).mockRejectedValue(mockError);

            await expect(DeviceService.getDeviceIssues(mainPrisma)).rejects.toThrow('Database error');
        });
    });

    describe('getDevicePerformance', () => {
        it('should return device performance metrics', async () => {
            const mockDispositiveIssues = [
                {
                    id: 1,
                    MAC: '00:11:22:33:44:55',
                    start_date: new Date('2023-01-01'),
                    DispotiveIssue: [
                        { id: 1, created_at: new Date('2023-01-10'), dispositiveId: 1 },
                    ],
                    Product: { name: 'Device A' },
                },
            ];

            const mockDeviceUsageLogs = [
                { dispositive_id: 1, battery_level: 80 },
                { dispositive_id: 1, battery_level: 70 },
            ];

            (mainPrisma.dispositive.findMany as jest.Mock).mockResolvedValue(mockDispositiveIssues);
            (analyticsPrisma.deviceUsageLogs.findMany as jest.Mock).mockResolvedValue(mockDeviceUsageLogs);

            const result = await DeviceService.getDevicePerformance(mainPrisma, analyticsPrisma);

            expect(result).toEqual([
                {
                    device_id: 1,
                    device_mac: '00:11:22:33:44:55',
                    avg_battery_level: 75,
                    total_issues: 1,
                    avg_days_to_first_issue: 9,
                },
            ]);
        });

        it('should throw an error when fetching dispositive issues fails', async () => {
            const mockError = new Error('Database error');
            (mainPrisma.dispositive.findMany as jest.Mock).mockRejectedValue(mockError);

            await expect(DeviceService.getDevicePerformance(mainPrisma, analyticsPrisma)).rejects.toThrow('Database error');
        });
    });
});
