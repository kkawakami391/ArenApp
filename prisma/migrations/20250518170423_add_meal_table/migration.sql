-- CreateTable
CREATE TABLE "Meal" (
    "id" SERIAL NOT NULL,
    "meal" TEXT NOT NULL,
    "mealQnt" TEXT NOT NULL,
    "babyId" INTEGER NOT NULL,

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_babyId_fkey" FOREIGN KEY ("babyId") REFERENCES "Baby"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
