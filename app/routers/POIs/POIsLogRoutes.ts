import { FastifyInstance } from "fastify";
import POILogsHandler from "../../handlers/POIs/POIsLogsHandler";

// filepath: c:/Users/KHALED/Documents/GitHub/Analytics_service/app/routers/POIs/POIsLogRoutes.ts

async function POIsLogRoutes(fastify: FastifyInstance) {
    const handler = new POILogsHandler();

    fastify.get("/poilogs", handler.getAllPoilogs.bind(handler));
    fastify.get("/poilogs/:id", handler.getPOILogById.bind(handler));
    fastify.post("/poilogs", handler.createPOILog.bind(handler));
    fastify.put("/poilogs/:id", handler.updatePOILog.bind(handler));
    fastify.delete("/poilogs/:id", handler.deletePOILog.bind(handler));
}

export default POIsLogRoutes;