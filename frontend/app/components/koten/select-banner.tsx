import nextConfig from "@/next.config";
import Image from "next/image";
export default function SelectBanner() {
  return (
    <div className="h-full">
      <span className="text-[14px]">バナーを選択:</span>
      <div className="w-full h-full bg-[#D9D9D9] rounded-lg flex justify-center">
        <Image
          width={80}
          height={80}
          src={`${nextConfig.basePath}/camera.svg`}
          alt="img"
        />
      </div>
    </div>
  );
}
