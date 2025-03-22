import ZoneLogsModel, { ZoneLogsCreateInput } from '../../models/ZoneLogsModel';
import { Zone_logs } from '../../prisma/generated/anayltics';

class ZonesLogsService {
    // Create a new zone log
    async createZoneLog(data: ZoneLogsCreateInput): Promise<Zone_logs> {
        return await ZoneLogsModel.createZoneLog(data);
    }

    // Get a zone log by ID
    async getZoneLogById(id: number): Promise<Zone_logs | null> {
        return await ZoneLogsModel.getZoneLogById(id);
    }

    // Get all zone logs
    async getAllZoneLogs(): Promise<Zone_logs[]> {
        return await ZoneLogsModel.getAllZoneLogs();
    }

    // Update a zone log by ID
    async updateZoneLog(id: number, data: Partial<Omit<Zone_logs, 'id'>>): Promise<Zone_logs> {
        return await ZoneLogsModel.updateZoneLog(id, data);
    }

    // Delete a zone log by ID
    async deleteZoneLog(id: number): Promise<Zone_logs> {
        return await ZoneLogsModel.deleteZoneLog(id);
    }

    // Increment the obstacles encountered count for a zone log
    async incrementZoneLogCount(id: number): Promise<Zone_logs> {
        return await ZoneLogsModel.incrementZoneLogCount(id);
    }

    // End a zone log by setting the end time
    async endZoneLog(id: number): Promise<Zone_logs> {
        return await ZoneLogsModel.endZoneLog(id);
    }

    // Get all zone logs by navigation ID
    async getZoneLogsByNavigationId(navigation_id: number): Promise<Zone_logs[]> {
        return await ZoneLogsModel.getZoneLogsByNavigationId(navigation_id);
    }
}

export default new ZonesLogsService();