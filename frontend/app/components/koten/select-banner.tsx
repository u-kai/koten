import nextConfig from "@/next.config";
import Image from "next/image";

export default function SelectBanner(props: {
  preview: string | ArrayBuffer | null;
  setPreview: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>;
}) {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        props.setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="h-full">
      <span className="text-[14px]">バナーを選択:</span>
      <div className="w-full h-full bg-[#D9D9D9] rounded-lg flex justify-center relative">
        {props.preview ? (
          <Image
            src={props.preview as string}
            layout="fill"
            objectFit="contain"
            alt="img"
          />
        ) : (
          <Image
            width={80}
            height={80}
            src={`${nextConfig.basePath}/camera.svg`}
            alt="img"
          />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
}
