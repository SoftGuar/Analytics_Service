import { FeedbackModel,createFeedbackInput,updateFeedbackInput } from '../models/FeedbackModel';


export class FeedbackService {
    // Create a new feedback entry
    static async createFeedback(data: createFeedbackInput) {
        try {
            return await FeedbackModel.createFeedback(data);
        } catch (error:any) {
            throw new Error(`Error creating feedback: ${error.message}`);
        }
    }

    // Get all feedback entries
    static async getAllFeedback() {
        try {
            return await FeedbackModel.getAllFeedback();
        } catch (error:any) {
            throw new Error(`Error fetching all feedback: ${error.message}`);
        }
    }

    // Get feedback by ID
    static async getFeedbackById(id: number) {
        try {
            const feedback = await FeedbackModel.getFeedbackById(id);
            if (!feedback) {
                throw new Error(`Feedback with ID ${id} not found`);
            }
            return feedback;
        } catch (error:any) {
            throw new Error(`Error fetching feedback by ID: ${error.message}`);
        }
    }

    // Update feedback by ID
    static async updateFeedback(id: number, data: updateFeedbackInput) {
        try {
            return await FeedbackModel.updateFeedback(id, data);
        } catch (error:any) {
            throw new Error(`Error updating feedback: ${error.message}`);
        }
    }

    // Delete feedback by ID
    static async deleteFeedback(id: number) {
        try {
            return await FeedbackModel.deleteFeedback(id);
        } catch (error:any) {
            throw new Error(`Error deleting feedback: ${error.message}`);
        }
    }
}