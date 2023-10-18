interface Props {
  key: string;
  block: number;
}

const page = ({ key, block }: Props) => {
  return (
    <>
      <h1>Block</h1>
      <h1>{key}</h1>
      <h1>{block}</h1>
    </>
  );
};

export default page;
