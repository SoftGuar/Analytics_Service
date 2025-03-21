import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class DeviceService {
    static async getDeviceStatus(){
        try {
            const result = await prisma.$queryRaw
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
}