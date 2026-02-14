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

function Register() {
  return (
    <div className="grid grid-cols-2 justify-items-center items-center mt-10">
      <RegisterCard label="Meal" icon={<MilkIcon />} route={"/meal"} />
      <RegisterCard label="Weight" icon={<WeightIcon />} route={"/weight"} />
      <RegisterCard label="Height" icon={<HeightIcon />} route={"/height"} />
      <RegisterCard label="Humor" icon={<HumorIcon />} route={"/humor"} />
      <RegisterCard
        label="Temperature"
        icon={<TemperatureIcon />}
        route={"/temperature"}
      />
      <RegisterCard label="Toilet" icon={<ToiletIcon />} route={"/toilet"} />
    </div>
  );
}

export default Register;
