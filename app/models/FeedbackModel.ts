import { PrismaClient } from '../prisma/generated/anayltics';

const prisma = new PrismaClient();

export interface createFeedbackInput {
    user_id: number;
    rating: number;
    comment?: string;
}
export interface updateFeedbackInput {
    rating?: number;
    comment?: string;
}
export class FeedbackModel {
    // Create a new feedback entry
    static async createFeedback(data: createFeedbackInput) {
       return await prisma.feedback.create({
            data,
       });
    }

    // Get all feedback entries
    static async getAllFeedback() {
        return await prisma.feedback.findMany();
    }

    // Get feedback by ID
    static async getFeedbackById(id: number) {
        return await prisma.feedback.findUnique({
            where: { id },
        });
    }

    // Update feedback by ID
    static async updateFeedback(id: number, data: updateFeedbackInput) {
        return await prisma.feedback.update({
            where: { id },
            data,
        });
    }

    // Delete feedback by ID
    static async deleteFeedback(id: number) {
        return await prisma.feedback.delete({
            where: { id },
        });
    }
}