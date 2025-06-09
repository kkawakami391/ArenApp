import dayjs from "dayjs";
import { z } from "zod";

export const weightSchema = z.object({
  weight: z.number().min(1000, "El peso minimo tiene que ser de 1000gr"),
  weightTime: z.string().refine((val) => dayjs(val).isValid(), {
    message: "El formato del date es invalido",
  }),
  weightComment: z.string().max(100, "Sobrepasaste la cantidad de caracteres."),
});

export type WeightFormData = z.infer<typeof weightSchema>;
