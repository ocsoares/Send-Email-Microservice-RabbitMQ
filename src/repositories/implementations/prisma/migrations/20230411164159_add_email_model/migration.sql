-- CreateEnum
CREATE TYPE "StatusEmail" AS ENUM ('sent', 'failed');

-- CreateTable
CREATE TABLE "email" (
    "id" TEXT NOT NULL,
    "email_from" TEXT NOT NULL,
    "email_to" TEXT NOT NULL,
    "subject" VARCHAR(100) NOT NULL,
    "text" VARCHAR(10000) NOT NULL,
    "status_email" "StatusEmail" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "email_pkey" PRIMARY KEY ("id")
);
