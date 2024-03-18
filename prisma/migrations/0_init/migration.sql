-- CreateTable
CREATE TABLE "TestModel" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "TestModel_pkey" PRIMARY KEY ("id")
);

