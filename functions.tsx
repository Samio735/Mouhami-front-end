import { BACKEND_URL } from "./constants";
import { Booking, Lawyer } from "./types";

export async function getAvocats() {
  const res = await fetch(`${BACKEND_URL}/lawyers/`, {
    cache: "no-store",
  });
  const avocats: Lawyer[] = await res.json();
  return avocats;
}

export async function getAvocat(id: string) {
  const res = await fetch(`${BACKEND_URL}/lawyer-detailed/${id}`, {
    cache: "no-store",
  });
  const avocat: Lawyer = await res.json();
  return avocat;
}

export async function getBookings(id: string) {
  const res = await fetch(`${BACKEND_URL}/lawyer-booking/${id}/bookings/`, {
    cache: "no-store",
  });
  const bookings: Booking[] = await res.json();
  return bookings;
}

export async function postNewBooking(booking: Booking, id: string) {
  const res = await fetch(`${BACKEND_URL}/lawyer-booking/${id}/bookings/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(booking),
  });
  const newBooking: Booking = await res.json();
  console.log(newBooking);
  return newBooking;
}
