"use client";
import { Avatar, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import Booking from "./Booking";
import { AccountType } from "@/types";
export default function MyBookings() {
  const bookings = [
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
  const accountType: AccountType = "lawyer";
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col w-[80vw]  flex-1 px-20 ">
        <h1 className="text-xl font-semibold p-4 ">Mes Rendez-vous</h1>
        <div className="flex flex-col  max-w-4xl gap-6  ">
          {bookings.map((booking, index) => (
            <Booking booking={booking} key={index} accountType={accountType} />
          ))}
        </div>
      </main>
    </div>
  );
}
