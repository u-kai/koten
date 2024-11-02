import KotenImage from "../components/home/koten-image";

interface ImageProps {
  src: string;
}
export default function KotenImages(props: { images: ImageProps[] }) {
  return (
    <div className="grid gap-4 grid-cols-2">
      {props.images.map((image, i) => (
        <KotenImage key={image.src + i} src={image.src} />
      ))}
    </div>
  );
}
