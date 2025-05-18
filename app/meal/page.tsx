"use client";

import { useState } from "react";
import TextInput from "../components/TextInput";
import NumericInput from "../components/NumericInput";
import PrimaryButton from "../components/PrimaryButton";

export default function MealPage() {
  const [meal, setMeal] = useState("");
  const [mealQnt, setMealQnt] = useState("");

  // Funcion para registrar los datos a la base de datos
  function handleRegist(meal: string, mealQnt: number) {}

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-start space-y-1">
        <TextInput
          label="Alimento"
          placeholder="Ingresa el alimento"
          value={meal}
          setValue={setMeal}
        />
        <NumericInput
          label="Gramos consumidos"
          placeholder="Cantidad en gramos"
          value={mealQnt}
          setValue={setMealQnt}
        />
        <div className="w-full flex justify-center pt-8">
          <PrimaryButton />
        </div>
      </div>
    </div>
  );
}
