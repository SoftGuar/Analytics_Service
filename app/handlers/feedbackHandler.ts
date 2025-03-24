import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { FeedbackService } from '../services/FeedbackService';

// Handler for creating feedback
async function createFeedbackHandler(request: FastifyRequest, reply: FastifyReply) {
    try {
        const feedback = await FeedbackService.createFeedback(request.body as any);
        reply.code(201).send(feedback);
    } catch (error: any) {
        reply.code(500).send({ error: error.message });
    }
}

// Handler for getting all feedback
async function getAllFeedbackHandler(_request: FastifyRequest, reply: FastifyReply) {
    try {
        const feedbackList = await FeedbackService.getAllFeedback();
        reply.send(feedbackList);
    } catch (error: any) {
        reply.code(500).send({ error: error.message });
    }
}

// Handler for getting feedback by ID
async function getFeedbackByIdHandler(request: FastifyRequest, reply: FastifyReply) {
    try {
        const { id } = request.params as { id: string };
        const feedback = await FeedbackService.getFeedbackById(Number(id));
        reply.send(feedback);
    } catch (error: any) {
        reply.code(500).send({ error: error.message });
    }
}

// Handler for updating feedback by ID
async function updateFeedbackHandler(request: FastifyRequest, reply: FastifyReply) {
    try {
        const { id } = request.params as { id: string };
        const feedback = await FeedbackService.updateFeedback(Number(id), request.body as any);
        reply.send(feedback);
    } catch (error: any) {
        reply.code(500).send({ error: error.message });
    }
}

// Handler for deleting feedback by ID
async function deleteFeedbackHandler(request: FastifyRequest, reply: FastifyReply) {
    try {
        const { id } = request.params as { id: string };
        await FeedbackService.deleteFeedback(Number(id));
        reply.code(204).send();
    } catch (error: any) {
        reply.code(500).send({ error: error.message });
    }
}

export {
    createFeedbackHandler,
    getAllFeedbackHandler,
    getFeedbackByIdHandler,
    updateFeedbackHandler,
    deleteFeedbackHandler
};
