import { FastifyInstance } from 'fastify';
import { navigationRoutes } from './Navigation/NavigationRoutes';
import { DeviceRoutes } from './DeviceRoutes';
import { PoisRoutes } from './POIs/PoisRoutes';
import { zonesRoutes } from './Zone/ZonesRoutes';
import { UserRoutes } from './Users/UserRoutes';
import POIsLogRoutes from './POIs/POIsLogRoutes';
import ZonesLogsRoutes from './Zone/ZonesLogsRoutes';
import userSessionRoutes from './Users/UserSessionRoutes';
import NavigationLogsRoutes from './Navigation/NavigationLogsRoutes';

export default async function (app: FastifyInstance) {
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
    
}