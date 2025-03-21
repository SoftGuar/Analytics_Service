import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class NavigationService {
    static async getAllNavigationLogs(){
        try{
            const result = await prisma.navigation_logs.findMany();
            return result;
        }
        catch(error){
            console.error("Error fetching navigation logs:", error);
            throw error;
        }
    }
    static async getMostReroutingRequests(){
        try{
            const result = await prisma.$queryRaw<{environment_id: number; reroute_count: number}[]>
            `
                SELECT environment_id,rerouting_count
                FROM "Navigation_logs"
                ORDER BY rerouting_count DESC
                LIMIT 5;
            `;
            return result;
        }
        catch(error){
            console.error("Error fetching most rerouting requests:", error);
            throw error;
        }
    }
    static async getSuccessfulNavigations() {
        try {
            const result = await prisma.$queryRaw<
                { date: Date; total_attempts: number; successful_navigations: number; success_rate: number }[]
            >`
                SELECT
                DATE_TRUNC('day', start_time) AS date,
                COUNT(*)::INTEGER AS total_attempts,
                SUM(CASE WHEN end_time IS NOT NULL AND rerouting_count = 0 THEN 1 ELSE 0 END)::INTEGER AS successful_navigations,
                ROUND((SUM(CASE WHEN end_time IS NOT NULL AND rerouting_count = 0 THEN 1 ELSE 0 END)::NUMERIC / NULLIF(COUNT(*), 0)) * 100, 2) AS success_rate
                FROM 
                "Navigation_logs"
                GROUP BY 
                DATE_TRUNC('day', start_time)
                ORDER BY date;
            `;
            return result;
        } catch (error) {
            console.error("Error fetching successful navigations:", error);
            throw error;
        }
    }
    

}