import Link from "next/link";

interface CardProps {
  blockid: string;
  block: number;
  transactions: number;
  clauses: number;
}

const Card = ({ blockid, block, transactions, clauses }: CardProps) => {
  return (
    <Link
      href="#"
      key=""
      className="flex flex-grow w-1/3 h-fit text-sm bg-slate-800 text-white p-2 rounded-xl shadow-lg border-b border-lime-400 hover:bg-slate-700 transition-all cursor-pointer"
    >
      <aside className="grid grid-cols-2 gap-y-2">
        <h3 className="bg-slate-600 pl-2 rounded-l-full">Block:</h3>
        <p className="bg-slate-600 pr-2 rounded-r-full">{block}</p>
        <h3 className="bg-slate-600 pl-2 rounded-l-full">TXs:</h3>
        <p className="bg-slate-600 pr-2 rounded-r-full">{transactions}</p>
        <h3 className="bg-slate-600 pl-2 rounded-l-full">Clauses:</h3>
        <p className="bg-slate-600 pr-2 rounded-r-full">{clauses}</p>
      </aside>
    </Link>
  );
};

export default Card;
