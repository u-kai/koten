import SingleWork from "../components/home/single-work";

interface ImageProps {
  src: string;
}
export default function KotenImages(props: { images: ImageProps[] }) {
  return (
    <div className="grid gap-4 grid-cols-2">
      {props.images.map((image, i) => (
        <SingleWork key={image.src + i} src={image.src} />
      ))}
    </div>
  );
}
