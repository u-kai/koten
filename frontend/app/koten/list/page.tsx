import NavigationBar from "@/app/components/navigation-bar";
import AddButton from "@/app/components/koten/add-button";
import SearchBar from "@/app/components/koten/search-bar";
import KotenSummaryCard from "@/app/components/koten/card";
import { toImagePath } from "@/app/common";

export default function ParticipateKotenPage() {
  const props: {
    name: string;
    src: string;
    start: string;
    end: string;
    owner: string;
  }[] = [
    {
      name: "nextjs",
      src: toImagePath("next.svg"),
      start: "11/13",
      end: "11/15",
      owner: "owner",
    },
    {
      name: "vercel",
      src: toImagePath("vercel.svg"),
      start: "11/13",
      end: "11/15",
      owner: "owner",
    },
    {
      name: "nextjs",
      src: toImagePath("next.svg"),
      start: "11/13",
      end: "11/15",
      owner: "owner",
    },
    {
      name: "vercel",
      src: toImagePath("vercel.svg"),
      start: "11/13",
      end: "11/15",
      owner: "owner",
    },
    {
      name: "nextjs",
      src: toImagePath("next.svg"),
      start: "11/13",
      end: "11/15",
      owner: "owner",
    },
    {
      name: "vercel",
      src: toImagePath("vercel.svg"),
      start: "11/13",
      end: "11/15",
      owner: "owner",
    },
    {
      name: "nextjs",
      src: toImagePath("next.svg"),
      start: "11/13",
      end: "11/15",
      owner: "owner",
    },
    {
      name: "vercel",
      src: toImagePath("vercel.svg"),
      start: "11/13",
      end: "11/15",
      owner: "owner",
    },
  ];
  return (
    <div className="relative flex justify-center items-center h-full">
      <div className="absolute top-10">既存の個展一覧</div>
      <div className="absolute top-8 right-3">
        <AddButton />
      </div>
      <div className="absolute top-20 pt-5 w-[90%]">
        <SearchBar />
      </div>
      <div className="absolute top-[200px] w-[90%] h-[550px] overflow-y-scroll">
        {props.map((prop, i) => (
          <div className="p-1" key={i}>
            <KotenSummaryCard
              key={i}
              name={prop.name}
              src={prop.src}
              start={prop.start}
              end={prop.end}
              owner={prop.owner}
            />
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 w-full">
        <NavigationBar />
      </div>
    </div>
  );
}
