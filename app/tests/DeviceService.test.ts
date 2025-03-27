import { DeviceService } from '../services/devices/DeviceService';
import { PrismaClient as MainPrismaClient } from '../prisma/generated/main';
import { PrismaClient as AnalyticsClient } from '../prisma/generated/anayltics';

// Create a manual mock of the Prisma clients
jest.mock('../prisma/generated/main', () => {
    return {
        PrismaClient: jest.fn().mockImplementation(() => ({
            dispoIssue: {
                groupBy: jest.fn(),
            },
            dispositive: {
                findMany: jest.fn(),
            },
            $queryRaw: jest.fn(),
        })),
    };
});

jest.mock('../prisma/generated/anayltics', () => {
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

    describe('getDeviceStatus', () => {
        it('should fetch device status successfully', async () => {
          // Mock data for device status
          const mockDeviceStatusResult = [
            {
              dispositive_id: 1,
              connected: true,
              timestamp: new Date('2024-03-27T10:00:00Z'),
              battery_level: 85
            },
            {
              dispositive_id: 2,
              connected: false,
              timestamp: new Date('2024-03-27T09:30:00Z'),
              battery_level: 42
            }
          ];
    
          // Setup mock implementation
          const mockAnalyticsPrisma = new AnalyticsClient();
          (mockAnalyticsPrisma.$queryRaw as jest.Mock).mockResolvedValue(mockDeviceStatusResult);
    
          const result = await DeviceService.getDeviceStatus(mockAnalyticsPrisma);
    
          // Assertions
          expect(result).toEqual(mockDeviceStatusResult);
          expect(mockAnalyticsPrisma.$queryRaw).toHaveBeenCalledTimes(1);
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
                        { id: 1, date: new Date('2023-01-10'), dispositiveId: 1 },
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
    describe('devicesSold', () => {
        it('should return devices sold per month', async () => {
            const mockResult = [
                { sale_month: new Date('2023-01-01'), devices_sold: 10, total_revenue: 5000 },
            ];
            const mockMainPrisma= new MainPrismaClient();
            (mockMainPrisma.$queryRaw as jest.Mock).mockResolvedValue(mockResult);

            const result = await DeviceService.devicesSold(mockMainPrisma);

            expect(result).toEqual(mockResult);
            expect(mockMainPrisma.$queryRaw).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when the query fails', async () => {
            const mockError = new Error('Database error');
            (mainPrisma.$queryRaw as jest.Mock).mockRejectedValue(mockError);

            await expect(DeviceService.devicesSold(mainPrisma)).rejects.toThrow('Database error');
        });
    });

    describe('deviceRevenue', () => {
        it('should return device revenue metrics', async () => {
            const mockResult = [
                {
                    sale_period: new Date('2023-01-01'),
                    devices_sold: 10,
                    total_revenue: 5000,
                    avg_device_price: 500,
                },
            ];

            const mockMainPrisma= new MainPrismaClient();
            (mockMainPrisma.$queryRaw as jest.Mock).mockResolvedValue(mockResult);


            const result = await DeviceService.deviceRevenue(mockMainPrisma);

            expect(result).toEqual(mockResult);
            expect(mockMainPrisma.$queryRaw).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when the query fails', async () => {
            const mockError = new Error('Database error');
            (mainPrisma.$queryRaw as jest.Mock).mockRejectedValue(mockError);

            await expect(DeviceService.deviceRevenue(mainPrisma)).rejects.toThrow('Database error');
        });
    });

    describe('getMostPopularDevices', () => {
        it('should return the most popular devices', async () => {
            const mockResult = [
                {
                    product_name: 'Device A',
                    total_devices: 100,
                    sales_count: 80,
                    total_revenue: 40000,
                },
            ];

            (mainPrisma.$queryRaw as jest.Mock).mockResolvedValue(mockResult);

            const result = await DeviceService.getMostPopularDevices(mainPrisma);

            expect(result).toEqual(mockResult);
            expect(mainPrisma.$queryRaw).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when the query fails', async () => {
            const mockError = new Error('Database error');
            (mainPrisma.$queryRaw as jest.Mock).mockRejectedValue(mockError);

            await expect(DeviceService.getMostPopularDevices(mainPrisma)).rejects.toThrow('Database error');
        });
    });

    describe('getDeviceIntervention', () => {
        it('should return device intervention metrics', async () => {
            const mockResult = [
                {
                    intervention_month: new Date('2023-01-01'),
                    type: 'Repair',
                    intervention_count: 5,
                    resolution_rate: 80,
                },
            ];

            (mainPrisma.$queryRaw as jest.Mock).mockResolvedValue(mockResult);

            const result = await DeviceService.getDeviceIntervention(mainPrisma);

            expect(result).toEqual(mockResult);
            expect(mainPrisma.$queryRaw).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when the query fails', async () => {
            const mockError = new Error('Database error');
            (mainPrisma.$queryRaw as jest.Mock).mockRejectedValue(mockError);

            await expect(DeviceService.getDeviceIntervention(mainPrisma)).rejects.toThrow('Database error');
        });
    });
});