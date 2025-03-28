import { UserSessionsService } from '../services/UserSession/UserSessionsService';
import { PrismaClient as AnalyticsClient } from '../prisma/generated/anayltics';

// Create a manual mock of the Analytics Prisma client
jest.mock('../prisma/generated/anayltics', () => {
    return {
        PrismaClient: jest.fn().mockImplementation(() => ({
            userSessions: {
                groupBy: jest.fn(),
            },
            feedback: {
                findMany: jest.fn(),
            },
            $queryRaw: jest.fn(),
        })),
    };
});

describe('UserSessionsService', () => {
    let analyticsPrisma: jest.Mocked<AnalyticsClient>;

    beforeEach(() => {
        jest.clearAllMocks();
        analyticsPrisma = new AnalyticsClient() as jest.Mocked<AnalyticsClient>;
    });

    describe('getTopUsers', () => {
        it('should fetch top users successfully', async () => {
            const mockResult = [
                { user_id: 1, _count: { user_id: 10 } },
                { user_id: 2, _count: { user_id: 8 } },
            ];

            (analyticsPrisma.userSessions.groupBy as jest.Mock).mockResolvedValue(mockResult);

            const result = await UserSessionsService.getTopUsers(analyticsPrisma);

            expect(result).toEqual([
                { user_id: 1, session_count: 10 },
                { user_id: 2, session_count: 8 },
            ]);
            expect(analyticsPrisma.userSessions.groupBy).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when fetching top users fails', async () => {
            const mockError = new Error('Database error');
            (analyticsPrisma.userSessions.groupBy as jest.Mock).mockRejectedValue(mockError);

            await expect(UserSessionsService.getTopUsers(analyticsPrisma)).rejects.toThrow('Database error');
        });
    });

    describe('getUserRatings', () => {
        it('should fetch user ratings successfully', async () => {
            const mockResult = [{ overall_avg_rating: 4.5 }];

            (analyticsPrisma.$queryRaw as jest.Mock).mockResolvedValue(mockResult);

            const result = await UserSessionsService.getUserRatings(analyticsPrisma);

            expect(result).toEqual(mockResult[0]);
            expect(analyticsPrisma.$queryRaw).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when fetching user ratings fails', async () => {
            const mockError = new Error('Database error');
            (analyticsPrisma.$queryRaw as jest.Mock).mockRejectedValue(mockError);

            await expect(UserSessionsService.getUserRatings(analyticsPrisma)).rejects.toThrow('Database error');
        });
    });

    describe('getUserFeedback', () => {
        it('should fetch user feedback successfully', async () => {
            const mockFeedback = [
                { id: 1, user_id: 1, rating: 5, comment: 'Great!' },
                { id: 2, user_id: 2, rating: 4, comment: 'Good' },
            ];

            (analyticsPrisma.feedback.findMany as jest.Mock).mockResolvedValue(mockFeedback);

            const result = await UserSessionsService.getUserFeedback(analyticsPrisma);

            expect(result).toEqual(mockFeedback);
            expect(analyticsPrisma.feedback.findMany).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when fetching user feedback fails', async () => {
            const mockError = new Error('Database error');
            (analyticsPrisma.feedback.findMany as jest.Mock).mockRejectedValue(mockError);

            await expect(UserSessionsService.getUserFeedback(analyticsPrisma)).rejects.toThrow('Database error');
        });
    });

    describe('getUserSessionDuration', () => {
        it('should fetch average session duration successfully', async () => {
            const mockResult = [
                { user_id: 1, avg_session_duration_seconds: 300 },
                { user_id: 2, avg_session_duration_seconds: 250 },
            ];

            (analyticsPrisma.$queryRaw as jest.Mock).mockResolvedValue(mockResult);

            const result = await UserSessionsService.getUserSessionDuration(analyticsPrisma);

            expect(result).toEqual(mockResult);
            expect(analyticsPrisma.$queryRaw).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when fetching session duration fails', async () => {
            const mockError = new Error('Database error');
            (analyticsPrisma.$queryRaw as jest.Mock).mockRejectedValue(mockError);

            await expect(UserSessionsService.getUserSessionDuration(analyticsPrisma)).rejects.toThrow('Database error');
        });
    });

    describe('getDAUs', () => {
        it('should fetch daily active users successfully', async () => {
            const mockResult = [
                { date: new Date('2023-01-01'), dau_count: 100 },
                { date: new Date('2023-01-02'), dau_count: 120 },
            ];

            (analyticsPrisma.$queryRaw as jest.Mock).mockResolvedValue(mockResult);

            const result = await UserSessionsService.getDAUs(analyticsPrisma);

            expect(result).toEqual(mockResult);
            expect(analyticsPrisma.$queryRaw).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when fetching DAUs fails', async () => {
            const mockError = new Error('Database error');
            (analyticsPrisma.$queryRaw as jest.Mock).mockRejectedValue(mockError);

            await expect(UserSessionsService.getDAUs(analyticsPrisma)).rejects.toThrow('Database error');
        });
    });

    describe('getMAUs', () => {
        it('should fetch monthly active users successfully', async () => {
            const mockResult = [
                { date: new Date('2023-01-01'), mau_count: 500 },
                { date: new Date('2023-02-01'), mau_count: 600 },
            ];

            (analyticsPrisma.$queryRaw as jest.Mock).mockResolvedValue(mockResult);

            const result = await UserSessionsService.getMAUs(analyticsPrisma);

            expect(result).toEqual(mockResult);
            expect(analyticsPrisma.$queryRaw).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when fetching MAUs fails', async () => {
            const mockError = new Error('Database error');
            (analyticsPrisma.$queryRaw as jest.Mock).mockRejectedValue(mockError);

            await expect(UserSessionsService.getMAUs(analyticsPrisma)).rejects.toThrow('Database error');
        });
    });

    describe('getWAUs', () => {
        it('should fetch weekly active users successfully', async () => {
            const mockResult = [
                { date: new Date('2023-01-01'), wau_count: 200 },
                { date: new Date('2023-01-08'), wau_count: 220 },
            ];

            (analyticsPrisma.$queryRaw as jest.Mock).mockResolvedValue(mockResult);

            const result = await UserSessionsService.getWAUs(analyticsPrisma);

            expect(result).toEqual(mockResult);
            expect(analyticsPrisma.$queryRaw).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when fetching WAUs fails', async () => {
            const mockError = new Error('Database error');
            (analyticsPrisma.$queryRaw as jest.Mock).mockRejectedValue(mockError);

            await expect(UserSessionsService.getWAUs(analyticsPrisma)).rejects.toThrow('Database error');
        });
    });
});