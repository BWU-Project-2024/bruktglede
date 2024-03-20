-- CreateEnum
CREATE TYPE "Day" AS ENUM ('MANDAG', 'TIRSDAG', 'ONSDAG', 'TORSDAG', 'FREDAG', 'LORDAG', 'SONDAG');

-- CreateTable
CREATE TABLE "OpeningTime" (
    "id" SERIAL NOT NULL,
    "day" "Day" NOT NULL DEFAULT 'MANDAG',
    "open" BOOLEAN NOT NULL DEFAULT true,
    "openingHoursId" INTEGER,
    "storeId" INTEGER NOT NULL,

    CONSTRAINT "OpeningTime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OpeningHours" (
    "id" SERIAL NOT NULL,
    "openingHour" INTEGER NOT NULL,
    "closingHour" INTEGER NOT NULL,

    CONSTRAINT "OpeningHours_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OpeningTime_day_storeId_key" ON "OpeningTime"("day", "storeId");

-- CreateIndex
CREATE INDEX "Store_name_idx" ON "Store"("name");

-- AddForeignKey
ALTER TABLE "OpeningTime" ADD CONSTRAINT "OpeningTime_openingHoursId_fkey" FOREIGN KEY ("openingHoursId") REFERENCES "OpeningHours"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpeningTime" ADD CONSTRAINT "OpeningTime_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
