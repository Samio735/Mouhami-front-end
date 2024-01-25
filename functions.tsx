import { BACKEND_URL } from "./constants";
import { Lawyer } from "./types";

export async function getAvocats() {
  const res = await fetch(`${BACKEND_URL}/lawyers/`);
  const avocats: Lawyer[] = await res.json();
  return avocats;
}
