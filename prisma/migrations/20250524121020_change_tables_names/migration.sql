/*
  Warnings:

  - You are about to drop the `Baby` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Meal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Parent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Meal" DROP CONSTRAINT "Meal_babyId_fkey";

-- DropForeignKey
ALTER TABLE "Parent" DROP CONSTRAINT "Parent_babyId_fkey";

-- DropTable
DROP TABLE "Baby";

-- DropTable
DROP TABLE "Meal";

-- DropTable
DROP TABLE "Parent";

-- CreateTable
CREATE TABLE "baby" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,

    CONSTRAINT "baby_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parent" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "babyId" INTEGER NOT NULL,

    CONSTRAINT "parent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meal" (
    "id" SERIAL NOT NULL,
    "meal" TEXT NOT NULL,
    "mealQnt" TEXT NOT NULL,
    "babyId" INTEGER NOT NULL,

    CONSTRAINT "meal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "parent" ADD CONSTRAINT "parent_babyId_fkey" FOREIGN KEY ("babyId") REFERENCES "baby"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meal" ADD CONSTRAINT "meal_babyId_fkey" FOREIGN KEY ("babyId") REFERENCES "baby"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
