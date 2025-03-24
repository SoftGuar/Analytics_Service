import { FastifyInstance } from "fastify";
import {
    getTopVisitedZonesHandler,
    getAverageTimeSpentHandler,
    getHighestObstaclesHandler,
} from "../../handlers/Zone/ZonesHandler";

export async function zonesRoutes(fastify: FastifyInstance) {
    fastify.get("/zones/top-visited", getTopVisitedZonesHandler);
    fastify.get("/zones/average-time-spent", getAverageTimeSpentHandler);
    fastify.get("/zones/highest-obstacles", getHighestObstaclesHandler);
}