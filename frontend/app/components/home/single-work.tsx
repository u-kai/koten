import Image from "next/image";
import { toImagePath } from "../../common";
import {
  HEART_ICON_HEIGHT,
  HEART_ICON_WIDTH,
  SINGLE_WORK_IMAGE_HEIGHT,
  SINGLE_WORK_IMAGE_WIDTH,
} from "../../configs";

export default function SingleWork(props: { src: string }) {
  return (
    <div
      className="relative bg-black rounded-lg flex justify-center items-center inline-block"
      style={{
        width: SINGLE_WORK_IMAGE_WIDTH,
        height: SINGLE_WORK_IMAGE_HEIGHT,
      }}
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
        width={SINGLE_WORK_IMAGE_WIDTH}
        height={SINGLE_WORK_IMAGE_HEIGHT}
      />
    </div>
  );
}
