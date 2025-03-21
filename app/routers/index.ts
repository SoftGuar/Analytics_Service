import { FastifyInstance } from 'fastify';
import { navigationRoutes } from './NavigationRoutes';
import { DeviceRoutes } from './DeviceRoutes';

export default async function (app: FastifyInstance) {
    await navigationRoutes(app);
    await DeviceRoutes(app);
}