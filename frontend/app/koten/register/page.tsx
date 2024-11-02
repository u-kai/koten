"use client";
import KotenInput from "@/app/components/koten/input";
import Toggle from "@/app/components/koten/toggle";
import nextConfig from "@/next.config";
import { useState } from "react";

export default function RegisterKoten() {
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [url, setUrl] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  return (
    <div className="w-full flex justify-center relative">
      <div className="absolute left-3 text-[40px]">
        <a href={`${nextConfig.basePath}/koten/list`}>×</a>
      </div>
      <div className="absolute top-4 text-[14px]">個展を登録</div>
      <div className="w-[90%] absolute top-20">
        <KotenInput
          label={"個展の名前"}
          placeholder="xxx"
          value={name}
          onChange={(value) => setName(value)}
        />
      </div>
      <div className="w-[90%] absolute top-40">
        <KotenInput
          label={"開始時刻"}
          placeholder="11/13"
          value={start}
          onChange={(value) => setStart(value)}
        />
      </div>
      <div className="w-[90%] absolute top-60">
        <KotenInput
          label={"終了時刻"}
          placeholder="11/13"
          value={end}
          onChange={(value) => setEnd(value)}
        />
      </div>
      <div className="w-[90%] absolute top-80">
        <KotenInput
          label={"URL"}
          placeholder="https://xxx.com"
          value={url}
          onChange={(value) => setUrl(value)}
        />
      </div>
      <div className="absolute top-[400px] flex items-center gap-x-2 w-[90%] justify-between">
        <span className="text-[14px]">複数人の投稿を許可する</span>
        <Toggle value={isPublic} onChange={(v) => setIsPublic(v)} />
      </div>
    </div>
  );
}
