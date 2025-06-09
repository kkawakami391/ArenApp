"use client";

import { useForm } from "react-hook-form";
import { WeightFormData, weightSchema } from "../models/WeightSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function MealPage() {
  const [message, setMessage] = useState("");
  const [maxDate, setMaxDate] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<WeightFormData>({ resolver: zodResolver(weightSchema) });

  // async function onSubmit(data: MealFormData) {
  //   // TODO: Obtener el babyId desde datos del login?
  //   const postData = {
  //     ...data,
  //     babyId: 1,
  //     mealTime: dayjs(data.mealTime).toDate(),
  //   };
  //   try {
  //     const response = await fetch("/api/registMeal", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(postData),
  //     });
  //     const result = await response.json();
  //
  //     // TODO: Utilizar el mensaje del response para darle un feedback al usuario
  //     setMessage(result.message);
  //     reset();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  //
  async function onSubmit() {
    return console.log("Button pushed");
  }

  // Hacer focus al input
  useEffect(() => {
    setFocus("weight");
    setMaxDate(dayjs().format("YYYY-MM-DDTHH:mm"));
  }, [setFocus]);

  return (
    // TODO: Agregar un text donde indique la edad del bebe. Se puede lograr usando AGE() postgres.
    <div className="flex flex-col items-center justify-center">
      {/* {message && <p className="text-2xl text-blue-500 mb-5">{message}</p>} */}
      <form
        className="flex flex-col items-start space-y-1"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="text-3xl">Pesaje</label>
        <input
          type="number"
          inputMode="numeric"
          className="border-8 border-gray-300 rounded-xl text-3xl"
          placeholder="Ingresa el alimento"
          step={100}
          onKeyDown={(e) => {
            if (e.key === "e" || e.key === "E") {
              e.preventDefault();
            }
          }}
          {...register("weight")}
        />
        {errors.weight && (
          <span className="text-red-500 text-xl">{errors.weight.message}</span>
        )}
        {/* Input de fecha */}
        <label className="text-3xl">Tiempo de pesaje</label>
        <input
          type="datetime-local"
          max={maxDate}
          placeholder="Dia y hora"
          className="border-8 border-gray-300 rounded-xl text-3xl"
          {...register("weightTime")}
        />
        <label className="text-3xl">Edad en el pesaje:</label>
        <label className="text-3xl">0年6ヵ月</label>
        <label className="text-3xl">Comentarios adicionales</label>
        <input
          type="text"
          className="border-8 border-gray-300 rounded-xl text-3xl h-20"
          placeholder="Escribe algun comentario"
          {...register("weightComment")}
        />
        {errors.weightComment && (
          <span className="text-red-500 text-xl">
            {errors.weightComment.message}
          </span>
        )}
        <div className="w-full flex justify-center pt-8">
          <button
            type="submit"
            className="border-4 border-green bg-light-green border-solid rounded-xl text-2xl p-1 hover:bg-green"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
}
