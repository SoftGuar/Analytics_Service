import { FastifyInstance } from "fastify";
import { DeviceHandler } from "../../handlers/devices/DeviceHandler";

// filepath: c:\Users\KHALED\Documents\GitHub\Analytics_service\app\routers\DeviceRoutes.ts

export async function DeviceRoutes(fastify: FastifyInstance) {
    fastify.get("/device/status", DeviceHandler.getDeviceStatus);
    fastify.get("/device/issues", DeviceHandler.getDeviceIssuesOverTime);
}