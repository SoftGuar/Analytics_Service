
import { FastifyInstance } from 'fastify';
import { NavigationLogsHandler } from '../../handlers/Navigation/NavigationLogsHandler';

export default (fastify: FastifyInstance) => {
    const handler = new NavigationLogsHandler();

    fastify.post('/navigation-logs', handler.createNavigationLog.bind(handler));
    fastify.get('/navigation-logs/:id', handler.getNavigationLogById.bind(handler));
    fastify.get('/navigation-logs', handler.getAllNavigationLogs.bind(handler));
    fastify.put('/navigation-logs/:id', handler.updateNavigationLog.bind(handler));
    fastify.delete('/navigation-logs/:id', handler.deleteNavigationLog.bind(handler));
    fastify.patch('/navigation-logs/:id/increment', handler.incrementNavigationLogCount.bind(handler));
    fastify.patch('/navigation-logs/:id/end', handler.endNavigationLog.bind(handler));
};