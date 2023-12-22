import ProfileCard from "./ProfileCard";
import Search from "./Search";
import SearchCard from "./SearchCard";

export default function Hero() {
  const data = ["", "", "", "", "", "", "", "", ""];
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
      {/* <div className="relative w-[100vw]">
        <div className="absolute left-0 top-0 w-64 h-full bg-gradient-to-r from-white from-20% to-transparent to-120% z-10 flex items-center justify-center">
          <svg
            className="me-[60%]"
            width="32"
            height="58"
            viewBox="0 0 32 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.5 2L3.5 29L30.5 56"
              stroke="#423D3D"
              stroke-width="4"
            />
          </svg>
        </div>
        <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-white from-20% to-transparent to-120% z-10 flex items-center justify-center">
          <svg
            className="ms-[60%]"
            width="32"
            height="58"
            viewBox="0 0 32 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.5 2L28.5 29L1.5 56" stroke="#423D3D" stroke-width="4" />
          </svg>
        </div>
        <div className=" flex my-16 w-fit gap-16 shrink-0">
          {data.map((item, index) => (
            <ProfileCard key={index} />
          ))}
        </div>
      </div> */}
      <div className="flex flex-col items-center py-12 gap-8 w-full">
        {data.map((item, index) => (
          <SearchCard key={index} />
        ))}
      </div>
    </div>
  );
}
