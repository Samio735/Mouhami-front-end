"use client";
import { Pagination } from "@nextui-org/react";
import Search from "./Search";
import SearchCard from "./SearchCard";
import { Lawyer } from "@/types";
import { useEffect, useState } from "react";
import { searchAvocats } from "@/functions";

export default function Hero({
  searchParams,
}: {
  searchParams?: {
    wilaya?: string;
    speciality?: string;
    language?: string;
    rating?: string;
    name?: string;
  };
}) {
  let avocats: Lawyer[] = [];
  const [currAvocats, setCurrAvocats] = useState<Lawyer[]>([]);
  const [numPages, setNumPages] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    searchAvocats(
      searchParams?.wilaya,
      searchParams?.speciality,
      searchParams?.language,
      searchParams?.rating,
      searchParams?.name
    ).then((res) => {
      avocats = res;
      setCurrAvocats(avocats.slice(0, 10));
      setNumPages(Math.ceil(avocats.length / 10));
      setIsLoading(false);
    });
  }, [searchParams]);

  return (
    <div className="flex  w-full flex-col items-center">
      <div className="bg-sec1 w-full flex flex-col items-center text-white py-8">
        <h1 className="text-6xl text-center my-4 font-semibold">
          Trouver les meilleurs Avocats{" "}
        </h1>
        <h2 className="text-center text-xl mb-4">
          Utilisez les filtres pour trouver l'avocat qui vous convient !
        </h2>
        <Search />
      </div>

      <div className="flex flex-col items-center pt-12  pb-[50vh] gap-8 w-full">
        {isLoading && (
          <div className="flex justify-center items-center">
            <p className="text-2xl">chargement ...</p>
          </div>
        )}
        {currAvocats.map((avocat, index) => (
          <SearchCard avocat={avocat} key={index} />
        ))}
        <Pagination
          total={numPages}
          initialPage={1}
          onChange={(page) => {
            setCurrAvocats(avocats.slice((page - 1) * 10, page * 10));
          }}
        />
      </div>
    </div>
  );
}
