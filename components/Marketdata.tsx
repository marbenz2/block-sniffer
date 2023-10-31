"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import Area from "@/components/Area";

const Marketdata = () => {
  const [marketdata, setMarketdata] = useState<any>({});
  const [serverStatus, setServerStatus] = useState<any>({});

  const updateMarket = async () => {
    try {
      const response = await axios.get("https://api.coingecko.com/api/v3/ping");
      setServerStatus(response);
    } catch (error) {
      setServerStatus(error as any);
      console.log(error);
    }
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=vechain%2Cvethor-token&vs_currencies=usd%2Cusd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&precision=5"
      );
      setMarketdata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateMarket();
  }, []);

  return (
    <Area>
      <section className="flex flex-row gap-2 w-full justify-center max-md:flex-col">
        <aside className="flex flex-col gap-2 justify-between flex-grow text-sm bg-slate-800 text-white p-2 rounded-xl shadow-lg border-b border-lime-400">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">API Status: </h2>
            <p>
              {serverStatus.status === 200 ? (
                <span className="text-green-400 bg-slate-600 px-2 rounded-full">
                  {serverStatus.status} - {serverStatus.data.gecko_says}
                </span>
              ) : (
                <span className="text-red-400">{serverStatus.status} - {serverStatus.data}</span>
              )}
            </p>
          </div>
          <button
            className="bg-slate-900 text-white py-2 px-8 rounded-xl shadow-lg border-b border-lime-400  hover:bg-slate-600 transform transition-all"
            onClick={updateMarket}
          >
            Update
          </button>
        </aside>
        <aside className="grid grid-cols-2 h-fit gap-y-2 w-1/3 max-md:w-full text-sm bg-slate-800 text-white p-2 rounded-xl shadow-lg border-b border-lime-400">
          <h2 className="col-span-2 text-xl font-bold">VET</h2>
          {marketdata.vechain === undefined ? (
            <>
              <p className="text-red-400">CURRENTLY NO MARKET DATA AVAILABLE</p>
            </>
          ) : (
            <>
              <h3 className="bg-slate-600 pl-2 rounded-l-full">Price:</h3>
              <p className="bg-slate-600 pr-2 rounded-r-full">
                ${marketdata.vechain.usd}
              </p>
              <h3 className="bg-slate-600 pl-2 rounded-l-full">MCap:</h3>
              <p className="bg-slate-600 pr-2 rounded-r-full">
                $
                {marketdata.vechain.usd_market_cap.toLocaleString("en", {
                  maximumFractionDigits: 0,
                })}
              </p>

              <h3 className="bg-slate-600 pl-2 rounded-l-full">24h Vol.:</h3>
              <p className="bg-slate-600 pr-2 rounded-r-full">
                $
                {marketdata.vechain.usd_24h_vol.toLocaleString("en", {
                  maximumFractionDigits: 0,
                })}
              </p>
              {marketdata.vechain.usd_24h_change > 0 ? (
                <>
                  <h3 className="bg-slate-600 pl-2 rounded-l-full">
                    24h Change:
                  </h3>
                  <p className="text-green-400 bg-slate-600 pr-2 rounded-r-full">
                    {marketdata.vechain.usd_24h_change.toFixed(1)}%
                  </p>
                </>
              ) : (
                <>
                  <h3 className="bg-slate-600 pl-2 rounded-l-full">
                    24h Change:
                  </h3>
                  <p className="text-red-400 bg-slate-600 pr-2 rounded-r-full">
                    {" "}
                    {marketdata.vechain.usd_24h_change.toFixed(1)}%
                  </p>
                </>
              )}
            </>
          )}
        </aside>
        <aside className="grid grid-cols-2 h-fit gap-y-2 w-1/3 max-md:w-full text-sm bg-slate-800 text-white p-4 rounded-xl shadow-lg border-b border-lime-400">
          <h2 className="col-span-2 text-xl font-bold">VTHO</h2>
          {marketdata.vechain === undefined ? (
            <>
              <p className="text-red-400 h-fit">
                CURRENTLY NO MARKET DATA AVAILABLE
              </p>
            </>
          ) : (
            <>
              <h3 className="bg-slate-600 pl-2 rounded-l-full">Price:</h3>
              <p className="bg-slate-600 pr-2 rounded-r-full">
                ${marketdata.vechain.usd}
              </p>
              <h3 className="bg-slate-600 pl-2 rounded-l-full">MCap:</h3>
              <p className="bg-slate-600 pr-2 rounded-r-full">
                $
                {marketdata.vechain.usd_market_cap.toLocaleString("en", {
                  maximumFractionDigits: 0,
                })}
              </p>

              <h3 className="bg-slate-600 pl-2 rounded-l-full">24h Vol.:</h3>
              <p className="bg-slate-600 pr-2 rounded-r-full">
                $
                {marketdata.vechain.usd_24h_vol.toLocaleString("en", {
                  maximumFractionDigits: 0,
                })}
              </p>
              {marketdata.vechain.usd_24h_change > 0 ? (
                <>
                  <h3 className="bg-slate-600 pl-2 rounded-l-full">
                    24h Change:
                  </h3>
                  <p className="text-green-400 bg-slate-600 pr-2 rounded-r-full">
                    {marketdata.vechain.usd_24h_change.toFixed(1)}%
                  </p>
                </>
              ) : (
                <>
                  <h3 className="bg-slate-600 pl-2 rounded-l-full">
                    24h Change:
                  </h3>
                  <p className="text-red-400 bg-slate-600 pr-2 rounded-r-full">
                    {" "}
                    {marketdata.vechain.usd_24h_change.toFixed(1)}%
                  </p>
                </>
              )}
            </>
          )}
        </aside>
      </section>
    </Area>
  );
};

export default Marketdata;
