-- CreateTable
CREATE TABLE "public"."mentee" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "age" INTEGER NOT NULL DEFAULT 20,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "last_login" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ratings" INTEGER NOT NULL DEFAULT 0,
    "experience" TEXT,
    "bio" TEXT NOT NULL,
    "joined" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Interests" TEXT[],

    CONSTRAINT "mentee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."mentor" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "age" INTEGER NOT NULL DEFAULT 20,
    "experience" TEXT[],
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "joined" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ratings" INTEGER NOT NULL DEFAULT 0,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "last_login" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expertise" TEXT[],
    "Biography" TEXT NOT NULL,

    CONSTRAINT "mentor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Mentor_Mentee_RelationShip" (
    "menteeId" INTEGER NOT NULL,
    "mentorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mentor_Mentee_RelationShip_pkey" PRIMARY KEY ("menteeId","mentorId")
);

-- CreateIndex
CREATE UNIQUE INDEX "mentee_email_key" ON "public"."mentee"("email");

-- CreateIndex
CREATE UNIQUE INDEX "mentee_phone_number_key" ON "public"."mentee"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "mentor_email_key" ON "public"."mentor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "mentor_phone_number_key" ON "public"."mentor"("phone_number");

-- AddForeignKey
ALTER TABLE "public"."Mentor_Mentee_RelationShip" ADD CONSTRAINT "Mentor_Mentee_RelationShip_menteeId_fkey" FOREIGN KEY ("menteeId") REFERENCES "public"."mentee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Mentor_Mentee_RelationShip" ADD CONSTRAINT "Mentor_Mentee_RelationShip_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "public"."mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
