import { registBabyMeal } from "../actions/registBabyMeal";

type Props = {
  meal: string;
  mealQnt: string;
  babyId: number;
};

export default function PrimaryButton({ meal, mealQnt }: Props) {
  return (
    <button
      className="border-4 border-green bg-light-green border-solid rounded-xl text-2xl p-1 hover:bg-green"
      onClick={() => registBabyMeal(meal, mealQnt, 1)}
    >
      Registrar
    </button>
  );
}
