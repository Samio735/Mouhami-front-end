import { getAvocats } from "@/functions";
import Hero from "../components/Hero";

export default async function page() {
  const avocats = await getAvocats();
  return (
    <div className=" bg-purple-50 ">
      <Hero avocats={avocats}></Hero>
    </div>
  );
}
