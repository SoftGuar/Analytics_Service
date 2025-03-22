import NavigationLogsModel from '../../models/NavigationLogsModel';
import { Navigation_logs } from '../../prisma/generated/anayltics';

export interface CreateNavigationLog {
    user_id: number;
    environment_id: number;
    start_time: Date;
    end_time: Date;
    rerouting_count: number;
}
class NavigationLogsService {
    // Create a new navigation log
    async createNavigationLog(data:CreateNavigationLog): Promise<Navigation_logs> {
        return await NavigationLogsModel.createNavigationLog(data);
    }

    // Get a navigation log by ID
    async getNavigationLogById(id: number): Promise<Navigation_logs | null> {
        return await NavigationLogsModel.getNavigationLogById(id);
    }

    // Get all navigation logs
    async getAllNavigationLogs(): Promise<Navigation_logs[]> {
        return await NavigationLogsModel.getAllNavigationLogs();
    }

    // Update a navigation log by ID
    async updateNavigationLog(id: number, data: Partial<Omit<Navigation_logs, 'id'>>): Promise<Navigation_logs> {
        return await NavigationLogsModel.updateNavigationLog(id, data);
    }

    // Delete a navigation log by ID
    async deleteNavigationLog(id: number): Promise<Navigation_logs> {
        return await NavigationLogsModel.deleteNavigationLog(id);
    }

    // Increment the rerouting count of a navigation log
    async incrementNavigationLogCount(id: number): Promise<Navigation_logs> {
        return await NavigationLogsModel.incrementNavigationLogCount(id);
    }

    // End a navigation log by setting the end time
    async endNavigationLog(id: number): Promise<Navigation_logs> {
        return await NavigationLogsModel.endNavigationLog(id);
    }
}

export default new NavigationLogsService();