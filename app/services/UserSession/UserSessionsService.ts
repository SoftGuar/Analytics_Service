import { PrismaClient as MainPrismaClient } from "../../prisma/main/generated";
import { PrismaClient as AnalyticsClient } from "../../prisma/analytics/generated";
const prisma = new MainPrismaClient();
const analyticsPrisma = new AnalyticsClient();
export class UserSessionsService {
  private static prisma = prisma;
  private static analyticsPrisma = analyticsPrisma;
  static async getTotalUsers(
    prisma: MainPrismaClient = UserSessionsService.prisma
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
  static async getTopUsersWithNames(
    analyticsPrisma: AnalyticsClient = UserSessionsService.analyticsPrisma,
    prisma: MainPrismaClient = UserSessionsService.prisma
  ): Promise<
    { user_id: number; session_count: number; name: string | null }[]
  > {
    try {
      const topUsers = await analyticsPrisma.userSessions.groupBy({
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

      const userIds = topUsers.map((item) => item.user_id);

      const users = await prisma.user.findMany({
        where: {
          id: {
            in: userIds,
          },
        },
        select: {
          id: true,
          first_name: true,
          last_name: true,
        },
      });
      const userMap = new Map(users.map((user) => [user.id, `${user.first_name} ${user.last_name}`]));

      return topUsers.map((item) => ({
        user_id: item.user_id,
        session_count: item._count.user_id,
        name: userMap.get(item.user_id) || null,
      }));
    } catch (error) {
      console.error("Error fetching top users with names:", error);
      throw error;
    }
  }
  static async getUserRatings(
    analyticsPrisma: AnalyticsClient = UserSessionsService.analyticsPrisma
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
    analyticsPrisma: AnalyticsClient = UserSessionsService.analyticsPrisma
  ) {
    try {
      const result = await analyticsPrisma.feedback.findMany();
      return result;
    } catch (error) {
      console.error("Error fetching user feedback:", error);
      throw error;
    }
  }
  static async getUserSessionDurationWithNames(
    analyticsPrisma: AnalyticsClient = UserSessionsService.analyticsPrisma,
    prisma: MainPrismaClient = UserSessionsService.prisma
  ) {
    try {
      const sessionDurations = await analyticsPrisma.$queryRaw<
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

      const userIds = sessionDurations.map((item) => item.user_id);

      const users = await prisma.user.findMany({
        where: {
          id: {
            in: userIds,
          },
        },
        select: {
          id: true,
          first_name: true,
          last_name: true,
        },
      });

      const userMap = new Map(users.map((user) => [user.id, `${user.first_name} ${user.last_name}`]));

      return sessionDurations.map((item) => ({
        user_id: item.user_id,
        avg_session_duration_seconds: item.avg_session_duration_seconds,
        name: userMap.get(item.user_id) || null,
      }));
    } catch (error) {
      console.error("Error calculating average session duration with names:", error);
      throw error;
    }
  }
  static async getDAUs(
    analyticsPrisma: AnalyticsClient = UserSessionsService.analyticsPrisma
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
    analyticsPrisma: AnalyticsClient = UserSessionsService.analyticsPrisma
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
    analyticsPrisma: AnalyticsClient = UserSessionsService.analyticsPrisma
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
