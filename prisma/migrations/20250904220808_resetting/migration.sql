/*
  Warnings:

  - You are about to drop the column `duration` on the `sessions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sessionDate,startTime]` on the table `sessions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `endTime` to the `sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `sessions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."sessions" DROP COLUMN "duration",
ADD COLUMN     "endTime" TEXT NOT NULL,
ADD COLUMN     "startTime" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "sessions_sessionDate_startTime_key" ON "public"."sessions"("sessionDate", "startTime");
