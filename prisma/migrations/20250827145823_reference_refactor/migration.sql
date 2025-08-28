/*
  Warnings:

  - You are about to drop the `Mentor_Mentee_RelationShip` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Mentor_Mentee_RelationShip" DROP CONSTRAINT "Mentor_Mentee_RelationShip_menteeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Mentor_Mentee_RelationShip" DROP CONSTRAINT "Mentor_Mentee_RelationShip_mentorId_fkey";

-- DropTable
DROP TABLE "public"."Mentor_Mentee_RelationShip";

-- CreateTable
CREATE TABLE "public"."_MenteeToMentor" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_MenteeToMentor_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_MenteeToMentor_B_index" ON "public"."_MenteeToMentor"("B");

-- AddForeignKey
ALTER TABLE "public"."_MenteeToMentor" ADD CONSTRAINT "_MenteeToMentor_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."mentee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_MenteeToMentor" ADD CONSTRAINT "_MenteeToMentor_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."mentor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
