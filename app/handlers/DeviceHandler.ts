import { FastifyRequest, FastifyReply } from "fastify";
import { DeviceService } from "../services/DeviceService";
export class DeviceHandler {
    static async getDeviceStatus(req: FastifyRequest, reply: FastifyReply) {
        try {
            const deviceStatus = await DeviceService.getDeviceStatus();
            reply.status(200).send(deviceStatus);
        } catch (error) {
            console.error("Error in DeviceHandler.getDeviceStatus:", error);
            reply.status(500).send({ error: "Failed to fetch device status" });
        }
    }
    static async getDeviceIssuesOverTime(req: FastifyRequest, reply: FastifyReply) {
        try {
            const deviceIssues = await DeviceService.getDeviceIssuesOverTime();
            reply.status(200).send(deviceIssues);
        } catch (error) {
            console.error("Error in DeviceHandler.getDeviceIssuesOverTime:", error);
            reply.status(500).send({ error: "Failed to fetch device issues over time" });
        }
    }
}