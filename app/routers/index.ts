import { FastifyInstance } from 'fastify';
import { navigationRoutes } from './Navigation/NavigationRoutes';
import { DeviceRoutes } from './devices/DeviceRoutes';
import { PoisRoutes } from './POIs/PoisRoutes';
import { zonesRoutes } from './Zone/ZonesRoutes';
import { UserRoutes } from './Users/UserRoutes';
import POIsLogRoutes from './POIs/POIsLogRoutes';
import ZonesLogsRoutes from './Zone/ZonesLogsRoutes';
import userSessionRoutes from './Users/UserSessionRoutes';
import NavigationLogsRoutes from './Navigation/NavigationLogsRoutes';
import DeviceLogsRoutes from './devices/deviceLogsRoutes';
import { feedbackRoutes } from './feedbackRoutes';

export default async function (app: FastifyInstance) {
    //stats routes
    await navigationRoutes(app);
    await DeviceRoutes(app);
    await PoisRoutes(app);
    await zonesRoutes(app);
    await UserRoutes(app);

    //registring logs routes 
    await POIsLogRoutes(app);
    await ZonesLogsRoutes(app);
    await userSessionRoutes(app);
    await NavigationLogsRoutes(app);
    await DeviceLogsRoutes.registerRoutes(app);
    await feedbackRoutes(app);
}