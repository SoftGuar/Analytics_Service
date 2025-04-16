/*
  Warnings:

  - You are about to drop the column `cpu_load_idle` on the `ExecutiveReport` table. All the data in the column will be lost.
  - You are about to drop the column `cpu_load_system` on the `ExecutiveReport` table. All the data in the column will be lost.
  - You are about to drop the column `cpu_load_user` on the `ExecutiveReport` table. All the data in the column will be lost.
  - You are about to drop the column `top_processes` on the `ExecutiveReport` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ExecutiveReport" DROP COLUMN "cpu_load_idle",
DROP COLUMN "cpu_load_system",
DROP COLUMN "cpu_load_user",
DROP COLUMN "top_processes";
