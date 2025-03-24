import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { DeviceLogsService } from '../../services/devices/deviceLogsService';

interface DeviceLogRequest {
    Body: {
        dispositive_id: number;
        timestamp: Date;
        battery_level: number;
        connected: boolean;
    };
}
interface DeviceLogUpdate {
    Params: {
        id: number;
    };
    Body: {
        dispositive_id?: number;
        timestamp?: Date;
        battery_level?: number;
        connected?: boolean;
    };
}
export class DeviceLogsHandler {

    static async createDeviceLog(req: FastifyRequest<DeviceLogRequest>, reply: FastifyReply) {
        try {
            const data = req.body;
            const newLog = await DeviceLogsService.createDeviceLog(data);
            reply.status(201).send(newLog);
        } catch (error: any) {
            reply.status(500).send({ error: error.message });
        }
    }

    static async getDeviceLogById(req: FastifyRequest<{ Params: { id: number } }>, reply: FastifyReply) {
        try {
            const id = Number(req.params.id);
            const log = await DeviceLogsService.getDeviceLogById(id);
            reply.status(200).send(log);
        } catch (error: any) {
            reply.status(500).send({ error: error.message });
        }
    }

    static async getAllDeviceLogs(req: FastifyRequest, reply: FastifyReply) {
        try {
            const logs = await DeviceLogsService.getAllDeviceLogs();
            reply.status(200).send(logs);
        } catch (error: any) {
            reply.status(500).send({ error: error.message });
        }
    }

    static async updateDeviceLog(req: FastifyRequest<DeviceLogUpdate>, reply: FastifyReply) {
        try {
            const id = Number(req.params.id);
            const data = req.body;
            const updatedLog = await DeviceLogsService.updateDeviceLog(id, data);
            reply.status(200).send(updatedLog);
        } catch (error: any) {
            reply.status(500).send({ error: error.message });
        }
    }

    static async deleteDeviceLog(req: FastifyRequest<{ Params: { id: number } }>, reply: FastifyReply) {
        try {
            const id = Number(req.params.id);
            await DeviceLogsService.deleteDeviceLog(id);
            reply.status(200).send();
        } catch (error: any) {
            reply.status(500).send({ error: error.message });
        }
    }
}