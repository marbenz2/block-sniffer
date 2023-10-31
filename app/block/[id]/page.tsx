interface Props {
  key: string;
  block: number;
}

export default function Block({ key, block }: Props) {
  return (
    <div key={key}>
      <h1>Block: {block}</h1>
    </div>
  );
}
