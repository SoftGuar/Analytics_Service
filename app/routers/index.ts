import { FastifyInstance } from 'fastify';
import { navigationRoutes } from './Navigation/NavigationRoutes';
import { DeviceRoutes } from './devices/DeviceRoutes';
import { PoisRoutes } from './POIs/PoisRoutes';
import { zonesRoutes } from './Zone/ZonesRoutes';
import { UserRoutes } from './Users/UserRoutes';
import { salesStatsRoutes } from './saleStatsRoutes';

export default async function (app: FastifyInstance) {
    //stats routes
    await navigationRoutes(app);
    await DeviceRoutes(app);
    await PoisRoutes(app);
    await zonesRoutes(app);
    await UserRoutes(app);
    await salesStatsRoutes(app);
}