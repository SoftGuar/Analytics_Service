import { FastifyInstance } from 'fastify';
import {

// filepath: c:/Users/KHALED/Documents/GitHub/Analytics_service/app/routers/feedbackRoutes.ts
    createFeedbackHandler,
    getAllFeedbackHandler,
    getFeedbackByIdHandler,
    updateFeedbackHandler,
    deleteFeedbackHandler
} from '../handlers/feedbackHandler';

export async function feedbackRoutes(fastify: FastifyInstance) {
    fastify.post('/feedback', createFeedbackHandler);
    fastify.get('/feedback', getAllFeedbackHandler);
    fastify.get('/feedback/:id', getFeedbackByIdHandler);
    fastify.put('/feedback/:id', updateFeedbackHandler);
    fastify.delete('/feedback/:id', deleteFeedbackHandler);
}