import dayjs from "dayjs";
import { z } from "zod";

export const mealSchema = z.object({
  meal: z.string().min(1, "El nombre del alimento es obligatorio"),
  mealQnt: z
    .string()
    .min(1, "La cantidad de alimento es obligatorio")
    // .regex(/^\d+$/, "Solo números permitidos")
    .refine((val: string) => /^\d+$/.test(val), {
      message: "Solo numeros permitidos",
    }),
  mealTime: z.string().refine((val) => dayjs(val).isValid(), {
    message: "El formato del date es invalido",
  }),
  babyId: z.number(),
});

export type MealSchema = z.infer<typeof mealSchema>;

export const mealFormSchema = z.object({
  meal: z.string().min(1, "El nombre del alimento es obligatorio"),
  mealQnt: z
    .string()
    .min(1, "La cantidad de alimento es obligatorio")
    .refine((val: string) => /^\d+$/.test(val), {
      message: "Solo numeros permitidos",
    }),
  mealTime: z.string().refine((val) => dayjs(val).isValid(), {
    message: "El formato del date es invalido",
  }),
});

export type MealFormSchema = z.infer<typeof mealFormSchema>;
