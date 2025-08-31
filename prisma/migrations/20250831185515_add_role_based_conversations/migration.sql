/*
  Warnings:

  - You are about to drop the column `menteeId` on the `conversations` table. All the data in the column will be lost.
  - You are about to drop the column `mentorId` on the `conversations` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[mentorSupId,menteeSupId]` on the table `conversations` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `menteeSupId` to the `conversations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mentorSupId` to the `conversations` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."conversations_mentorId_menteeId_key";

-- AlterTable
ALTER TABLE "public"."conversations" DROP COLUMN "menteeId",
DROP COLUMN "mentorId",
ADD COLUMN     "menteeSupId" TEXT NOT NULL,
ADD COLUMN     "mentorSupId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "conversations_mentorSupId_menteeSupId_key" ON "public"."conversations"("mentorSupId", "menteeSupId");

-- AddForeignKey
ALTER TABLE "public"."conversations" ADD CONSTRAINT "conversations_mentorSupId_fkey" FOREIGN KEY ("mentorSupId") REFERENCES "public"."mentor"("supabaseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."conversations" ADD CONSTRAINT "conversations_menteeSupId_fkey" FOREIGN KEY ("menteeSupId") REFERENCES "public"."mentee"("supabaseId") ON DELETE RESTRICT ON UPDATE CASCADE;
