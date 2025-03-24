import { DeviceUsageLogsModel } from '../../models/DeviceUsageLogsModel';

interface CreateDeviceLogInput {
    dispositive_id: number;
    timestamp: Date;
    battery_level: number;
    connected: boolean;
}

interface UpdateDeviceLogInput {
    dispositive_id?: number;
    timestamp?: Date;
    battery_level?: number;
    connected?: boolean;
}

export class DeviceLogsService {
    // Create a new device log
    static async createDeviceLog(data: CreateDeviceLogInput) {
        try {
            return await DeviceUsageLogsModel.create(data);
        } catch (error:any) {
            throw new Error(`Error creating device log: ${error.message}`);
        }
    }

    // Get a device log by ID
    static async getDeviceLogById(id: number) {
        try {
            const log = await DeviceUsageLogsModel.getById(id);
            if (!log) {
                throw new Error(`Device log with ID ${id} not found`);
            }
            return log;
        } catch (error:any) {
            throw new Error(`Error retrieving device log: ${error.message}`);
        }
    }

    // Get all device logs
    static async getAllDeviceLogs() {
        try {
            return await DeviceUsageLogsModel.getAll();
        } catch (error:any) {
            throw new Error(`Error retrieving all device logs: ${error.message}`);
        }
    }

    // Update a device log by ID
    static async updateDeviceLog(id: number, data: UpdateDeviceLogInput) {
        try {
            return await DeviceUsageLogsModel.update(id, data);
        } catch (error:any) {
            throw new Error(`Error updating device log: ${error.message}`);
        }
    }

    // Delete a device log by ID
    static async deleteDeviceLog(id: number) {
        try {
            return await DeviceUsageLogsModel.delete(id);
        } catch (error:any) {
            throw new Error(`Error deleting device log: ${error.message}`);
        }
    }
}