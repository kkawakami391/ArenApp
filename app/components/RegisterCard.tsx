import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  label: string;
  icon?: React.ReactNode;
  route: string;
};

export default function RegisterCard({ label, icon, route }: Props) {
  // Estado para manejar el efecto de la animacion.
  const [effect, setEffect] = useState(false);
  const router = useRouter();

  return (
    <button
      className={`my-3 px-5 bg-blue-400 rounded-xl ${effect && "animate-wiggle"} bg-cream hover:bg-gray-blue border-solid border-8 border-gray-300`}
      onClick={() => {
        setEffect(true);
        router.push(route);
      }}
    >
      {icon}
      <p className="mx-auto text-5xl font-bold">{label}</p>
    </button>
  );
}
