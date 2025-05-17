type Props = {
  label: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function NumericInput({
  label,
  value,
  setValue,
  placeholder,
}: Props) {
  // Funcion para restringir el input para que solo se pueda ingresar numeros
  function handleNumericInput(e: React.FormEvent<HTMLInputElement>): string {
    const value = e.currentTarget.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    return numericValue;
  }

  return (
    <>
      <label className="text-3xl">{label}</label>
      <input
        id={label}
        name={label}
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={value}
        onInput={(e) => {
          setValue(handleNumericInput(e));
        }}
        className="border-8 border-gray-300 rounded-xl text-3xl"
        placeholder={placeholder}
      />
    </>
  );
}
