import { toImagePath } from "../common";
import NavigationBar from "../components/navigation-bar";
import Bar from "../components/poster/bar";
import KotenDetailButton from "../components/poster/botton";
import KotenImages from "../components/poster/koten-images";
import KotenPoster from "../components/poster/koten-poster";

export default function Poster() {
  return (
    <div className="h-full">
      <Bar name="Christo and Jeanne-Claude" start="11/22" end="11/30" />
      <div className="h-[500px] overflow-y-scroll relative flex justify-center pb-2">
        <KotenPoster src="vercel.svg" height="100%" />
        <div className="absolute bottom-10">
          <KotenDetailButton />
        </div>
      </div>
      <div className="flex justify-center">
        <KotenImages
          images={[
            { src: toImagePath("next.svg") },
            { src: toImagePath("next.svg") },
            { src: toImagePath("next.svg") },
            { src: toImagePath("next.svg") },
            { src: toImagePath("next.svg") },
            { src: toImagePath("next.svg") },
          ]}
        />
      </div>
      <div className="fixed bottom-0 w-full">
        <NavigationBar />
      </div>
    </div>
  );
}
