import { FastifyInstance } from 'fastify';
import { POIsHandler } from '../handlers/POIsHandler';

export async function PoisRoutes(fastify: FastifyInstance): Promise<void> {
    fastify.get('/pois/top-visited', POIsHandler.getTopVisitedPOIs);
}