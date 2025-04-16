import { FastifyInstance } from "fastify";
import { getLogs } from "../../handlers/logsHandler";
import { logsSchemas } from "./logsSchema";

export async function logsRoutes(fastify: FastifyInstance): Promise<void> {
    fastify.get(
        "/logs",
        { schema: logsSchemas.getLogs },
        getLogs
    );
}
