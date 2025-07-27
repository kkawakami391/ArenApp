"use client";

import { useForm } from "react-hook-form";
import { MealFormSchema, mealFormSchema } from "../models/MealSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function MealPage() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [maxDate, setMaxDate] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<MealFormSchema>({ resolver: zodResolver(mealFormSchema) });

  // -----------------Usando API / route.ts---------------------------
  async function onSubmit(data: MealFormSchema) {
    setMessage("");
    // Obtener el babyId desde datos del login?
    const postData = {
      ...data,
      babyId: 1,
      mealTime: dayjs(data.mealTime).toDate(),
    };
    try {
      const response = await fetch("/api/registMeal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });
      const result = await response.json();

      // Utilizar el mensaje del response para darle un feedback al usuario
      setMessage(result.message);
      reset();
    } catch (error) {
      console.error(error);
      //TODO: Checkear si esto da un mensaje de error apropiado
      setError(String(error));
    }
  }
  // ----------------------------------------------------------------
  // async function onSubmit(data: MealFormSchema) {
  //   try {
  //     const mealData = await registBabyMeal(
  //       data.meal,
  //       data.mealQnt,
  //       data.mealTime,
  //       // TODO: Obtener el babyId desde los datos del usuario
  //       1,
  //     );
  //
  //     if (mealData.errorMsg) {
  //       setError(mealData.errorMsg);
  //     } else if (mealData.successMsg) {
  //       setMessage(mealData.successMsg);
  //     }
  //   } catch (error) {
  //     setError("Ocurrio un error inesperado");
  //     console.error(error);
  //   } finally {
  //     reset();
  //   }
  // }

  // Hacer focus al input
  useEffect(() => {
    setFocus("meal");
    setMaxDate(dayjs().format("YYYY-MM-DDTHH:mm"));
  }, [setFocus]);

  return (
    <div className="flex flex-col items-center justify-center">
      {message && <p className="text-2xl text-blue-500 mb-5">{message}</p>}
      {error && <p className="text-2xl text-red-500 mb-5">{error}</p>}
      <form
        className="flex flex-col items-start space-y-1"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="text-3xl">Alimento</label>
        <input
          type="text"
          className="border-8 border-gray-300 rounded-xl text-3xl"
          placeholder="Ingresa el alimento"
          {...register("meal")}
        />
        {errors.meal && (
          <span className="text-red-500 text-xl">{errors.meal.message}</span>
        )}
        <label className="text-3xl">Gramos consumidos</label>
        <input
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          className="border-8 border-gray-300 rounded-xl text-3xl"
          placeholder="Cantidad de gramos"
          step={5}
          onKeyDown={(e) => {
            if (e.key === "e" || e.key === "E") {
              e.preventDefault();
            }
          }}
          {...register("mealQnt")}
        />
        {errors.mealQnt && (
          <span className="text-red-500 text-xl">{errors.mealQnt.message}</span>
        )}
        {/* Input de fecha */}
        <label className="text-3xl">Dia y hora</label>
        <input
          type="datetime-local"
          max={maxDate}
          placeholder="Dia y hora"
          className="border-8 border-gray-300 rounded-xl text-3xl w-full"
          {...register("mealTime")}
        />
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
