import nextConfig from "@/next.config";
import LongButton from "../components/long-button";
import NavigationBar from "../components/navigation-bar";
import TitleBar from "../components/title-bar";

export default function Register() {
  return (
    <div className="h-full">
      <div className="relative flex justify-center">
        <div className="absolute top-[300px]">
          <TitleBar />
        </div>
        <div className="absolute top-[700px]">
          <LongButton
            display="個展に参加する"
            href={`${nextConfig.basePath}/koten/list`}
          />
        </div>
        <div className="absolute top-[740px]">
          <LongButton display="作品をUPする" href={`${nextConfig.basePath}/`} />
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <NavigationBar />
      </div>
    </div>
  );
}
