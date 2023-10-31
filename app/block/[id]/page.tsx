interface BlockProps {
  block: number;
}

export default function Block({ block }: BlockProps) {
  return <div>{block}</div>;
}
