import { getAvocats } from "@/functions";
import Hero from "../components/Hero";

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const avocats = await getAvocats();

  return (
    <div className=" bg-purple-50 ">
      <Hero avocats={avocats}></Hero>
    </div>
  );
}
