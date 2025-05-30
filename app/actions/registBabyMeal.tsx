"use server";

import { prisma } from "../client/client";
import { mealSchema } from "../models/MealSchema";

export async function registBabyMeal(
  meal: string,
  mealQnt: string,
  babyId: number,
) {
  const { success, error, data } = mealSchema.safeParse({
    meal,
    mealQnt,
    babyId,
  });

  if (!success) {
    return error.message;
  }

  try {
    const mealCreated = await prisma.meal.create({
      data: {
        meal: data.meal,
        mealQnt: data.mealQnt,
        babyId: data.babyId,
      },
    });

    return mealCreated;
  } catch (error) {
    throw new Error(error);
  }
}
