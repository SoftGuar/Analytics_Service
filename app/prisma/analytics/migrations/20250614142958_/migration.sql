/*
  Warnings:

  - The primary key for the `UserSessions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Feedback` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "UserSessions" DROP CONSTRAINT "UserSessions_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserSessions_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "UserSessions_id_seq";

-- DropTable
DROP TABLE "Feedback";
