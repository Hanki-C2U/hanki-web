/*
  Warnings:

  - You are about to drop the column `last_message` on the `conversations` table. All the data in the column will be lost.
  - Added the required column `senderId` to the `messages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."conversations" DROP COLUMN "last_message",
ADD COLUMN     "lastMessage" TEXT;

-- AlterTable
ALTER TABLE "public"."messages" ADD COLUMN     "isRead" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "messageType" TEXT NOT NULL DEFAULT 'text',
ADD COLUMN     "senderId" TEXT NOT NULL;
