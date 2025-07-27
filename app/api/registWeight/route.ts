import { prisma } from "@/app/client/client";
import { getBabyAge } from "../../generated/prisma/sql";
import { weightRequestSchema } from "@/app/models/WeightSchema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const weightData = await request.json();
  const { data, success, error } = weightRequestSchema.safeParse(weightData);

  // Si los datos no son validos devolver 400 al Front
  if (!success) {
    return NextResponse.json(
      { error: error.issues[0].message },
      { status: 400 },
    );
  }

  const registeredWeight = await prisma.weight.create({
    data: {
      weight: data.weight,
      weightTime: data.weightTime,
      weightComment: data.weightComment,
      baby: {
        connect: { id: 1 }, // TODO: Cambiar por el id del bebé que viene del Front
      },
    },
  });

  // Obtener la edad del bebe
  const weightBabyAge = await prisma.baby.findUnique({
    where: { id: 1 },
    select: { dateOfBirth: true },
  });

  // Si no existe el dato del bebe, terminar la operacion.
  if (!weightBabyAge) {
    return NextResponse.json(
      {
        error: "No existe la fecha de nacimiento del bebe en la base de datos.",
      },
      { status: 400 },
    );
  }

  // Calcular la edad usando el Age con el queryRaw
  const babyAge = await prisma.$queryRawTyped(
    getBabyAge(new Date(data.weightTime), weightBabyAge.dateOfBirth),
  );

  return NextResponse.json({
    data: registeredWeight,
    babyAge: babyAge,
    message: "Registro de peso exitoso!",
  });
}
