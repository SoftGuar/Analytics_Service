import dotenv from "dotenv";
import Fastify from "fastify";
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import {
  checkDatabaseConnection,
  disconnectPrisma,
} from "./services/prismaService";
import registerRoutes from "./routers/index";
// Load environment variables
dotenv.config();
const host = process.env.HOST || 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
// Ensure DATABASE_URL is available
if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL environment variable is not set");
  process.exit(1);
}
if (!process.env.DATABASE_URL2) {
  console.error("DATABASE_URL environment variable is not set");
  process.exit(1);
}

const fastify = Fastify({ logger: true });

async function startServer() {
  // Check database connection first
  await checkDatabaseConnection();
fastify.register(swagger, {
    swagger: {
      info: {
        title: 'My API',
        description: 'API Documentation generated with Fastify Swagger',
        version: '1.0.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      host: `${host}:${port}`,
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json']
    }
  });

  fastify.register(swaggerUi, {
    routePrefix: '/docs'
  });
  registerRoutes(fastify);

  // Start server
  try {
    const port = Number(process.env.PORT) || 3001;
    const host = process.env.HOST || "0.0.0.0";
    await fastify.listen({ port, host });
    fastify.log.info(`Server started on port ${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

// Add graceful shutdown
const gracefulShutdown = async () => {
  console.log("Shutting down gracefully");
  await disconnectPrisma();
  process.exit(0);
};

process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);

startServer();
