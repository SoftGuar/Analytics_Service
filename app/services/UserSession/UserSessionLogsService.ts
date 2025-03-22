import UserSessionModel, { UserSessionCreateInput } from '../../models/UserSessionModel';
import { UserSessions } from '../../prisma/generated/anayltics';

// filepath: c:\Users\KHALED\Documents\GitHub\Analytics_service\app\services\UserSession\UserSessionService.ts

class UserSessionService {
    // Create a new user session
    async createUserSession(data: UserSessionCreateInput): Promise<UserSessions> {
        try {
            return await UserSessionModel.createUserSession(data);
        } catch (error:any) {
            throw new Error(`Failed to create user session: ${error.message}`);
        }
    }

    // Get a user session by ID
    async getUserSessionById(id: number): Promise<UserSessions | null> {
        try {
            return await UserSessionModel.getUserSessionById(id);
        } catch (error:any) {
            throw new Error(`Failed to get user session by ID: ${error.message}`);
        }
    }

    // Get all user sessions
    async getAllUserSessions(): Promise<UserSessions[]> {
        try {
            return await UserSessionModel.getAllUserSessions();
        } catch (error:any) {
            throw new Error(`Failed to get all user sessions: ${error.message}`);
        }
    }

    // Update a user session by ID
    async updateUserSession(id: number, data: Partial<Omit<UserSessions, 'id'>>): Promise<UserSessions> {
        try {
            return await UserSessionModel.updateUserSession(id, data);
        } catch (error:any) {
            throw new Error(`Failed to update user session: ${error.message}`);
        }
    }

    // Delete a user session by ID
    async deleteUserSession(id: number): Promise<UserSessions> {
        try {
            return await UserSessionModel.deleteUserSession(id);
        } catch (error:any) {
            throw new Error(`Failed to delete user session: ${error.message}`);
        }
    }

    // End a user session by ID
    async endUserSession(id: number): Promise<UserSessions> {
        try {
            return await UserSessionModel.endUserSession(id);
        } catch (error:any) {
            throw new Error(`Failed to end user session: ${error.message}`);
        }
    }
}

export default new UserSessionService();