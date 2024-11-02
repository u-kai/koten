import Image from "next/image";
import ParticipateButton from "./participate-button";

export default function KotenSummaryCard(props: {
  src: string;
  name: string;
  start: string;
  end: string;
  owner: string;
}) {
  return (
    <div className="bg-white h-[100px] rounded-lg relative overflow-hidden">
      <div className="absolute left-0 h-[100px] flex items-center bg-gray-200">
        <Image src={props.src} alt="img" width={100} height={100} />
      </div>
      <div className="p-2 absolute top-[5px] left-[120px] font-bold text-2xl">
        {props.name}
      </div>
      <div className="p-2 absolute top-[50px] left-[120px] text-[10px]">
        {props.start} ~ {props.end}
      </div>
      <div className="p-2 absolute top-[70px] left-[120px] text-[13px]">
        開催者: {props.owner}
      </div>
      <div className="absolute right-[10px] h-[100px] flex items-center">
        <ParticipateButton href="/" />
      </div>
    </div>
  );
}
