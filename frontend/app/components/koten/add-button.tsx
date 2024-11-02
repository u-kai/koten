import nextConfig from "@/next.config";
import Image from "next/image";
export default function AddButton() {
  return (
    <a href={`${nextConfig.basePath}/koten/register`}>
      <Image
        src={`${nextConfig.basePath}/add.svg`}
        width={40}
        height={40}
        alt="logo"
      />
    </a>
  );
}
