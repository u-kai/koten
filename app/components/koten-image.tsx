import Image from "next/image";

const KOTEN_IMAGE_WIDTH = 172;
const KOTEN_IMAGE_HEIGHT = 164;

export default function KotenImage(props: { src: string }) {
  return (
    <div
      className="bg-white rounded-lg flex justify-center items-center"
      style={{ width: KOTEN_IMAGE_WIDTH, height: KOTEN_IMAGE_HEIGHT }}
    >
      <Image
        src={props.src}
        alt="img"
        width={KOTEN_IMAGE_WIDTH}
        height={KOTEN_IMAGE_HEIGHT}
      />
    </div>
  );
}
