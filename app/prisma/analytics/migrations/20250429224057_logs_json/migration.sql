/*
  Warnings:

  - You are about to drop the column `error` on the `Logs` table. All the data in the column will be lost.
  - You are about to drop the column `hostname` on the `Logs` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `Logs` table. All the data in the column will be lost.
  - You are about to drop the column `msg` on the `Logs` table. All the data in the column will be lost.
  - You are about to drop the column `pid` on the `Logs` table. All the data in the column will be lost.
  - You are about to drop the column `request` on the `Logs` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Logs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Logs" DROP COLUMN "error",
DROP COLUMN "hostname",
DROP COLUMN "level",
DROP COLUMN "msg",
DROP COLUMN "pid",
DROP COLUMN "request",
DROP COLUMN "time";
