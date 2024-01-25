import { postNewBooking } from "@/functions";
import { Booking } from "@/types";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { redirect, useRouter } from "next/navigation";
function formatDate(date: Date) {
  // Extract year, month, and day from the date object
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month starts from 0, so add 1 and pad with leading zero if necessary
  const day = String(date.getDate()).padStart(2, "0"); // Pad with leading zero if necessary

  // Return the formatted date string
  return `${year}-${month}-${day}`;
}
export default function RendezChoice({
  date,
  index,
  bookings,
  lawyerId,
}: {
  date: Date;
  index: number;
  bookings: Booking[];
  lawyerId: string;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  let hit = false;
  return (
    <>
      {bookings.map((b: Booking) => {
        if (b.date == formatDate(date) && Number(b.time) == index + 8) {
          hit = true;
          return (
            <Button
              className="lg:h-14 h-10 bg-primary2 mb-1 me-2 w-full "
              isDisabled
              unselectable="on"
            ></Button>
          );
        }
      })}
      {!hit && (
        <>
          <Button
            onPress={onOpen}
            className="lg:h-14 h-10 bg-primary1 mb-1 me-2 hover:bg-sec1 w-full active:bg-primary2"
          ></Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Etes-vous sure ?
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Do you confirm booking a meeting on {date.toString()}?
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Annuler
                    </Button>
                    <Button
                      color="primary"
                      className="text-white"
                      onClick={() => {
                        const newBooking: Booking = {
                          date: formatDate(date),
                          time: String(index + 8),
                          lawyer_id: lawyerId,
                          client_id: "1",
                        };
                        postNewBooking(newBooking, lawyerId).then((res) => {
                          router.push("/my-bookings");
                        });
                      }}
                    >
                      Confirmer
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
}
