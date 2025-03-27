import { InterventionService } from '../services/interventionService';
import { PrismaClient as MainPrismaClient } from '../prisma/generated/main';

// Create a manual mock of the Main Prisma client
jest.mock('../prisma/generated/main', () => {
    return {
        PrismaClient: jest.fn().mockImplementation(() => ({
            $queryRaw: jest.fn(),
        })),
    };
});

describe('InterventionService', () => {
    let prisma: jest.Mocked<MainPrismaClient>;

    beforeEach(() => {
        jest.clearAllMocks();
        prisma = new MainPrismaClient() as jest.Mocked<MainPrismaClient>;
    });

    describe('getInterventionAverageDuration', () => {
        it('should fetch the average intervention duration successfully', async () => {
            const mockResult = [{ avg_repair_time: 3600 }];
            (prisma.$queryRaw as jest.Mock).mockResolvedValue(mockResult);

            const result = await InterventionService.getInterventionAverageDuration(prisma);

            expect(result).toEqual(mockResult);
            expect(prisma.$queryRaw).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when fetching average intervention duration fails', async () => {
            const mockError = new Error('Database error');
            (prisma.$queryRaw as jest.Mock).mockRejectedValue(mockError);

            await expect(InterventionService.getInterventionAverageDuration(prisma)).rejects.toThrow('Database error');
        });
    });

    describe('getMonthlyAverageDuration', () => {
        it('should fetch the monthly average duration successfully', async () => {
            const mockResult = [
                { year: 2023, month: 1, average_duration: 5.5 },
                { year: 2023, month: 2, average_duration: 6.0 },
            ];
            (prisma.$queryRaw as jest.Mock).mockResolvedValue(mockResult);

            const result = await InterventionService.getMonthlyAverageDuration(prisma);

            expect(result).toEqual(mockResult);
            expect(prisma.$queryRaw).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when fetching monthly average duration fails', async () => {
            const mockError = new Error('Database error');
            (prisma.$queryRaw as jest.Mock).mockRejectedValue(mockError);

            await expect(InterventionService.getMonthlyAverageDuration(prisma)).rejects.toThrow('Database error');
        });
    });

    describe('getMaintainerInterventionCount', () => {
        it('should fetch the maintainer intervention count successfully', async () => {
            const mockResult = [
                { maintainer_id: 1, intervention_count: 10 },
                { maintainer_id: 2, intervention_count: 5 },
            ];
            (prisma.$queryRaw as jest.Mock).mockResolvedValue(mockResult);

            const result = await InterventionService.getMaintainerInterventionCount(prisma);

            expect(result).toEqual(mockResult);
            expect(prisma.$queryRaw).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when fetching maintainer intervention count fails', async () => {
            const mockError = new Error('Database error');
            (prisma.$queryRaw as jest.Mock).mockRejectedValue(mockError);

            await expect(InterventionService.getMaintainerInterventionCount(prisma)).rejects.toThrow('Database error');
        });
    });

    describe('getAverageAnswerTime', () => {
        it('should fetch the average answer time successfully', async () => {
            const mockResult = [
                { issue_id: 1, maintainer_id: 1, avg_response_time_minutes: 15 },
                { issue_id: 2, maintainer_id: 2, avg_response_time_minutes: 20 },
            ];
            (prisma.$queryRaw as jest.Mock).mockResolvedValue(mockResult);

            const result = await InterventionService.getAverageAnswerTime(prisma);

            expect(result).toEqual(mockResult);
            expect(prisma.$queryRaw).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when fetching average answer time fails', async () => {
            const mockError = new Error('Database error');
            (prisma.$queryRaw as jest.Mock).mockRejectedValue(mockError);

            await expect(InterventionService.getAverageAnswerTime(prisma)).rejects.toThrow('Database error');
        });
    });
});