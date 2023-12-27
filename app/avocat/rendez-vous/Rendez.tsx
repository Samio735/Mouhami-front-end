"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import RendezChoice from "./RendezChoice";

export default function Rendez() {
  const currentDate = new Date();
  const generateCols = (currentDate: Date) => {
    const cols = [];
    for (let i = 0; i <= 7; i++) {
      // add 24 hours to current date
      cols.push(
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() + i
        )
      );
    }
    return cols;
  };
  const cols = generateCols(currentDate);
  const horraires = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];
  return (
    <div className=" flex flex-col items-center">
      <div className="flex flex-col gap-6 w-[80vw] pt-6">
        <h1 className="text-3xl"> Prenez un Rendez-vous</h1>
        <div>
          <div className="grid grid-cols-8 gap-2">
            <div>
              <div className="h-8"> </div>
              {horraires.map((h) => (
                <p className="text-sec1 h-14 mb-1 me-2 pt-2 text-right pe-4 ">
                  {h}
                </p>
              ))}
            </div>

            {cols.map((col) => (
              <div className="">
                <p className="text-sec1 h-8">{col.toDateString()}</p>
                {horraires.map((h) => (
                  <RendezChoice
                    date={
                      new Date(
                        col.getFullYear(),
                        col.getMonth(),
                        col.getDate(),
                        parseInt(h.split(":")[0]),
                        parseInt(h.split(":")[1])
                      )
                    }
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="w-full flex gap-4 justify-end">
            <div className="flex items-center">
              <div className="w-4 h-4 me-2 bg-primary1"></div>
              <p className="text-sec1">Disponible</p>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 me-2 bg-sec1"></div>
              <p className="text-sec1">Indisponible</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
