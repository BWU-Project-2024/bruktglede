/*
  Warnings:

  - You are about to drop the column `openingTimesId` on the `Day` table. All the data in the column will be lost.
  - Added the required column `dayId` to the `OpeningTimes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Day" DROP CONSTRAINT "Day_openingTimesId_fkey";

-- AlterTable
ALTER TABLE "Day" DROP COLUMN "openingTimesId";

-- AlterTable
ALTER TABLE "OpeningTimes" ADD COLUMN     "dayId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "OpeningTimes" ADD CONSTRAINT "OpeningTimes_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "Day"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
