import { FastifyInstance } from 'fastify';
import { POIsHandler } from '../../handlers/POIs/POIsHandler';
import { poisSchemas } from './PoisSchemas';

export async function PoisRoutes(fastify: FastifyInstance): Promise<void> {
    fastify.get('/pois/top-visited',poisSchemas.TopVisitedPOIsSchema, POIsHandler.getTopVisitedPOIs);
}