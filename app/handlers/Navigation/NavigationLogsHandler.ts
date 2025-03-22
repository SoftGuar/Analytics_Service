import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import NavigationLogsService from '../../services/Navigation/NavigationLogsService';
import { Navigation_logs } from '../../prisma/generated/anayltics';

export interface createNavigationLogRequest {
    Body: { 
        user_id: number;
        environment_id: number;
        start_time: Date;
        end_time: Date;
        rerouting_count: number;
    };
}
    
export class NavigationLogsHandler {
    // Handle creating a new navigation log
    async createNavigationLog(req: FastifyRequest<createNavigationLogRequest>, reply: FastifyReply): Promise<void> {
        try {
            const data = req.body;
            const navigationLog = await NavigationLogsService.createNavigationLog(data);
            reply.status(201).send(navigationLog);
        } catch (error: any) {
            reply.status(500).send({ error: 'Failed to create navigation log', details: error.message });
        }
    }

    // Handle getting a navigation log by ID
    async getNavigationLogById(req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            const navigationLog = await NavigationLogsService.getNavigationLogById(id);
            if (navigationLog) {
                reply.status(200).send(navigationLog);
            } else {
                reply.status(404).send({ error: 'Navigation log not found' });
            }
        } catch (error:any) {
            reply.status(500).send({ error: 'Failed to retrieve navigation log', details: error.message });
        }
    }

    // Handle getting all navigation logs
    async getAllNavigationLogs(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        try {
            const navigationLogs = await NavigationLogsService.getAllNavigationLogs();
            reply.status(200).send(navigationLogs);
        } catch (error:any) {
            reply.status(500).send({ error: 'Failed to retrieve navigation logs', details: error.message });
        }
    }

    // Handle updating a navigation log by ID
    async updateNavigationLog(req: FastifyRequest<{ Params: { id: string }; Body: Partial<Omit<Navigation_logs, 'id'>> }>, reply: FastifyReply): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            const data : Partial<Omit<Navigation_logs, 'id'>> = req.body;
            const updatedNavigationLog = await NavigationLogsService.updateNavigationLog(id, data);
            reply.status(200).send(updatedNavigationLog);
        } catch (error:any) {
            reply.status(500).send({ error: 'Failed to update navigation log', details: error.message });
        }
    }

    // Handle deleting a navigation log by ID
    async deleteNavigationLog(req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            const deletedNavigationLog = await NavigationLogsService.deleteNavigationLog(id);
            reply.status(200).send(deletedNavigationLog);
        } catch (error:any) {
            reply.status(500).send({ error: 'Failed to delete navigation log', details: error.message });
        }
    }

    // Handle incrementing the rerouting count of a navigation log
    async incrementNavigationLogCount(req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            const updatedNavigationLog = await NavigationLogsService.incrementNavigationLogCount(id);
            reply.status(200).send(updatedNavigationLog);
        } catch (error:any) {
            reply.status(500).send({ error: 'Failed to increment navigation log count', details: error.message });
        }
    }

    // Handle ending a navigation log by setting the end time
    async endNavigationLog(req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            const updatedNavigationLog = await NavigationLogsService.endNavigationLog(id);
            reply.status(200).send(updatedNavigationLog);
        } catch (error:any) {
            reply.status(500).send({ error: 'Failed to end navigation log', details: error.message });
        }
    }
}

