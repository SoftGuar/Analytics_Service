import { FastifyInstance } from "fastify";
import {
    getNavigationLogs,
    getMostReroutingRequests,
    getSuccessfulNavigations
} from "../handlers/Navigation/NavigationHandler";

export async function navigationRoutes(fastify: FastifyInstance) {
    fastify.get("/navigation/logs", getNavigationLogs);
    fastify.get("/navigation/most-rerouting-requests", getMostReroutingRequests);
    fastify.get("/navigation/successful", getSuccessfulNavigations);
}