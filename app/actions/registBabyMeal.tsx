"use server";

import dayjs from "dayjs";
import { prisma } from "../client/client";
import { mealSchema } from "../models/MealSchema";

type BabyMealResponse = {
  errorMsg?: string;
  successMsg?: string;
  registeredMeal?: {
    meal: string;
    mealQnt: string;
    mealTime: Date;
    id: number;
    babyId: number;
  };
};

export async function registBabyMeal(
  meal: string,
  mealQnt: string,
  mealTime: string,
  babyId: number,
): Promise<BabyMealResponse> {
  // const response: BabyMealResponse = {
  //   errorMsg: null,
  //   successMsg: null,
  //   registeredMeal: {
  //     meal: null,
  //     mealQnt: null,
  //     mealTime: null,
  //     id: null,
  //     babyId: null,
  //   },
  // };

  const { success, error, data } = mealSchema.safeParse({
    meal,
    mealQnt,
    mealTime,
    babyId,
  });

  if (!success) {
    // return error.message;

    // response.errorMsg = error.message;
    // return response;
    return { errorMsg: error.message };
  }

  try {
    const registeredMeal = await prisma.meal.create({
      data: {
        meal: data.meal,
        mealQnt: data.mealQnt,
        mealTime: dayjs(data.mealTime).toDate(),
        baby: {
          connect: { id: data.babyId },
        },
      },
    });

    // const res = {
    //   mealCreated: registeredMeal,
    //   message: "El alimento fue registrado exitosamente!",
    // };

    // response.registeredMeal = registeredMeal;
    // response.successMsg = "El alimento fue registrado exitosamente!";
    return {
      successMsg: "El alimento fue registrado exitosamente!",
      registeredMeal,
    };
  } catch (err) {
    if (err instanceof Error) {
      return { errorMsg: err.message };
      // response.errorMsg = err.message;
      // return response;
    }
    return { errorMsg: "Error inesperado ha ocurrido" };
    // response.errorMsg = "Error inesperado ha ocurrido";
    // return response;
  }
}
