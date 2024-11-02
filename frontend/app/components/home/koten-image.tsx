"use client";
import Image from "next/image";
import { toImagePath } from "../../common";
import {
  HEART_ICON_HEIGHT,
  HEART_ICON_WIDTH,
  KOTEN_IMAGE_HEIGHT,
  KOTEN_IMAGE_WIDTH,
} from "../../configs";
import { useState } from "react";

export default function KotenImage(props: { src: string }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative bg-white rounded-lg flex justify-center items-center inline-block overflow-x-hidden"
      style={{ width: KOTEN_IMAGE_WIDTH, height: KOTEN_IMAGE_HEIGHT }}
      onClick={() => setHover(!hover)}
    >
      <div className="absolute top-1 right-2">
        <Image
          src={toImagePath("heart.svg")}
          alt="logo"
          width={HEART_ICON_WIDTH}
          height={HEART_ICON_HEIGHT}
        />
      </div>
      <Image
        src={props.src}
        alt="img"
        width={KOTEN_IMAGE_WIDTH}
        height={KOTEN_IMAGE_HEIGHT}
      />
      <div
        className={`absolute bottom-0 pb-2 w-[100%] right-0
        transition-transform duration-300 ${
          hover ? "translate-x-0" : "translate-x-full"
        } overflow-hidden`}
      >
        <HoverOverView name={"next.js"} start={"11/13"} end="11/25" />
      </div>
    </div>
  );
}

function HoverOverView(props: { name: string; start: string; end: string }) {
  return (
    <div
      className="bg-[#7F7F7F] p-2 rounded-sm
    "
    >
      <div className="text-white">{props.name}</div>
      <div className="text-white text-[10px]">
        {props.start} ~ {props.end}
      </div>
    </div>
  );
}
