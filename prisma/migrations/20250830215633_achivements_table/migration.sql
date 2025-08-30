-- CreateTable
CREATE TABLE "public"."Achievements" (
    "id" SERIAL NOT NULL,
    "supabaseId" TEXT NOT NULL,
    "experience" TEXT[],
    "education" TEXT[],
    "accolades" TEXT[],
    "reviews" TEXT[],

    CONSTRAINT "Achievements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Achievements_supabaseId_key" ON "public"."Achievements"("supabaseId");

-- AddForeignKey
ALTER TABLE "public"."Achievements" ADD CONSTRAINT "Achievements_supabaseId_fkey" FOREIGN KEY ("supabaseId") REFERENCES "public"."mentor"("supabaseId") ON DELETE RESTRICT ON UPDATE CASCADE;
