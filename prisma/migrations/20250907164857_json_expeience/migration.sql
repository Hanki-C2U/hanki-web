/*
  Warnings:

  - The `experience` column on the `mentor` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."mentor" DROP COLUMN "experience",
ADD COLUMN     "experience" JSONB NOT NULL DEFAULT '[]';
