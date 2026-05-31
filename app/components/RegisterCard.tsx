"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  label: string;
  icon?: React.ReactNode;
  route: string;
  accent?: string;
};

export default function RegisterCard({
  label,
  icon,
  route,
  accent = "bg-gray-100 text-gray-500",
}: Props) {
  const [effect, setEffect] = useState(false);
  const router = useRouter();

  return (
    <button
      className={`
        group flex flex-col items-center justify-center gap-4
        w-full py-7 px-4 bg-white rounded-2xl
        shadow-sm hover:shadow-lg
        border border-gray-100
        transition-all duration-200 ease-out
        hover:-translate-y-1 active:scale-95
        ${effect ? "animate-wiggle" : ""}
      `}
      onClick={() => {
        setEffect(true);
        router.push(route);
      }}
      onAnimationEnd={() => setEffect(false)}
    >
      <div
        className={`${accent} p-4 rounded-xl transition-transform duration-200 group-hover:scale-110`}
      >
        {icon}
      </div>
      <span className="text-sm font-semibold text-gray-700 tracking-wide">
        {label}
      </span>
    </button>
  );
}
