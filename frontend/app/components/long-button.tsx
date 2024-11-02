import { FONT_COLOR, FONT_FAMILY } from "../configs";

export default function LongButton(props: { display: string; href: string }) {
  return (
    <a href={props.href}>
      <button
        className="px-8 bg-white text-black rounded-md hover:bg-gray "
        style={{
          height: 30,
          width: 300,
        }}
      >
        <div className={`[font-family:'${FONT_FAMILY}'] text-[${FONT_COLOR}]`}>
          {props.display}
        </div>
      </button>
    </a>
  );
}
