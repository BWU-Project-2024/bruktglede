/*
  Warnings:

  - You are about to drop the column `postId` on the `PostType` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[dayId]` on the table `OpeningTimes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `postTypeId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PostType" DROP CONSTRAINT "PostType_postId_fkey";

-- AlterTable
ALTER TABLE "OpeningTimes" ALTER COLUMN "openingHour" DROP NOT NULL,
ALTER COLUMN "closingHour" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "postTypeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PostType" DROP COLUMN "postId";

-- CreateIndex
CREATE UNIQUE INDEX "OpeningTimes_dayId_key" ON "OpeningTimes"("dayId");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_postTypeId_fkey" FOREIGN KEY ("postTypeId") REFERENCES "PostType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
