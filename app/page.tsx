import Blocks from "@/components/Blocks";
import Information from "@/components/Information";
import Marketdata from "@/components/Marketdata";

export default function Home() {
  return (
    <main className="">
      <section className="flex flex-col gap-4 py-2 px-2">
        <section className="flex w-full flex-row max-2xl:flex-col gap-4">
          <Blocks />
          <Marketdata />
        </section>
        <Information />
      </section>
    </main>
  );
}
