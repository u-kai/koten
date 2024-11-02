export default function ParticipateButton(props: { href: string }) {
  return (
    <div className="rounded-md border-black border-[1px] w-[110px] h-[40px] flex justify-center items-center text-[15px] p-2">
      <a href={props.href}>
        <button>参加する</button>
      </a>
    </div>
  );
}
