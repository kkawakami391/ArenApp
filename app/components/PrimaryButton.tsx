import { registBabyMeal } from "../actions/registBabyMeal";

type Props = {
  meal: string;
  mealQnt: string;
  babyId: number;
  mealTime: string;
};

// TODO: Pasar el babyId desde los datos del usuario logeado.
export default function PrimaryButton({ meal, mealQnt, mealTime }: Props) {
  return (
    <button
      className="border-4 border-green bg-light-green border-solid rounded-xl text-2xl p-1 hover:bg-green"
      onClick={() => registBabyMeal(meal, mealQnt, mealTime, 1)}
    >
      Registrar
    </button>
  );
}
