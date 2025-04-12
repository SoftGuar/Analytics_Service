import { PrismaClient as MainPrismaClient } from "../../prisma/main/generated";
import { PrismaClient as AnalyticsClient } from "../../prisma/analytics/generated";
const prisma = new MainPrismaClient();
const analyticsPrisma = new AnalyticsClient();
export class UserSessionsService {
  static async getTotalUsers(
    prisma: MainPrismaClient = new MainPrismaClient()
  ){
    try{
      const result = await prisma.user.count();
      return result;
    }
    catch(error:any){
      console.error("Error fetching total users:", error);
      throw error;
    }
  }
  static async getTopUsers(
    analyticsPrisma: AnalyticsClient = new AnalyticsClient()
  ): Promise<
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
  static async getUserRatings(
    analyticsPrisma: AnalyticsClient = new AnalyticsClient()
  ) {
    try {
      const result = await analyticsPrisma.$queryRaw<
       {overall_avg_rating: number}[]
      >`
                SELECT AVG("rating") AS overall_avg_rating
                FROM "Feedback";
                `;
      return result[0];
    } catch (error) {
      console.error("Error fetching user ratings:", error);
      throw error;
    }
  }
  static async getUserFeedback(
    analyticsPrisma: AnalyticsClient = new AnalyticsClient()
  ) {
    try {
      const result = await analyticsPrisma.feedback.findMany();
      return result;
    } catch (error) {
      console.error("Error fetching user feedback:", error);
      throw error;
    }
  }
  static async getUserSessionDuration(
    analyticsPrisma: AnalyticsClient = new AnalyticsClient()
  ) {
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
  static async getDAUs(
    analyticsPrisma: AnalyticsClient = new AnalyticsClient
  ) {
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
  static async getMAUs(
    analyticsPrisma: AnalyticsClient = new AnalyticsClient()
  ) {
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
  static async getWAUs(
    analyticsPrisma: AnalyticsClient = new AnalyticsClient()
  ) {
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
