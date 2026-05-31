"use client";
import RegisterCard from "../components/RegisterCard";
import {
  HeightIcon,
  HumorIcon,
  MilkIcon,
  TemperatureIcon,
  ToiletIcon,
  WeightIcon,
} from "../components/Icons";

const cards = [
  {
    label: "Meal",
    icon: <MilkIcon />,
    route: "/meal",
    accent: "bg-orange-100 text-orange-500",
  },
  {
    label: "Weight",
    icon: <WeightIcon />,
    route: "/weight",
    accent: "bg-blue-100 text-blue-500",
  },
  {
    label: "Height",
    icon: <HeightIcon />,
    route: "/height",
    accent: "bg-green-100 text-green-600",
  },
  {
    label: "Humor",
    icon: <HumorIcon />,
    route: "/humor",
    accent: "bg-yellow-100 text-yellow-500",
  },
  {
    label: "Temperature",
    icon: <TemperatureIcon />,
    route: "/temperature",
    accent: "bg-red-100 text-red-500",
  },
  {
    label: "Toilet",
    icon: <ToiletIcon />,
    route: "/toilet",
    accent: "bg-violet-100 text-violet-500",
  },
];

function Register() {
  return (
    <div className="min-h-screen bg-cream px-4 py-8">
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Registrar Actividad
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            ¿Qué te gustaría registrar hoy?
          </p>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-2 gap-4">
          {cards.map((card) => (
            <RegisterCard
              key={card.route}
              label={card.label}
              icon={card.icon}
              route={card.route}
              accent={card.accent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Register;
