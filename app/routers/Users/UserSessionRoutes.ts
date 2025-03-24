import { FastifyInstance } from 'fastify';
import { UserSessionLogsHandler } from '../../handlers/UserSession/UserSessionLogsHandler';

export default async function userSessionRoutes(fastify: FastifyInstance): Promise<void> {
    const handler = new UserSessionLogsHandler();

    fastify.post('/user-sessions', handler.createUserSessionLog.bind(handler));
    fastify.get('/user-sessions/:id', handler.getUserSessionLogById.bind(handler));
    fastify.get('/user-sessions', handler.getAllUserSessionLogs.bind(handler));
    fastify.put('/user-sessions/:id', handler.updateUserSessionLog.bind(handler));
    fastify.delete('/user-sessions/:id', handler.deleteUserSessionLog.bind(handler));
    fastify.post('/user-sessions/:id/end', handler.endUserSessionLog.bind(handler));
}