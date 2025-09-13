-- AlterTable
ALTER TABLE "public"."conversations" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "public"."mentee" ADD COLUMN     "Github" TEXT,
ADD COLUMN     "Instagram" TEXT,
ADD COLUMN     "LinkedIn" TEXT,
ADD COLUMN     "Twitter" TEXT,
ADD COLUMN     "Website" TEXT;

-- AlterTable
ALTER TABLE "public"."mentor" ADD COLUMN     "Github" TEXT,
ADD COLUMN     "Instagram" TEXT,
ADD COLUMN     "LinkedIn" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "Twitter" TEXT,
ADD COLUMN     "Website" TEXT;
