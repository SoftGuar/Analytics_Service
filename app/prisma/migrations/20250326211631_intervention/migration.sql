/*
  Warnings:

  - You are about to drop the column `date` on the `Intervention` table. All the data in the column will be lost.
  - Added the required column `end_date` to the `Intervention` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Intervention" DROP COLUMN "date",
ADD COLUMN     "end_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "start_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
