import Image from "next/image";
import Link from "next/link";

export default function SearchCard() {
  return (
    <Link
      className="flex w-52  text-left min-w-[70vw] hover:shadow-lg active:shadow-inner  shadow-sm transition-all"
      href={"/avocat/id"}
    >
      <div className="w-80 h-40 overflow-hidden">
        <Image
          src={"/avatar.png"}
          alt="avatar"
          width={240}
          height={140}
        ></Image>
      </div>
      <div className="p-2 w-[80%]">
        <div className="flex  gap-8 items-center py-4">
          <h1 className="text-2xl font-semibold">Said Nouasria</h1>
          <div className="flex gap-2 items-center">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_212_1767)">
                <path
                  d="M15 7.96087C15 9.08345 14.746 10.1915 14.2571 11.202L12.5022 14.8287C11.6443 16.6017 11.2153 17.4883 10.6059 17.7261C10.2163 17.8781 9.78373 17.8781 9.39411 17.7261C8.78468 17.4883 8.35571 16.6017 7.49779 14.8287L5.74294 11.202C5.25399 10.1915 5 9.08345 5 7.96087V7.96087C5 5.22106 7.26019 3 10 3V3C12.7398 3 15 5.22106 15 7.96087V7.96087Z"
                  stroke="#203129"
                  stroke-width="1.66667"
                />
                <path
                  d="M11.6666 8.00016C11.6666 8.92064 10.9205 9.66683 9.99998 9.66683C9.07951 9.66683 8.33331 8.92064 8.33331 8.00016C8.33331 7.07969 9.07951 6.3335 9.99998 6.3335C10.9205 6.3335 11.6666 7.07969 11.6666 8.00016Z"
                  fill="#203129"
                />
              </g>
              <defs>
                <clipPath id="clip0_212_1767">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <h3 className="">Bejaia</h3>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="9"
                cy="8.5"
                r="7.5"
                stroke="#203129"
                stroke-width="1.66667"
                className="mt-4"
              />
              <path
                d="M7.94231 12.7689L8.21639 12.8944C8.57878 13.0603 8.80769 13.3995 8.80769 13.7705C8.80769 14.3115 9.65924 15.3751 10.25 15.3751C12.033 15.3751 12.707 15.309 14 14.1251C14.2295 13.9149 14.625 13.1723 14.625 12.8751C14.625 12.2561 13.4521 11.5803 12.7762 11.5803H12.7019C11.985 11.5803 11.4038 11.0481 11.4038 10.3917V9.99546C11.4038 9.12018 10.629 8.41062 9.67308 8.41062H7.07692C6.59898 8.41062 6.21154 8.05584 6.21154 7.61819C6.21154 7.18055 6.59898 6.82577 7.07692 6.82577H7.72027C8.32083 6.82577 8.80769 6.37996 8.80769 5.83003V5.70143C8.80769 5.08504 9.46717 4.64979 10.1058 4.84471C10.7444 5.03963 11.4038 4.60439 11.4038 3.988V3.74662C11.4038 3.27663 10.8976 1.97352 10.3902 1.67926C10.3031 1.62874 10.1993 1.625 10.0986 1.625L8.52637 1.62502C8.42566 1.62502 8.32534 1.61418 8.22525 1.60312C7.4233 1.5145 6.56995 1.86824 5.875 2.25006L4 3.50006C3.20239 3.93828 2.75 4.96966 2.75 5.82139C2.75 6.46449 3.02899 7.08124 3.52559 7.53597L6.58583 10.3382C6.90027 10.6261 7.07692 11.0166 7.07692 11.4238V11.4868C7.07692 12.0297 7.41194 12.5261 7.94231 12.7689Z"
                fill="#203129"
              />
            </svg>

            <h3 className="">Fr, Ar</h3>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.20695 2.62228C8.53342 1.61127 8.69666 1.10577 8.99996 1.10577C9.30326 1.10577 9.4665 1.61127 9.79297 2.62228L10.8969 6.04086C10.9868 6.3193 11.0318 6.45852 11.1414 6.53832C11.251 6.61812 11.3973 6.61812 11.6899 6.61812L14.7591 6.61812C15.8192 6.61812 16.3493 6.61812 16.4426 6.90645C16.536 7.19479 16.1065 7.50542 15.2475 8.12668L12.6158 10.0301C12.379 10.2013 12.2606 10.287 12.2185 10.4157C12.1764 10.5444 12.2214 10.6835 12.3112 10.9615L13.4254 14.4102C13.7483 15.4095 13.9097 15.9091 13.6655 16.0868C13.4212 16.2644 12.9956 15.9569 12.1444 15.3418L9.48803 13.4224C9.25251 13.2522 9.13474 13.1671 8.99996 13.1671C8.86517 13.1671 8.74741 13.2522 8.51189 13.4224L5.85551 15.3418C5.00434 15.9569 4.57875 16.2644 4.33447 16.0868C4.09019 15.9091 4.25162 15.4095 4.57448 14.4102L5.68872 10.9615C5.77856 10.6835 5.82348 10.5444 5.78138 10.4157C5.73928 10.287 5.62089 10.2013 5.38412 10.0301L2.75241 8.12668C1.89344 7.50542 1.46395 7.19479 1.55729 6.90645C1.65064 6.61812 2.18068 6.61812 3.24078 6.61812L6.31002 6.61812C6.60262 6.61812 6.74891 6.61812 6.85854 6.53832C6.96816 6.45852 7.01312 6.3193 7.10303 6.04086L8.20695 2.62228Z"
                stroke="#203129"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h3 className="">4,8/5</h3>
          </div>
        </div>
        <div className="flex gap-2">
          {" "}
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            color="primary1"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 mt-[2px]"
          >
            <path
              d="M3.74998 18.0001V9.66675M3.74998 18.0001H2.49998M3.74998 18.0001H7.91665M16.25 18.0001V9.66675M16.25 18.0001H12.0833M16.25 18.0001H17.5M12.0833 18.0001V9.66675M12.0833 18.0001H7.91665M7.91665 18.0001V9.66675M16.3984 8.22845L12.2925 4.33857C11.2069 3.31013 10.6641 2.79592 9.99998 2.79592C9.33586 2.79592 8.79307 3.31013 7.7075 4.33857L3.60151 8.22845C2.95873 8.83741 2.63733 9.14189 2.7419 9.40432C2.84648 9.66675 3.28919 9.66675 4.17463 9.66675H15.8253C16.7108 9.66675 17.1535 9.66675 17.2581 9.40432C17.3626 9.14189 17.0412 8.83741 16.3984 8.22845Z"
              stroke="#203129"
              stroke-width="1.66667"
              stroke-linecap="round"
            />
          </svg>
          <h2 className="text">
            Lorem ipsum dolor sit amet consectetur. Amet facilisis tellus id
            quam pulvinar. Arcu et et a non odio vestibulum. Mauris adipiscing
            etiam luctus felis.
          </h2>
        </div>
      </div>
    </Link>
  );
}