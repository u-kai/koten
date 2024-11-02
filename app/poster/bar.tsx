import { FONT_COLOR, FONT_FAMILY } from "../configs";

export default function Bar(props: {
  name: string;
  start: string;
  end: string;
}) {
  return (
    <div className="relative m-5">
      <div
        className={`[font-family:'${FONT_FAMILY}'] text-[${FONT_COLOR}]' font-bold`}
      >
        {props.name}
      </div>
      <div
        className={`[font-family:'${FONT_FAMILY}'] text-[${FONT_COLOR}]' text-[13px]`}
      >
        {props.start} ~ {props.end}
      </div>
    </div>
  );
}
