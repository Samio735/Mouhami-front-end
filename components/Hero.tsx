"use client";
import { Pagination } from "@nextui-org/react";
import Search from "./Search";
import SearchCard from "./SearchCard";
import { Lawyer } from "@/types";
import { useState } from "react";

export default function Hero({ avocats }: { avocats: Lawyer[] }) {
  const [currAvocats, setCurrAvocats] = useState<Lawyer[]>(
    avocats.slice(0, 10)
  );
  return (
    <div className="flex  w-full flex-col items-center">
      <div className="bg-sec1 w-full flex flex-col items-center text-white py-8">
        <h1 className="text-6xl text-center my-4 font-semibold">
          Search The best Avocats
        </h1>
        <h2 className="text-center text-xl mb-4">
          Use the filters to find the avocats that suits you !
        </h2>
        <Search />
      </div>

      <div className="flex flex-col items-center py-12 gap-8 w-full">
        {currAvocats.map((avocat, index) => (
          <SearchCard avocat={avocat} key={index} />
        ))}
        <Pagination
          total={10}
          initialPage={1}
          onChange={(page) => {
            setCurrAvocats(avocats.slice((page - 1) * 10, page * 10));
          }}
        />
      </div>
    </div>
  );
}
