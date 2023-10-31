interface BlockProps {
  key: number;
}

export default function Block({ key }: BlockProps) {
  return <div>{key}</div>;
}
