import nextConfig from "@/next.config";
import Image from "next/image";

const ICON_WIDTH = 30;
const ICON_HEIGHT = 30;

export default function NavigationBar() {
  return (
    <div className="bg-[#f4f4f4] h-15 flex justify-around p-1">
      <NavBarContent
        src="navbar/home.svg"
        name="ホーム"
        width={ICON_WIDTH}
        height={ICON_HEIGHT}
        href="#"
      />
      <NavBarContent
        src="navbar/timeline.svg"
        name="タイムライン"
        width={ICON_WIDTH}
        height={ICON_HEIGHT}
        href="#"
      />
      <NavBarContent
        src="navbar/add.svg"
        name="作品を追加"
        width={ICON_WIDTH}
        height={ICON_HEIGHT}
        href="#"
      />
      <NavBarContent
        src="navbar/chat.svg"
        width={ICON_WIDTH}
        height={ICON_HEIGHT}
        name="チャット"
        href="#"
      />
      <NavBarContent
        src="navbar/mypage.svg"
        width={ICON_WIDTH}
        height={ICON_HEIGHT}
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
        src={`${nextConfig.basePath || ""}/${props.src}`}
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
    <span className="text-[8px] [font-family:'YuGothic'] text-[#464646] ">
      {props.value}
    </span>
  );
}
