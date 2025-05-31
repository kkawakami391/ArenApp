"use client";

import { useForm } from "react-hook-form";
import { MealFormData, mealSchema } from "../models/MealSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

export default function MealPage() {
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<MealFormData>({ resolver: zodResolver(mealSchema) });

  async function onSubmit(data: MealFormData) {
    // TODO: Obtener el babyId desde datos del login?
    const postData = { ...data, babyId: 1 };
    try {
      const response = await fetch("/api/registMeal", {
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

  // Hacer focus al input
  useEffect(() => {
    setFocus("meal");
  }, [setFocus]);

  return (
    <div className="flex flex-col items-center justify-center">
      {message && <p className="text-2xl text-blue-500 mb-5">{message}</p>}
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
