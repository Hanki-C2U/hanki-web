/*
  Warnings:

  - The `experience` column on the `mentee` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `experience` on the `mentor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."mentee" DROP COLUMN "experience",
ADD COLUMN     "experience" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "public"."mentor" DROP COLUMN "experience",
ADD COLUMN     "experience" INTEGER NOT NULL;
