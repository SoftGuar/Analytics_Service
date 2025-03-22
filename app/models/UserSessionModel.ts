import { PrismaClient, UserSessions } from '../prisma/generated/anayltics';

const prisma = new PrismaClient();

export interface UserSessionCreateInput {
    user_id: number;
    device_id?: number;
    ip_address?: string;
}

class UserSessionModel {
    // Create a new user session
    async createUserSession(data: UserSessionCreateInput): Promise<UserSessions> {
        return await prisma.userSessions.create({
            data,
        });
    }

    // Get a user session by ID
    async getUserSessionById(id: number): Promise<UserSessions | null> {
        return await prisma.userSessions.findUnique({
            where: { id },
        });
    }

    // Get all user sessions
    async getAllUserSessions(): Promise<UserSessions[]> {
        return await prisma.userSessions.findMany();
    }

    // Update a user session by ID
    async updateUserSession(id: number, data: Partial<Omit<UserSessions, 'id'>>): Promise<UserSessions> {
        return await prisma.userSessions.update({
            where: { id },
            data,
        });
    }

    // Delete a user session by ID
    async deleteUserSession(id: number): Promise<UserSessions> {
        return await prisma.userSessions.delete({
            where: { id },
        });
    }

    // End a user session by ID
    async endUserSession(id: number): Promise<UserSessions> {
        return await prisma.userSessions.update({
            where: { id },
            data: {
                session_end: new Date(),
            },
        });
    }
}

export default new UserSessionModel();