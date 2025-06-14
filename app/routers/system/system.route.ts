import { FastifyInstance } from "fastify";
import { SystemHandler } from "../../handlers/system.handler";
const systemHandler = new SystemHandler();

const systemRoutes = async (fastify: FastifyInstance): Promise<void> => {

  fastify.get("/system/uptime-stats", systemHandler.getUptimeStats);
  fastify.get("/system/anomalies", systemHandler.getAnomalies);
  fastify.get("/system/disk-usage", systemHandler.getDiskUsage);
};

export default systemRoutes;
