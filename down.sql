-- DropForeignKey
ALTER TABLE "auth"."Users" DROP CONSTRAINT "Users_roleId_fkey";

-- DropTable
DROP TABLE "auth"."Role";

-- DropTable
DROP TABLE "auth"."Users";

-- CreateTable
CREATE TABLE "public"."Role" (
    "id" SERIAL NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_role_key" ON "public"."Role"("role" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "public"."Users"("email" ASC);

-- CreateIndex
CREATE INDEX "Users_username_idx" ON "public"."Users"("username" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "public"."Users"("username" ASC);

-- AddForeignKey
ALTER TABLE "public"."Users" ADD CONSTRAINT "Users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

