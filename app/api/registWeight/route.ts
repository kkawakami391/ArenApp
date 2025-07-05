import { prisma } from "@/app/client/client";
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

  // Devolver la diferencia de edades con postgres Age()
  // Obtener la edad del bebe
  const babyBirthDate = await prisma.baby.findUnique({
    where: { id: 1 },
    select: { dateOfBirth: true },
  });
  console.log("babyBirth", babyBirthDate);

  // Calcular la edad usando el Age con el queryRaw
  const ageResult = await.prisma.$queryRawUnsafe<{ age: string}[]>(
    `SELECT AGE($1::timestamp, $2::timestamp) as age`,
    data.weightTime,
    babyBirthDate?.dateOfBirth
  )

  console.log("ageResult",ageResult)

  return NextResponse.json({
    data: registeredWeight,
    message: "Registro de peso exitoso!",
  });
}
