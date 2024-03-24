/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Day` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[dayId,storeId]` on the table `OpeningTimes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title,address]` on the table `Station` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Store` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Day_name_key" ON "Day"("name");

-- CreateIndex
CREATE UNIQUE INDEX "OpeningTimes_dayId_storeId_key" ON "OpeningTimes"("dayId", "storeId");

-- CreateIndex
CREATE UNIQUE INDEX "Station_title_address_key" ON "Station"("title", "address");

-- CreateIndex
CREATE UNIQUE INDEX "Store_name_key" ON "Store"("name");
