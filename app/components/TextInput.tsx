type Props = {
  label: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function TextInput({
  label,
  placeholder,
  value,
  setValue,
}: Props) {
  return (
    <>
      <label className="text-3xl">{label}</label>
      <input
        id={label}
        name={label}
        type="text"
        value={value}
        onInput={(e) => {
          setValue(e.currentTarget.value);
        }}
        className="border-8 border-gray-300 rounded-xl text-3xl"
        placeholder={placeholder}
      />
    </>
  );
}
