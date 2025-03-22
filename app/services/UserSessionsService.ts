import { PrismaClient as MainPrismaClient } from '../prisma/generated/main';
import { PrismaClient as AnalyticsClient } from '../prisma/generated/anayltics';
const prisma = new MainPrismaClient();
const analyticsPrisma = new AnalyticsClient();
export class UserSessionsService {
    static async getTopUsers(): Promise<
        { user_id: number; session_count: number }[]
    > {
        try {
            const result = await analyticsPrisma.userSessions.groupBy({
                by: ["user_id"],
                _count: {
                    user_id: true,
                },
                orderBy: {
                    _count: {
                        user_id: "desc",
                    },
                },
                take: 10,
            });

            return result.map((item) => ({
                user_id: item.user_id,
                session_count: item._count.user_id,
            }));
        } catch (error) {
            console.error("Error fetching top users:", error);
            throw error;
        }
    }
    static async getUserRatings(){
        try {
            const result = await analyticsPrisma.$queryRaw<{
               overall_avg_rating: number
            }>`
                SELECT AVG("rating") AS overall_avg_rating
                FROM "Feedback";
                `;
            return result;
        } catch (error) {
            console.error("Error fetching user ratings:", error);
            throw error;
        }
    }
    static async getUserFeedback(){
        try {
            const result = await analyticsPrisma.feedback.findMany();
            return result;
        } catch (error) {
            console.error("Error fetching user feedback:", error);
            throw error;
        }
    }
    static async getUserSessionDuration(){
        try {
            const result = await analyticsPrisma.$queryRaw<
                { user_id: number; avg_session_duration_seconds: number }[]
            >`
                SELECT 
                "user_id", 
                AVG(EXTRACT(EPOCH FROM ("session_end" - "session_start")))::Integer AS avg_session_duration_seconds
                FROM "UserSessions"
                WHERE "session_end" IS NOT NULL
                GROUP BY "user_id"
                ORDER BY avg_session_duration_seconds DESC;
                `;
            return result;
        } catch (error) {
            console.error("Error calculating average session duration:", error);
            throw error;
        }
    }
    static async getDAUs(){
        try {
            const result = await analyticsPrisma.$queryRaw<
                { date: Date; dau_count: number }[]
            >`
                SELECT 
                DATE_TRUNC('day', "session_start") AS date,
                COUNT(DISTINCT "user_id")::Integer AS dau_count
                FROM "UserSessions"
                GROUP BY DATE_TRUNC('day', "session_start")
                ORDER BY date;
                `;
            return result;
        } catch (error) {
            console.error("Error calculating DAUs:", error);
            throw error;
        }
    }
    static async getMAUs(){
        try {
            const result = await analyticsPrisma.$queryRaw<
                { date: Date; mau_count: number }[]
            >`
                SELECT 
                DATE_TRUNC('month', "session_start") AS date,
                COUNT(DISTINCT "user_id")::Integer AS mau_count
                FROM "UserSessions"
                GROUP BY DATE_TRUNC('month', "session_start")
                ORDER BY date;
                `;
            return result;
        } catch (error) {
            console.error("Error calculating MAUs:", error);
            throw error;
        }
    }
    static async getWAUs(){
        try {
            const result = await analyticsPrisma.$queryRaw<
                { date: Date; wau_count: number }[]
            >`
                SELECT 
                DATE_TRUNC('week', "session_start") AS date,
                COUNT(DISTINCT "user_id")::Integer AS wau_count
                FROM "UserSessions"
                GROUP BY DATE_TRUNC('week', "session_start")
                ORDER BY date;
                `;
            return result;
        } catch (error) {
            console.error("Error calculating WAUs:", error);
            throw error;
        }
    }
}