/*
  Warnings:

  - You are about to drop the column `rating` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `sessions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."sessions" DROP COLUMN "rating",
DROP COLUMN "updatedAt",
ADD COLUMN     "menteeRating" INTEGER,
ADD COLUMN     "menteeReview" TEXT,
ADD COLUMN     "mentorRating" INTEGER,
ADD COLUMN     "mentorReview" TEXT,
ALTER COLUMN "duration" SET DEFAULT 20;
