import Image from "next/image";
import { toImagePath } from "../../common";
import {
  HEART_ICON_HEIGHT,
  HEART_ICON_WIDTH,
  KOTEN_IMAGE_HEIGHT,
  KOTEN_IMAGE_WIDTH,
} from "../../configs";

export default function KotenImage(props: { src: string }) {
  return (
    <div
      className="relative bg-white rounded-lg flex justify-center items-center inline-block"
      style={{ width: KOTEN_IMAGE_WIDTH, height: KOTEN_IMAGE_HEIGHT }}
    >
      <div className="absolute top-1 right-2">
        <Image
          src={toImagePath("heart.svg")}
          alt="logo"
          width={HEART_ICON_WIDTH}
          height={HEART_ICON_HEIGHT}
        />
      </div>
      <Image
        src={props.src}
        alt="img"
        width={KOTEN_IMAGE_WIDTH}
        height={KOTEN_IMAGE_HEIGHT}
      />
    </div>
  );
}
