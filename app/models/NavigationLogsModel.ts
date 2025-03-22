import { PrismaClient, Navigation_logs } from '../prisma/generated/anayltics';

const prisma = new PrismaClient();
export interface Navigations_logCreateInput {
    user_id: number;
    environment_id: number;
    start_time: Date;
    end_time: Date;
    rerouting_count: number;
}
class NavigationLogsModel {
    // Create a new navigation log
    async createNavigationLog(data:Navigations_logCreateInput): Promise<Navigation_logs> {
        return await prisma.navigation_logs.create({
            data,
        });
    }

    // Get a navigation log by ID
    async getNavigationLogById(id: number): Promise<Navigation_logs | null> {
        return await prisma.navigation_logs.findUnique({
            where: { id },
        });
    }

    // Get all navigation logs
    async getAllNavigationLogs(): Promise<Navigation_logs[]> {
        return await prisma.navigation_logs.findMany();
    }

    // Update a navigation log by ID
    async updateNavigationLog(id: number, data: Partial<Omit<Navigation_logs, 'id'>>): Promise<Navigation_logs> {
        return await prisma.navigation_logs.update({
            where: { id },
            data,
        });
    }

    // Delete a navigation log by ID
    async deleteNavigationLog(id: number): Promise<Navigation_logs> {
        return await prisma.navigation_logs.delete({
            where: { id },
        });
    }
    async incrementNavigationLogCount(id: number): Promise<Navigation_logs> {
        return await prisma.navigation_logs.update({
            where: { id },
            data: {
                rerouting_count: {
                    increment: 1
                }
            }
        });
    }
    async endNavigationLog(id: number): Promise<Navigation_logs> {
        return await prisma.navigation_logs.update({
            where: { id },
            data: {
                end_time: new Date()
            }
        });
    }
}

export default new NavigationLogsModel();