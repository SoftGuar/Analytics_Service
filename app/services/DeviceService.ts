import { PrismaClient as MainPrismaClient } from '../prisma/generated/main';
import { PrismaClient as AnalyticsClient } from '../prisma/generated/anayltics';
const prisma = new MainPrismaClient();
const analyticsPrisma = new AnalyticsClient();

export class DeviceService {
    static async getDeviceStatus(){
        try {
            const result = await analyticsPrisma.$queryRaw
            <{dispositive_id: number; connected: boolean; timestamp: Date; battery_level: number}[]>
            `
            SELECT d1.dispositive_id, d1.connected, d1.timestamp, d1.battery_level
            FROM "DeviceUsageLogs" d1
            WHERE d1.timestamp = (
                SELECT MAX(d2.timestamp)
                FROM "DeviceUsageLogs" d2
                WHERE d1.dispositive_id = d2.dispositive_id
            );
`
            return result;
        } catch (error) {
            console.error("Error fetching device status:", error);
            throw error;
        }
    }
    static async getDeviceIssuesOverTime(){
        try {
            const result = await prisma.$queryRaw
            <{dispositive_id: number; issue_count: number}[]>
            `
            SELECT 
            DATE_TRUNC('month', di.date) AS month,
            d.type,
            COUNT(di.id) AS issue_count
            FROM "DispoIssue" di
            JOIN "Dispositive" d ON di.dispositiveId = d.id
            GROUP BY DATE_TRUNC('month', di.date), d.type
            ORDER BY month, d.type;
            `
            return result;
        } catch (error) {
            console.error("Error fetching device issues over time:", error);
            throw error;
        }
    }
    static async getDeviceIssues(){
        try {
            const deviceIssueFrequency = await prisma.dispoIssue.groupBy({
                by: ['dispositiveId'],
                _count: {
                  id: true
                },
                orderBy: {
                  _count: {
                    id: 'desc'
                  }
                },
              });
            return deviceIssueFrequency;
        } catch (error) {
            console.error("Error fetching device issues:", error);
            throw error;
        }
    }
}