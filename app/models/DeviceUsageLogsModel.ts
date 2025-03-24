import { PrismaClient, DeviceUsageLogs } from '../prisma/generated/anayltics';

const prisma = new PrismaClient();
interface DeviceUsageLogsData {
    dispositive_id: number;
    timestamp: Date;
    battery_level: number;
    connected: boolean;
}
interface DeviceUsageLogsUpdate {
    dispositive_id?: number;
    timestamp?: Date;
    battery_level?: number;
    connected?: boolean;
}
export class DeviceUsageLogsModel {
    // Create a new DeviceUsageLog
    static async create(data: DeviceUsageLogsData): Promise<DeviceUsageLogs> {
        return prisma.deviceUsageLogs.create({
            data,
        });
    }

    // Get a DeviceUsageLog by ID
    static async getById(id: number): Promise<DeviceUsageLogs | null> {
        return prisma.deviceUsageLogs.findUnique({
            where: { id },
        });
    }

    // Get all DeviceUsageLogs
    static async getAll(): Promise<DeviceUsageLogs[]> {
        return prisma.deviceUsageLogs.findMany();
    }

    // Update a DeviceUsageLog by ID
    static async update(id: number, data: DeviceUsageLogsUpdate): Promise<DeviceUsageLogs> {
        return prisma.deviceUsageLogs.update({
            where: { id },
            data,
        });
    }

    // Delete a DeviceUsageLog by ID
    static async delete(id: number): Promise<DeviceUsageLogs> {
        return prisma.deviceUsageLogs.delete({
            where: { id },
        });
    }
}