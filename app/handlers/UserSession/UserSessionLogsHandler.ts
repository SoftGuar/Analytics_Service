import { FastifyRequest, FastifyReply } from 'fastify';
import UserSessionLogsService from '../../services/UserSession/UserSessionLogsService';
import { UserSessionCreateInput } from '../../models/UserSessionModel';
import { UserSessions } from '../../prisma/generated/anayltics';

// filepath: c:\Users\KHALED\Documents\GitHub\Analytics_service\app\handlers\UserSessionHandler.ts\UserSessionLogsHandler.ts

export class UserSessionLogsHandler {
    // Create a new user session log
    async createUserSessionLog(req: FastifyRequest<{ Body: UserSessionCreateInput }>, reply: FastifyReply): Promise<void> {
        try {
            const data: UserSessionCreateInput = req.body;
            const newUserSessionLog = await UserSessionLogsService.createUserSession(data);
            reply.code(201).send(newUserSessionLog);
        } catch (error: any) {
            reply.code(500).send({ error: 'Failed to create user session log', details: error.message });
        }
    }

    // Get a user session log by ID
    async getUserSessionLogById(req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            const userSessionLog = await UserSessionLogsService.getUserSessionById(id);
            if (!userSessionLog) {
                reply.code(404).send({ error: 'User session log not found' });
            } else {
                reply.send(userSessionLog);
            }
        } catch (error: any) {
            reply.code(500).send({ error: 'Failed to fetch user session log', details: error.message });
        }
    }

    // Get all user session logs
    async getAllUserSessionLogs(req: FastifyRequest, reply: FastifyReply): Promise<void> {
        try {
            const userSessionLogs = await UserSessionLogsService.getAllUserSessions();
            reply.send(userSessionLogs);
        } catch (error: any) {
            reply.code(500).send({ error: 'Failed to fetch user session logs', details: error.message });
        }
    }

    // Update a user session log by ID
    async updateUserSessionLog(req: FastifyRequest<{ Params: { id: string }; Body: any }>, reply: FastifyReply): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            const data = req.body as Partial<Omit<UserSessions, 'id'>>;
            const updatedUserSessionLog = await UserSessionLogsService.updateUserSession(id, data);
            reply.send(updatedUserSessionLog);
        } catch (error: any) {
            reply.code(500).send({ error: 'Failed to update user session log', details: error.message });
        }
    }

    // Delete a user session log by ID
    async deleteUserSessionLog(req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            const deletedUserSessionLog = await UserSessionLogsService.deleteUserSession(id);
            reply.send(deletedUserSessionLog);
        } catch (error: any) {
            reply.code(500).send({ error: 'Failed to delete user session log', details: error.message });
        }
    }

    // End a user session log by setting the end time
    async endUserSessionLog(req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply): Promise<void> {
        try {
            const id = parseInt(req.params.id, 10);
            const updatedUserSessionLog = await UserSessionLogsService.endUserSession(id);
            reply.send(updatedUserSessionLog);
        } catch (error: any) {
            reply.code(500).send({ error: 'Failed to end user session log', details: error.message });
        }
    }
}