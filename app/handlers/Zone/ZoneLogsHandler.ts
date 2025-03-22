import { FastifyRequest, FastifyReply } from 'fastify';
import ZonesLogsService from '../../services/Zone/ZonesLogsService';
import { ZoneLogsCreateInput } from '../../models/ZoneLogsModel'
import { Zone_logs } from '../../prisma/generated/anayltics';

export class ZoneLogsHandler {
    // Create a new zone log
    async createZoneLog(req: FastifyRequest<{ Body: ZoneLogsCreateInput }>, reply: FastifyReply): Promise<void> {
        try {
            const data: ZoneLogsCreateInput = req.body;
            const newZoneLog = await ZonesLogsService.createZoneLog(data);
            reply.code(201).send(newZoneLog);
        } catch (error: any) {
            reply.code(500).send({ error: 'Failed to create zone log', details: error.message });
        }
    }

    // Get a zone log by ID
    async getZoneLogById(req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            const zoneLog = await ZonesLogsService.getZoneLogById(id);
            if (!zoneLog) {
                reply.code(404).send({ error: 'Zone log not found' });
            } else {
                reply.send(zoneLog);
            }
        } catch (error: any) {
            reply.code(500).send({ error: 'Failed to fetch zone log', details: error.message });
        }
    }

    // Get all zone logs
    async getAllZoneLogs(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        try {
            const zoneLogs = await ZonesLogsService.getAllZoneLogs();
            reply.send(zoneLogs);
        } catch (error: any) {
            reply.code(500).send({ error: 'Failed to fetch zone logs', details: error.message });
        }
    }

    // Update a zone log by ID
    async updateZoneLog(req: FastifyRequest<{ Params: { id: string }; Body: any }>, reply: FastifyReply): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            const data = req.body as Partial<Omit<Zone_logs, 'id'>>;
            const updatedZoneLog = await ZonesLogsService.updateZoneLog(id, data);
            reply.send(updatedZoneLog);
        } catch (error: any) {
            reply.code(500).send({ error: 'Failed to update zone log', details: error.message });
        }
    }

    // Delete a zone log by ID
    async deleteZoneLog(req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            const deletedZoneLog = await ZonesLogsService.deleteZoneLog(id);
            reply.send(deletedZoneLog);
        } catch (error: any) {
            reply.code(500).send({ error: 'Failed to delete zone log', details: error.message });
        }
    }

    // Increment the obstacles encountered count for a zone log
    async incrementZoneLogCount(req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            const updatedZoneLog = await ZonesLogsService.incrementZoneLogCount(id);
            reply.send(updatedZoneLog);
        } catch (error: any) {
            reply.code(500).send({ error: 'Failed to increment zone log count', details: error.message });
        }
    }

    // End a zone log by setting the end time
    async endZoneLog(req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            const updatedZoneLog = await ZonesLogsService.endZoneLog(id);
            reply.send(updatedZoneLog);
        } catch (error: any) {
            reply.code(500).send({ error: 'Failed to end zone log', details: error.message });
        }
    }

    // Get all zone logs by navigation ID
    async getZoneLogsByNavigationId(req: FastifyRequest<{ Params: { navigation_id: string } }>, reply: FastifyReply): Promise<void> {
        try {
            const navigationId = parseInt(req.params.navigation_id, 10);
            const zoneLogs = await ZonesLogsService.getZoneLogsByNavigationId(navigationId);
            reply.send(zoneLogs);
        } catch (error: any) {
            reply.code(500).send({ error: 'Failed to fetch zone logs by navigation ID', details: error.message });
        }
    }
}
