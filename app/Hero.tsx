import Search from "./Search";

export default function Hero() {
  return (
    <div className="bg-sec1 flex flex-col items-center text-white py-8">
      <h1 className="text-6xl text-center my-4">Search The best Avocats</h1>
      <h2 className="text-center text-xl mb-4">
        Use the filters to find the avocats that suits you !
      </h2>
      <Search />
    </div>
  );
}
