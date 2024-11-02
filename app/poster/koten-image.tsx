import { toImagePath } from "../common";
import Image from "next/image";

export default function KotenImage(props: { src: string; height: string }) {
  return (
    <div className="bg-black w-full" style={{ height: props.height }}>
      <Image src={toImagePath(props.src)} alt="image" width={-1} height={-1} />
    </div>
  );
}
