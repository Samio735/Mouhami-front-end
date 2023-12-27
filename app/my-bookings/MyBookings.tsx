"use client";
import { Avatar } from "@nextui-org/react";

export default function MyBookings() {
  // random data
  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "j_doe@estin.dz",
      phone: "0555555555",
      date: "2021-09-01",
      time: "10:00",
      title: "Proposition de rendez-vous",
      speciality: "Droit des affaires",
    },
    {
      id: 2,
      name: "Saidi Ahmed",
      email: "Said@gmail.com",
      phone: "0555555555",
      date: "2021-09-02",
      time: "11:00",
      // propose another title
      title: "Proposition de rendez-vous",
      speciality: "Droit des affaires",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col w-[80vw]  flex-1 px-20 ">
        <h1 className="text-xl font-semibold p-4 ">Mes Rendez-vous</h1>
        <div className="flex flex-col  max-w-4xl gap-6  ">
          {data.map((item, index) => (
            <div className="flex  p-6 gap-10 shadow-sm ">
              {" "}
              <div className="flex flex-col ">
                <p className="mb-2  font-medium text-gray-400">
                  {item.date} At {item.time}
                </p>

                <h2 className="text-sec1 text-lg mb-2 font-semibold">
                  {item.title}
                  <span className="font-normal text-medium text-black ms-2">
                    {item.speciality}
                  </span>
                </h2>
                <div className="flex mt-1 gap-10">
                  <div className="flex gap-2 items-center font-semibold">
                    <Avatar
                      src="https://i.pravvatar.cc/150?u=a04258114e29026302dkkkkkkkkkkkkkkkkkk"
                      size="sm"
                      showFallback
                      classNames={{ icon: "text-black" }}
                    />
                    {item.name}{" "}
                  </div>
                  <div className="flex gap-2 items-center font-normal ">
                    <svg
                      className="w-5 h-5 text-black dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>{" "}
                    {item.email}{" "}
                  </div>
                  <div className="flex gap-2 items-center font-normal">
                    <svg
                      className="w-5 h-5 text-black dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 19 18"
                    >
                      <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                    </svg>
                    {item.phone}
                  </div>
                </div>
              </div>
              <div className="flex flex-col "></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
