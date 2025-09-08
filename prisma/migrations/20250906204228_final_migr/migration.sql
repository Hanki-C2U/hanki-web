/*
  Warnings:

  - You are about to drop the column `menteeId` on the `conversations` table. All the data in the column will be lost.
  - You are about to drop the column `mentorId` on the `conversations` table. All the data in the column will be lost.
  - You are about to drop the column `experience` on the `mentee` table. All the data in the column will be lost.
  - You are about to drop the column `Biography` on the `mentor` table. All the data in the column will be lost.
  - The `experience` column on the `mentor` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `senderRole` on the `messages` table. All the data in the column will be lost.
  - The `messageType` column on the `messages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Achievements` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[participant1Id,participant2Id]` on the table `conversations` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `participant1Id` to the `conversations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `participant2Id` to the `conversations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bio` to the `mentor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resumeId` to the `mentor` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."ConversationType" AS ENUM ('MENTOR_MENTEE', 'PEER_TO_PEER', 'GROUP_CHAT');

-- CreateEnum
CREATE TYPE "public"."MessageType" AS ENUM ('TEXT', 'IMAGE', 'FILE', 'SYSTEM');

-- DropForeignKey
ALTER TABLE "public"."Achievements" DROP CONSTRAINT "Achievements_supabaseId_fkey";

-- DropForeignKey
ALTER TABLE "public"."conversations" DROP CONSTRAINT "conversations_menteeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."conversations" DROP CONSTRAINT "conversations_mentorId_fkey";

-- DropIndex
DROP INDEX "public"."conversations_mentorId_menteeId_key";

-- AlterTable
ALTER TABLE "public"."conversations" DROP COLUMN "menteeId",
DROP COLUMN "mentorId",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "participant1Id" TEXT NOT NULL,
ADD COLUMN     "participant2Id" TEXT NOT NULL,
ADD COLUMN     "type" "public"."ConversationType" NOT NULL DEFAULT 'PEER_TO_PEER';

-- AlterTable
ALTER TABLE "public"."mentee" DROP COLUMN "experience";

-- AlterTable
ALTER TABLE "public"."mentor" DROP COLUMN "Biography",
ADD COLUMN     "bio" TEXT NOT NULL,
ADD COLUMN     "resumeId" TEXT NOT NULL,
DROP COLUMN "experience",
ADD COLUMN     "experience" TEXT[];

-- AlterTable
ALTER TABLE "public"."messages" DROP COLUMN "senderRole",
DROP COLUMN "messageType",
ADD COLUMN     "messageType" "public"."MessageType" NOT NULL DEFAULT 'TEXT';

-- DropTable
DROP TABLE "public"."Achievements";

-- CreateIndex
CREATE UNIQUE INDEX "conversations_participant1Id_participant2Id_key" ON "public"."conversations"("participant1Id", "participant2Id");
