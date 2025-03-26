import { FastifyInstance } from 'fastify';
import {
    getInterventionAverageDuration,
    getMonthlyAverageDuration,
    getMaintainerInterventionCount,
    getAverageAnswerTime
} from '../handlers/interventionHandler';

export async function interventionRoutes(fastify: FastifyInstance) {
    fastify.get('/interventions/average-duration', getInterventionAverageDuration);
    fastify.get('/interventions/monthly-average-duration', getMonthlyAverageDuration);
    fastify.get('/interventions/maintainer-count', getMaintainerInterventionCount);
    fastify.get('/interventions/average-answer-time', getAverageAnswerTime);
}