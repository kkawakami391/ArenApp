/*
  Warnings:

  - You are about to drop the column `weight` on the `baby` table. All the data in the column will be lost.
  - Added the required column `dateOfBirth` to the `baby` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "baby" DROP COLUMN "weight",
ADD COLUMN     "dateOfBirth" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "weight" (
    "id" SERIAL NOT NULL,
    "weight" TEXT NOT NULL,
    "weightTime" TEXT NOT NULL,
    "weightComment" TIMESTAMP(3) NOT NULL,
    "babyId" INTEGER NOT NULL,

    CONSTRAINT "weight_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "weight" ADD CONSTRAINT "weight_babyId_fkey" FOREIGN KEY ("babyId") REFERENCES "baby"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
