export default function Toggle(props: {
  value: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div
      onClick={() => props.onChange(!props.value)}
      className={`w-10 h-4 flex items-center rounded-full  cursor-pointer transition-colors duration-300 ${
        props.value ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          props.value ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </div>
  );
}
