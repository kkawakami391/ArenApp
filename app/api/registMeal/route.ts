import { prisma } from "@/app/client/client";
import { mealSchema } from "@/app/models/MealSchema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const mealData = await request.json();
  const { data, success, error } = mealSchema.safeParse(mealData);

  // Si los datos no son validos devolver 400 al Front
  if (!success) {
    return NextResponse.json(
      { error: error.issues[0].message },
      { status: 400 },
    );
  }

  const registeredMeal = await prisma.meal.create({
    data: {
      meal: data.meal,
      mealQnt: data.mealQnt,
      mealTime: data.mealTime,
      baby: {
        connect: { id: 1 }, // TODO: Cambiar por el id del bebé que viene del Front
      },
    },
  });
  return NextResponse.json({
    data: registeredMeal,
    message: "Registro de alimento exitoso!",
  });
}
