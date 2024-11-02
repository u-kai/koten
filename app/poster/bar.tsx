export default function Bar(props: {
  name: string;
  start: string;
  end: string;
}) {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.start}</div>
      <div>{props.end}</div>
    </div>
  );
}
