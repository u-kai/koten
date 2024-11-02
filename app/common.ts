import nextConfig from "@/next.config";

export function toImagePath(path: string): string {
  return `${nextConfig.basePath || ""}/${path}`;
}
