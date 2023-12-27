import { redirect } from "next/navigation";
export default function page() {
  redirect("/avocat");
  return <div>page</div>;
}
