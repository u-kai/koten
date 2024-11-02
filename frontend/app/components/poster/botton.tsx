import nextConfig from "@/next.config";
import LongButton from "../long-button";

export default function KotenDetailButton() {
  return <LongButton display="個展を見る" href={`${nextConfig.basePath}/`} />;
}
