import { FastifyInstance } from "fastify";
import { UserHandler } from "../handlers/UserHandler";

export async function UserRoutes(fastify: FastifyInstance) {
    fastify.get("/users/top", UserHandler.getTopUsers);
    fastify.get("/users/ratings", UserHandler.getUserRatings);
    fastify.get("/users/feedback", UserHandler.getUserFeedback);
    fastify.get("/users/session-durations", UserHandler.getUserSessionDuration);
    fastify.get("/users/daily-active", UserHandler.getDAUs);
    fastify.get("/users/weekly-active", UserHandler.getWAUs);
    fastify.get("/users/monthly-active", UserHandler.getMAUs);
}