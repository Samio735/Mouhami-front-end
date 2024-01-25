import { getBookings } from "@/functions";
import Rendez from "./Rendez";

export default async function page({ params }: { params: { id: string } }) {
  const bookings = await getBookings(params.id);
  return <Rendez bookings={bookings} lawyer_id={params.id} />;
}
