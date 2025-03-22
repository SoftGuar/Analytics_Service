import { PrismaClient, Zone_logs } from '../prisma/generated/anayltics';

const prisma = new PrismaClient();

export interface ZoneLogsCreateInput {
    navigation_id: number;
    zone_id: number;
    user_id: number;
    start_time: Date;
    end_time: Date;
    obstacles_encountered: number;
}

class ZoneLogsModel {
    // Create a new zone log
    async createZoneLog(data: ZoneLogsCreateInput): Promise<Zone_logs> {
        return await prisma.zone_logs.create({
            data,
        });
    }

    // Get a zone log by ID
    async getZoneLogById(id: number): Promise<Zone_logs | null> {
        return await prisma.zone_logs.findUnique({
            where: { id },
        });
    }

    // Get all zone logs
    async getAllZoneLogs(): Promise<Zone_logs[]> {
        return await prisma.zone_logs.findMany();
    }

    // Update a zone log by ID
    async updateZoneLog(id: number, data: Partial<Omit<Zone_logs, 'id'>>): Promise<Zone_logs> {
        return await prisma.zone_logs.update({
            where: { id },
            data,
        });
    }

    // Delete a zone log by ID
    async deleteZoneLog(id: number): Promise<Zone_logs> {
        return await prisma.zone_logs.delete({
            where: { id },
        });
    }
    async incrementZoneLogCount(id: number): Promise<Zone_logs> {
        return await prisma.zone_logs.update({
            where: { id },
            data: {
                obstacles_encountered: {
                    increment: 1
                }
            }
        });
    }
    async endZoneLog(id: number): Promise<Zone_logs> {
        return await prisma.zone_logs.update({
            where: { id },
            data: {
                end_time: new Date()
            }
        });
    }
    async getZoneLogsByNavigationId(navigation_id: number): Promise<Zone_logs[]> {
        return await prisma.zone_logs.findMany({
            where: { navigation_id }
        });
    }
}

export default new ZoneLogsModel();