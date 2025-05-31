import { prisma } from "@/app/client/client";
import { mealRequestSchema } from "@/app/models/MealSchema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const mealData = await request.json();
  console.log("data", mealData);
  const { data, success } = mealRequestSchema.safeParse(mealData);

  // Si los datos no son validos devolver 400 al Front
  if (!success) {
    return NextResponse.json(
      { error: "Los datos no son validos" },
      { status: 400 },
    );
  }

  const registeredMeal = await prisma.meal.create({ data });
  return NextResponse.json({
    data: registeredMeal,
    message: "Registro de alimento exitoso!",
  });
}
