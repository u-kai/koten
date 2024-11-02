import NavigationBar from "./components/navigation-bar";
import TitleBar from "./components/title-bar";

export default function Home() {
  return (
    <div>
      <div className="fixed top-10 w-full">
        <TitleBar />
      </div>
      <div className="fixed bottom-0 w-full">
        <NavigationBar />
      </div>
    </div>
  );
}
