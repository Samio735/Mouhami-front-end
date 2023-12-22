"use client";
import Image from "next/image";
import Search from "../Search";
import { Button } from "@nextui-org/react";

export default function Avocat() {
  return (
    <div className=" flex flex-col items-center">
      <div className="grid grid-cols-3 gap-20 max-w-[80vw] my-16">
        <div
          className="border-4 border-primary1 w-full  text-lg"
          style={{
            backgroundImage: "url(/avatar.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold">Said Nouasria</h1>
          <div className="flex flex-col ">
            <p className="text-sec1 font-semibold">Numero De Telephone</p>
            <p> 0556 043 325</p>
          </div>
          <div className="flex flex-col ">
            <p className="text-sec1 font-semibold">Email</p>
            <p>s_nouasria@estin.dz</p>
          </div>
          <div className="flex flex-col ">
            <p className="text-sec1 font-semibold">Langue</p>
            <p>Français , Arabe , Anglais</p>
          </div>
          <div className="flex flex-col ">
            <p className="text-sec1 font-semibold">Specialités</p>
            <p>
              Lorum ipsum, Lorum ipsum, Lorum ipsum, Lorum ipsum, Lorum ipsum,
              Lorum ipsum, Lorum ipsum, Lorum ipsum, Lorum ipsum, Lorum ipsum.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Button
            variant="solid"
            color="primary"
            className="text-white font-semibold text-lg"
          >
            Prendre un Rendez-vous
          </Button>
          <div className="flex flex-col ">
            <p className="text-sec1 font-semibold">Localisation</p>
            <div
              className="border-4 border-primary1 w-full h-80"
              style={{
                backgroundImage: "url(/map.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
