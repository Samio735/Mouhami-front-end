import { getAvocats, searchAvocats } from "@/functions";
import Hero from "../components/Hero";

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const avocats = await searchAvocats(
    searchParams["wilaya"]?.toString(),
    searchParams["speciality"]?.toString(),
    searchParams["language"]?.toString(),
    searchParams["rating"]?.toString(),
    searchParams["name"]?.toString()
  );

  return (
    <div className=" bg-purple-50 ">
      <Hero avocats={avocats}></Hero>
    </div>
  );
}
