import { FastifyReply, FastifyRequest } from "fastify";
import { SystemService } from "../services/system.service";

export class SystemHandler {

    async getUptimeStats(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        try {
            const uptimeStats = await SystemService.getUptimeStats();
            reply.status(200).send(uptimeStats);
        } catch (error) {
            console.error("Error in SystemHandler.getUptimeStats:", error);
            reply.status(500).send({ error: "Failed to fetch uptime stats" });
        }
    }

    async getAnomalies(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        try {
            const anomalies = await SystemService.getAnomalies();
            reply.send(anomalies.map(anomaly => ({
                timestamp: anomaly.timestamp,
            service: anomaly.service})));
        } catch (error) {
            console.error("Error in SystemHandler.getAnomalies:", error);
            reply.status(500).send({ error: "Failed to fetch anomalies" });
        }
    }

    async getDiskUsage(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        try {
            const diskUsage = await SystemService.getDiskUsage();
            reply.send(diskUsage);
        } catch (error) {
            console.error("Error in SystemHandler.getDiskUsage:", error);
            reply.status(500).send({ error: "Failed to fetch disk usage" });
        }
    }
}
