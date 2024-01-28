import { getAvocats, searchAvocats } from "@/functions";
import Hero from "../components/Hero";

export default async function page({
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
  return (
    <div className=" bg-purple-50 ">
      <Hero searchParams={searchParams}></Hero>
    </div>
  );
}
