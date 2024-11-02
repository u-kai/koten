import NavigationBar from "./components/navigation-bar";
import ImagesContainer from "./components/home/images-container";
import TitleBar from "./components/home/title-bar";
import { toImagePath } from "./common";

export default function Home() {
  return (
    <div>
      <div className="fixed top-10 w-full">
        <TitleBar />
      </div>
      <div
        className="relative m-2 top-20 overflow-y-scroll"
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
