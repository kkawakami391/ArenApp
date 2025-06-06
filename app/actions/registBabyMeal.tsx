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
        mealTime: data.mealTime,
        baby: {
          connect: { id: 1 },
        },
      },
    });

    return mealCreated;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error("Error inesperado ha ocurrido");
  }
}
