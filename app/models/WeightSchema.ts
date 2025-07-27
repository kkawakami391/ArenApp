import dayjs from "dayjs";
import { z } from "zod";

export const weightSchema = z.object({
  weight: z.string().regex(/^\d+(\.\d+)?$/, {
    message: "El peso ingresado no es valido",
  }),
  weightTime: z.string().refine((val) => dayjs(val).isValid(), {
    message: "El formato del date es invalido",
  }),
  weightComment: z
    .string()
    .max(100, "Sobrepasaste la cantidad de caracteres.")
    .optional(),
});

export type WeightFormData = z.infer<typeof weightSchema>;

export const weightRequestSchema = z.object({
  ...weightSchema.shape,
  babyId: z.number(),
});

export type WeightRequestSchema = z.infer<typeof weightRequestSchema>;
