import NavigationBar from "../components/navigation-bar";
import Bar from "./bar";
import KotenDetailButton from "./botton";
import KotenImage from "./koten-image";

export default function Poster() {
  return (
    <div>
      <Bar name="Christo and Jeanne-Claude" start="11/22" end="11/30" />
      <div className="h-full overflow-hidden relative flex justify-center">
        <KotenImage src="window.svg" height="100%" />
        <div className="absolute bottom-10">
          <KotenDetailButton />
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <NavigationBar />
      </div>
    </div>
  );
}
