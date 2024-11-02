export default function TitleBar() {
  return (
    <div className="text-center w-full h-12 px-4 bg-background">
      <TitleText text="koten" />
    </div>
  );
}

function TitleText(props: { text: string }) {
  return (
    <div className="flex justify-center items-center h-full">
      {props.text.split("").map((char, index) => (
        <TitleChar key={index} char={char} />
      ))}
    </div>
  );
}

function TitleChar(props: { char: string }) {
  return <span className="text-foreground text-2xl mx-1">{props.char}</span>;
}
