import NavigationBar from "./components/navigation-bar";
import ImagesContainer from "./components/home/images-container";
import TitleBar from "./components/title-bar";
import { toImagePath } from "./common";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="fixed top-10 w-full relative">
        <TitleBar />
        <div className="absolute right-4 top-4">
          <Image
            src={toImagePath("search.svg")}
            width={30}
            height={30}
            alt="logo"
          />
        </div>
      </div>
      <div
        className="relative mt-4 top-10 overflow-y-scroll"
        style={{ height: "calc(100vh - 10rem)" }}
      >
        <div className="absolute inset-x-0 h-hull flex justify-center">
          <ImagesContainer
            images={[
              { src: toImagePath("next.svg"), type: "koten" },
              { src: toImagePath("vercel.svg"), type: "single-work" },
              { src: toImagePath("next.svg"), type: "koten" },
              { src: toImagePath("vercel.svg"), type: "single-work" },
              { src: toImagePath("next.svg"), type: "koten" },
              { src: toImagePath("vercel.svg"), type: "single-work" },
              { src: toImagePath("next.svg"), type: "koten" },
              { src: toImagePath("vercel.svg"), type: "single-work" },
            ]}
          />
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <NavigationBar />
      </div>
    </div>
  );
}
