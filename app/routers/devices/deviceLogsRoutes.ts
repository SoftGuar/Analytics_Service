import { FastifyInstance } from 'fastify';
import { DeviceLogsHandler } from '../../handlers/devices/deviceLogsHandler';

class DeviceLogsRoutes {
    static async registerRoutes(fastify: FastifyInstance) {
        fastify.post('/device-logs', DeviceLogsHandler.createDeviceLog);
        fastify.get('/device-logs/:id', DeviceLogsHandler.getDeviceLogById);
        fastify.get('/device-logs', DeviceLogsHandler.getAllDeviceLogs);
        fastify.put('/device-logs/:id', DeviceLogsHandler.updateDeviceLog);
        fastify.delete('/device-logs/:id', DeviceLogsHandler.deleteDeviceLog);
    }
}

export default DeviceLogsRoutes;
