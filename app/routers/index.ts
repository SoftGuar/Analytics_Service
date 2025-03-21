import { FastifyInstance } from 'fastify';
import { navigationRoutes } from './NavigationRoutes';
import { DeviceRoutes } from './DeviceRoutes';
import { PoisRoutes } from './PoisRoutes';
import { zonesRoutes } from './ZonesRoutes';
import { UserRoutes } from './UserRoutes';

export default async function (app: FastifyInstance) {
    await navigationRoutes(app);
    await DeviceRoutes(app);
    await PoisRoutes(app);
    await zonesRoutes(app);
    await UserRoutes(app);
}