import LongButton from "@/app/components/long-button";
import NavigationBar from "@/app/components/navigation-bar";
import nextConfig from "@/next.config";

export default function RegisterComplete() {
  return (
    <div className="relative w-full flex justify-center">
      <div className="absolute top-[200px]">アップロードしました！</div>

      <div className="absolute top-[500px]">
        <LongButton display="ホームに戻る" href={`${nextConfig.basePath}/`} />
      </div>
      <div className="fixed bottom-0 w-full">
        <NavigationBar />
      </div>
    </div>
  );
}
