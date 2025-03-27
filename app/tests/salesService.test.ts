import { SalesStatsService } from '../services/salesStatsService';
import { PrismaClient as MainPrismaClient } from '../prisma/generated/main';

// Create a manual mock of the Main Prisma client
jest.mock('../prisma/generated/main', () => {
    return {
        PrismaClient: jest.fn().mockImplementation(() => ({
            $queryRaw: jest.fn(),
        })),
    };
});

describe('SalesStatsService', () => {
    let prisma: jest.Mocked<MainPrismaClient>;
    let salesStatsService: SalesStatsService;

    beforeEach(() => {
        jest.clearAllMocks();
        prisma = new MainPrismaClient() as jest.Mocked<MainPrismaClient>;
        salesStatsService = new SalesStatsService();
    });

    describe('getCRR', () => {
        it('should calculate the CRR successfully', async () => {
            const mockResult = [
                { new_customers: 10, existing_customers: 5 },
            ];
            (prisma.$queryRaw as jest.Mock).mockResolvedValue(mockResult);

            const result = await salesStatsService.getCRR(prisma);

            expect(result).toBe(33.33);
            expect(prisma.$queryRaw).toHaveBeenCalledTimes(1);
        });

        it('should return 0 when there are no customers', async () => {
            const mockResult = [
                { new_customers: 0, existing_customers: 0 },
            ];
            (prisma.$queryRaw as jest.Mock).mockResolvedValue(mockResult);

            const result = await salesStatsService.getCRR(prisma);

            expect(result).toBe(0);
            expect(prisma.$queryRaw).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when calculating CRR fails', async () => {
            const mockError = new Error('Database error');
            (prisma.$queryRaw as jest.Mock).mockRejectedValue(mockError);

            await expect(salesStatsService.getCRR(prisma)).rejects.toThrow('Database error');
        });
    });

    describe('getCustomerRetentionDetails', () => {
        it('should return detailed retention data successfully', async () => {
            const mockResult = [
                {
                    new_customers: 10,
                    existing_customers: 5,
                    total_customers: 15,
                    retention_rate: 33.33,
                },
            ];
            (prisma.$queryRaw as jest.Mock).mockResolvedValue(mockResult);

            const result = await salesStatsService.getCustomerRetentionDetails(prisma);

            expect(result).toEqual(mockResult[0]);
            expect(prisma.$queryRaw).toHaveBeenCalledTimes(1);
        });

        it('should return default values when no data is available', async () => {
            const mockResult: any[] = [];
            (prisma.$queryRaw as jest.Mock).mockResolvedValue(mockResult);

            const result = await salesStatsService.getCustomerRetentionDetails(prisma);

            expect(result).toEqual({
                new_customers: 0,
                existing_customers: 0,
                total_customers: 0,
                retention_rate: 0,
            });
            expect(prisma.$queryRaw).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when fetching retention details fails', async () => {
            const mockError = new Error('Database error');
            (prisma.$queryRaw as jest.Mock).mockRejectedValue(mockError);

            await expect(salesStatsService.getCustomerRetentionDetails(prisma)).rejects.toThrow('Database error');
        });
    });
});