export default function KotenInput(props: {
  placeholder: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="w-full h-50">
      <label className="text-[14px]">{props.label}</label>
      <input
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        type="text"
        placeholder={props.placeholder}
        className="w-full rounded-md h-[30px] border border-gray-300 px-2"
      />
    </div>
  );
}
