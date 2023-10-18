"use client";

import Connex from "@vechain/connex";
import { useEffect, useState } from "react";
import { Block } from "@/types/types";
import axios from "axios";
import Card from "@/components/Card";
import Area from "@/components/Area";

const connex = new Connex({
  node: "https://node.vechain.energy/", // veblocks public node, use your own if needed
  network: "main", // defaults to mainnet, so it can be omitted here
});

const Blocks = () => {
  const [block, setBlock] = useState<Block[]>([]);
  const [clauses, setClauses] = useState<number[]>([]);

/*   useEffect(() => {
    const fetchBlocks = async () => {
      try {
        const resBlock = await axios.get(
          "https://node.vechain.energy/blocks/best"
        );
        const latestBlockNumber = resBlock.data.number;
        const blocks = Array.from(
          { length: 6 },
          (_, i) => latestBlockNumber - i
        );

        const fetchBlockData = async (blockId: number) => {
          const blockUrl = `https://node.vechain.energy/blocks/${blockId}`;
          const resPreBlock = await axios.get(blockUrl);
          const preBlock = resPreBlock.data;
          setBlock((blocks) => [...blocks, preBlock]);
          const transactions = preBlock.transactions;
          let clausesAmount = 0;
          for (const transactionId of transactions) {
            const transactionUrl = `https://node.vechain.energy/transactions/${transactionId}`;
            const resTx = await axios.get(transactionUrl);
            const transaction = resTx.data;
            clausesAmount += transaction.clauses.length;
          }
          setClauses((clauses) => [...clauses, clausesAmount]);
        };

        for (const blockId of blocks) {
          await fetchBlockData(blockId);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlocks();
  }, []); */

  useEffect(() => {
    const fetchBlocks = async () => {
      try {
        const ticker = connex.thor.ticker();
        const head = await ticker.next();
        if (block.length >= 6) {
          const updatedBlock = [...block];
          block.pop();
          const lastBlockNumber =
            updatedBlock[updatedBlock.length - 1]?.number || 0;
          if (head.number !== lastBlockNumber) {
            const blockUrl = `https://node.vechain.energy/blocks/${head.number}`;
            const resBlock = await axios.get(blockUrl);
            const fetchedBlock = resBlock.data;
            setBlock((prevBlock) => [fetchedBlock, ...prevBlock]);
            const transactions = fetchedBlock.transactions;
            let clausesAmount = 0;
            for (const transactionId of transactions) {
              const transactionUrl = `https://node.vechain.energy/transactions/${transactionId}`;
              const resTx = await axios.get(transactionUrl);
              const transaction = resTx.data;
              clausesAmount += transaction.clauses.length;
            }
            setClauses((prevClauses) => [clausesAmount, ...prevClauses]);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlocks();
  }, [block]);

  return (
    <Area>
      {block.map((block, i) => (
        //Link to block page (div key is required)
        <Card
          key={block.number}
          blockid={block.id}
          block={block.number}
          transactions={block.transactions.length}
          clauses={clauses[i]}
        />
      ))}
    </Area>
  );
};

export default Blocks;
