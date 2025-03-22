import { FastifyInstance } from 'fastify';
import { ZoneLogsHandler } from '../../handlers/Zone/ZoneLogsHandler';

const zoneLogsHandler = new ZoneLogsHandler();

async function ZonesLogsRoutes(fastify: FastifyInstance) {
    fastify.post('/zone-logs', zoneLogsHandler.createZoneLog.bind(zoneLogsHandler));
    fastify.get('/zone-logs/:id', zoneLogsHandler.getZoneLogById.bind(zoneLogsHandler));
    fastify.get('/zone-logs', zoneLogsHandler.getAllZoneLogs.bind(zoneLogsHandler));
    fastify.put('/zone-logs/:id', zoneLogsHandler.updateZoneLog.bind(zoneLogsHandler));
    fastify.delete('/zone-logs/:id', zoneLogsHandler.deleteZoneLog.bind(zoneLogsHandler));
    fastify.patch('/zone-logs/:id/increment', zoneLogsHandler.incrementZoneLogCount.bind(zoneLogsHandler));
    fastify.patch('/zone-logs/:id/end', zoneLogsHandler.endZoneLog.bind(zoneLogsHandler));
    fastify.get('/zone-logs/navigation/:navigation_id', zoneLogsHandler.getZoneLogsByNavigationId.bind(zoneLogsHandler));
}

export default ZonesLogsRoutes;