/*
  Warnings:

  - You are about to drop the column `POI_id` on the `POI_logs` table. All the data in the column will be lost.
  - Added the required column `poi_id` to the `POI_logs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "POI_logs" DROP COLUMN "POI_id",
ADD COLUMN     "poi_id" INTEGER NOT NULL;
