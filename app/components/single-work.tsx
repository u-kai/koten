import Image from "next/image";

const SINGLE_WORK_IMAGE_WIDTH = 172;
const SINGLE_WORK_IMAGE_HEIGHT = 243;

export default function SingleWork(props: { src: string }) {
  return (
    <div
      className="bg-black rounded-lg flex justify-center items-center"
      style={{
        width: SINGLE_WORK_IMAGE_WIDTH,
        height: SINGLE_WORK_IMAGE_HEIGHT,
      }}
    >
      <Image
        src={props.src}
        alt="img"
        width={SINGLE_WORK_IMAGE_WIDTH}
        height={SINGLE_WORK_IMAGE_HEIGHT}
      />
    </div>
  );
}
