import { getAvocat } from "@/functions";
import Avocat from "../Avocat";

export default async function page({ params }: { params: { id: string } }) {
  const avocat = await getAvocat(params.id);
  return <Avocat avocat={avocat} />;
}
