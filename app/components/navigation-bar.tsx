import Image from "next/image";
import { toImagePath } from "../common";
import {
  FONT_COLOR,
  FONT_FAMILY,
  NAVBAR_ICON_HEIGHT,
  NAVBAR_ICON_WIDTH,
} from "../configs";

export default function NavigationBar() {
  return (
    <div className="bg-[#f4f4f4] h-15 flex justify-around p-1">
      <NavBarContent
        src="navbar/home.svg"
        name="ホーム"
        width={NAVBAR_ICON_WIDTH}
        height={NAVBAR_ICON_HEIGHT}
        href="#"
      />
      <NavBarContent
        src="navbar/timeline.svg"
        name="タイムライン"
        width={NAVBAR_ICON_WIDTH}
        height={NAVBAR_ICON_HEIGHT}
        href="#"
      />
      <NavBarContent
        src="navbar/add.svg"
        name="作品を追加"
        width={NAVBAR_ICON_WIDTH}
        height={NAVBAR_ICON_HEIGHT}
        href="#"
      />
      <NavBarContent
        src="navbar/chat.svg"
        width={NAVBAR_ICON_WIDTH}
        height={NAVBAR_ICON_HEIGHT}
        name="チャット"
        href="#"
      />
      <NavBarContent
        src="navbar/mypage.svg"
        width={NAVBAR_ICON_WIDTH}
        height={NAVBAR_ICON_HEIGHT}
        name="マイページ"
        href="#"
      />
    </div>
  );
}

function NavBarContent(props: {
  name: string;
  src: string;
  width: number;
  height: number;
  href: string;
}) {
  return (
    <a href={props.href} className="flex flex-col items-center text-center">
      <Image
        src={toImagePath(props.src)}
        alt="logo"
        width={props.width}
        height={props.height}
        className="m-2"
      />
      <NavBarName value={props.name} />
    </a>
  );
}

function NavBarName(props: { value: string }) {
  return (
    <span
      className={`text-[8px] [font-family:'${FONT_FAMILY}'] text-[${FONT_COLOR}] `}
    >
      {props.value}
    </span>
  );
}
