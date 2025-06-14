import { FastifyInstance } from "fastify";
import { SystemHandler } from "../../handlers/system.handler";
import { getUptimeStatsSchema,getAnomaliesSchema,getDiskUsageSchema } from "./system.schema";
const systemHandler = new SystemHandler();

const systemRoutes = async (fastify: FastifyInstance): Promise<void> => {

  fastify.get("/system/uptime-stats",getUptimeStatsSchema, systemHandler.getUptimeStats);
  fastify.get("/system/anomalies",getAnomaliesSchema, systemHandler.getAnomalies);
  fastify.get("/system/disk-usage",getDiskUsageSchema, systemHandler.getDiskUsage);
};

export default systemRoutes;
