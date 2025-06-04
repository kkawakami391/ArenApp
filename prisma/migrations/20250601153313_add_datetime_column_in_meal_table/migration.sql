/*
  Warnings:

  - Added the required column `mealTime` to the `meal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "meal" ADD COLUMN     "mealTime" TIMESTAMP(3) NOT NULL;
