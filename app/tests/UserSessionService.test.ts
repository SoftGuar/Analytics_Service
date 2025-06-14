import { UserSessionsService } from '../services/UserSession/UserSessionsService';
import { PrismaClient as AnalyticsClient } from "../prisma/analytics/generated";
import { PrismaClient as MainPrismaClient } from "../prisma/main/generated";

// Create a manual mock of the Prisma clients
jest.mock('../prisma/analytics/generated', () => {
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

jest.mock('../prisma/main/generated', () => {
    return {
        PrismaClient: jest.fn().mockImplementation(() => ({
            user: {
                count: jest.fn(),
                findMany: jest.fn(),
            },
        })),
    };
});

describe('UserSessionsService', () => {
    let analyticsPrisma: jest.Mocked<AnalyticsClient>;
    let mainPrisma: jest.Mocked<MainPrismaClient>;

    beforeEach(() => {
        jest.clearAllMocks();
        analyticsPrisma = new AnalyticsClient() as jest.Mocked<AnalyticsClient>;
        mainPrisma = new MainPrismaClient() as jest.Mocked<MainPrismaClient>;
    });

    describe('getTotalUsers', () => {
        it('should fetch total users successfully', async () => {
            (mainPrisma.user.count as jest.Mock).mockResolvedValue(100);

            const result = await UserSessionsService.getTotalUsers(mainPrisma);

            expect(result).toBe(100);
            expect(mainPrisma.user.count).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when fetching total users fails', async () => {
            const mockError = new Error('Database error');
            (mainPrisma.user.count as jest.Mock).mockRejectedValue(mockError);

            await expect(UserSessionsService.getTotalUsers(mainPrisma)).rejects.toThrow('Database error');
        });
    });

    describe('getTopUsersWithNames', () => {
        it('should fetch top users with names successfully', async () => {
            const mockTopUsers = [
                { user_id: 1, _count: { user_id: 10 } },
                { user_id: 2, _count: { user_id: 8 } },
            ];
            const mockUsers = [
                { id: 1, first_name: 'John', last_name: 'Doe' },
                { id: 2, first_name: 'Jane', last_name: 'Smith' },
            ];

            (analyticsPrisma.userSessions.groupBy as jest.Mock).mockResolvedValue(mockTopUsers);
            (mainPrisma.user.findMany as jest.Mock).mockResolvedValue(mockUsers);

            const result = await UserSessionsService.getTopUsersWithNames(analyticsPrisma, mainPrisma);

            expect(result).toEqual([
                { user_id: 1, session_count: 10, name: 'John Doe' },
                { user_id: 2, session_count: 8, name: 'Jane Smith' },
            ]);
            expect(analyticsPrisma.userSessions.groupBy).toHaveBeenCalledTimes(1);
            expect(mainPrisma.user.findMany).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when fetching top users with names fails', async () => {
            const mockError = new Error('Database error');
            (analyticsPrisma.userSessions.groupBy as jest.Mock).mockRejectedValue(mockError);

            await expect(UserSessionsService.getTopUsersWithNames(analyticsPrisma, mainPrisma)).rejects.toThrow('Database error');
        });
    });
    describe('getUserSessionDurationWithNames', () => {
        it('should fetch average session duration with names successfully', async () => {
            const mockDurations = [
                { user_id: 1, avg_session_duration_seconds: 300 },
                { user_id: 2, avg_session_duration_seconds: 250 },
            ];
            const mockUsers = [
                { id: 1, first_name: 'John', last_name: 'Doe' },
                { id: 2, first_name: 'Jane', last_name: 'Smith' },
            ];

            (analyticsPrisma.$queryRaw as jest.Mock).mockResolvedValue(mockDurations);
            (mainPrisma.user.findMany as jest.Mock).mockResolvedValue(mockUsers);

            const result = await UserSessionsService.getUserSessionDurationWithNames(analyticsPrisma, mainPrisma);

            expect(result).toEqual([
                { user_id: 1, avg_session_duration_seconds: 300, name: 'John Doe' },
                { user_id: 2, avg_session_duration_seconds: 250, name: 'Jane Smith' },
            ]);
            expect(analyticsPrisma.$queryRaw).toHaveBeenCalledTimes(1);
            expect(mainPrisma.user.findMany).toHaveBeenCalledTimes(1);
        });

        it('should throw an error when fetching session duration with names fails', async () => {
            const mockError = new Error('Database error');
            (analyticsPrisma.$queryRaw as jest.Mock).mockRejectedValue(mockError);

            await expect(UserSessionsService.getUserSessionDurationWithNames(analyticsPrisma, mainPrisma)).rejects.toThrow('Database error');
        });
    });

    // Similar updates can be made for getDAUs, getMAUs, and getWAUs tests
});
