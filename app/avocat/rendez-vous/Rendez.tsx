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

export default function Rendez() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const days = [
    "Dimanche",
    "Lundi",
    " Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
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

            {days.map((d) => (
              <div className="">
                <p className="text-sec1 h-8">{d}</p>
                {horraires.map((h) => (
                  <Button
                    onPress={onOpen}
                    className="h-14 bg-primary1 mb-1 me-2 hover:bg-sec1 w-full active:bg-primary2 "
                  ></Button>
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
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Etes-vous sure ?
                    </ModalHeader>
                    <ModalBody>
                      <p>
                        Do you confirm booking a meeting on frinday 24 of
                        december at 8:00 ?
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Annuler
                      </Button>
                      <Button
                        color="primary"
                        className="text-white"
                        onPress={onClose}
                      >
                        Confirmer
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
