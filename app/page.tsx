import nextConfig from "@/next.config";
import ImagesContainer from "./components/images-container";
import NavigationBar from "./components/navigation-bar";
import TitleBar from "./components/title-bar";

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
              { src: toImagePath("/next.svg"), type: "koten" },
              { src: toImagePath("/vercel.svg"), type: "single-work" },
              { src: toImagePath("/next.svg"), type: "koten" },
              { src: toImagePath("/vercel.svg"), type: "single-work" },
              { src: toImagePath("/next.svg"), type: "koten" },
              { src: toImagePath("/vercel.svg"), type: "single-work" },
              { src: toImagePath("/next.svg"), type: "koten" },
              { src: toImagePath("/vercel.svg"), type: "single-work" },
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

function toImagePath(path: string): string {
  return `${nextConfig.basePath || ""}/${path}`;
}
