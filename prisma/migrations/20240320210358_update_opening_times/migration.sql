/*
  Warnings:

  - You are about to drop the `OpeningHours` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OpeningTime` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "OpeningTime" DROP CONSTRAINT "OpeningTime_openingHoursId_fkey";

-- DropForeignKey
ALTER TABLE "OpeningTime" DROP CONSTRAINT "OpeningTime_storeId_fkey";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "createdAt" SET DATA TYPE DATE;

-- DropTable
DROP TABLE "OpeningHours";

-- DropTable
DROP TABLE "OpeningTime";

-- CreateTable
CREATE TABLE "OpeningTimes" (
    "id" SERIAL NOT NULL,
    "day" "Day" NOT NULL DEFAULT 'MANDAG',
    "open" BOOLEAN NOT NULL DEFAULT true,
    "openingHour" INTEGER NOT NULL,
    "closingHour" INTEGER NOT NULL,
    "storeId" INTEGER NOT NULL,

    CONSTRAINT "OpeningTimes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OpeningTimes_day_storeId_key" ON "OpeningTimes"("day", "storeId");

-- AddForeignKey
ALTER TABLE "OpeningTimes" ADD CONSTRAINT "OpeningTimes_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
