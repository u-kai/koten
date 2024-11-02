import KotenImage from "./koten-image";
import SingleWork from "./single-work";

interface ImageProps {
  src: string;
  type: "koten" | "single-work";
}

export default function ImagesContainer(props: { images: ImageProps[] }) {
  const column1 = props.images.filter((_, index) => index % 2 === 0);
  const column2 = props.images.filter((_, index) => index % 2 !== 0);
  return (
    <div className="flex gap-4">
      {/* 左の列 */}
      <div className="flex flex-col gap-4">
        {column1.map((image, i) =>
          image.type === "single-work" ? (
            <SingleWork key={image.src + i} src={image.src} />
          ) : (
            <KotenImage key={image.src + i} src={image.src} />
          )
        )}
      </div>

      {/* 右の列 */}
      <div className="flex flex-col gap-4">
        {column2.map((image, i) =>
          image.type === "single-work" ? (
            <SingleWork key={image.src + i} src={image.src} />
          ) : (
            <KotenImage key={image.src + i} src={image.src} />
          )
        )}
      </div>
    </div>
  );
}
