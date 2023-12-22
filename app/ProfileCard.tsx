import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="flex w-52 flex-col  text-left">
      <Image src={"/avatar.png"} alt="avatar" width={240} height={240}></Image>
      <div className="p-2">
        <h1 className="text-xl font-bold">John Doe</h1>
        <h2 className="text-xl">Avocat</h2>
        <h3 className="text-xl">Paris, France</h3>
      </div>
    </div>
  );
}
