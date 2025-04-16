-- AlterTable
ALTER TABLE "ExecutiveReport" ADD COLUMN     "service" TEXT NOT NULL DEFAULT 'default',
ALTER COLUMN "timestamp" SET DEFAULT CURRENT_TIMESTAMP;
