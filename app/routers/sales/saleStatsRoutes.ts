import { FastifyInstance } from "fastify";
import { SalesStatsHandler } from "../../handlers/salesStatsHandler";

// filepath: c:\Users\KHALED\Documents\GitHub\Analytics_service\app\routers\saleStatsRoutes.ts

export async function salesStatsRoutes(fastify: FastifyInstance): Promise<void> {
    const salesStatsHandler = new SalesStatsHandler();

    fastify.get("/sales-stats/crr", salesStatsHandler.getCRR.bind(salesStatsHandler));
}