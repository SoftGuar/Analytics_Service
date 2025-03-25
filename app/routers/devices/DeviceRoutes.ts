import { FastifyInstance } from "fastify";
import { DeviceHandler } from "../../handlers/devices/DeviceHandler";

export async function DeviceRoutes(fastify: FastifyInstance) {
    fastify.get("/device/status", DeviceHandler.getDeviceStatus);
    fastify.get("/device/issues", DeviceHandler.getDeviceIssuesOverTime);
    fastify.get("/device/performance", DeviceHandler.getDevicePerformance);
    fastify.get("/device/issues/list", DeviceHandler.getDeviceIssues);
    fastify.get("/device/sold", DeviceHandler.devicesSold);
    fastify.get("/device/revenue", DeviceHandler.deviceRevenue);
    fastify.get("/device/popular", DeviceHandler.getMostPopularDevices);
    fastify.get("/device/interventions", DeviceHandler.getDeviceIntervention);
}