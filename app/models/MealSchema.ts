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
});

export type MealFormData = z.infer<typeof mealSchema>;

export const mealRequestSchema = z.object({
  meal: z.string().min(1, "El nombre del alimento es obligatorio"),
  mealQnt: z
    .string()
    .min(1, "La cantidad de alimento es obligatorio")
    // .regex(/^\d+$/, "Solo números permitidos")
    .refine((val: string) => /^\d+$/.test(val), {
      message: "Solo numeros permitidos",
    }),
  babyId: z.number(),
});
