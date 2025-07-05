"use client";

import { useForm } from "react-hook-form";
import { WeightFormData, weightSchema } from "../models/WeightSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function MealPage() {
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [maxDate, setMaxDate] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    watch,
    formState: { errors },
  } = useForm<WeightFormData>({ resolver: zodResolver(weightSchema) });
  console.log(watch("weightTime"));

  async function onSubmit(data: WeightFormData) {
    // TODO: Obtener el babyId desde datos del login?
    const postData = {
      ...data,
      babyId: 1,
      weightTime: dayjs(data.weightTime).toDate(),
    };
    try {
      const response = await fetch("/api/registWeight", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });
      const result = await response.json();

      // TODO: Utilizar el mensaje del response para darle un feedback al usuario
      setMessage(result.message);
      reset();
    } catch (error) {
      console.error(error);
    }
  }

  // async function onSubmit() {
  //   return console.log("weight");
  // }

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
        <div className="flex flex-col items-start justify-center my-4">
          <label className="text-3xl">Pesaje</label>
          <input
            type="number"
            inputMode="numeric"
            className="border-8 border-gray-300 rounded-xl text-3xl"
            placeholder="Ingresa los kilogramos"
            step={0.1}
            onKeyDown={(e) => {
              if (e.key === "e" || e.key === "E") {
                e.preventDefault();
              }
            }}
            {...register("weight")}
          />
          {errors.weight && (
            <span className="text-red-500 text-xl">
              {errors.weight.message}
            </span>
          )}
        </div>
        {/* Input de fecha */}
        <div className="flex flex-col items-start justify-center my-4">
          <label className="text-3xl">Dia y horario de pesaje</label>
          <input
            type="datetime-local"
            max={maxDate}
            className="border-8 border-gray-300 rounded-xl text-3xl w-96"
            {...register("weightTime")}
          />
        </div>
        <div className="flex flex-col items-start justify-center my-4">
          <label className="text-3xl">Comentarios adicionales</label>
          <textarea
            className="border-8 border-gray-300 rounded-xl text-3xl h-56 w-96"
            placeholder="Escribe algun comentario"
            {...register("weightComment")}
          />
          {errors.weightComment && (
            <span className="text-red-500 text-xl">
              {errors.weightComment.message}
            </span>
          )}
        </div>
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
