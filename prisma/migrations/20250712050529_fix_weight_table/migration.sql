/*
  Warnings:

  - Changed the type of `weightTime` on the `weight` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "weight" DROP COLUMN "weightTime",
ADD COLUMN     "weightTime" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "weightComment" SET DATA TYPE TEXT;
