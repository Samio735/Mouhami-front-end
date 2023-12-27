import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

export default function RendezChoice({ date }: { date: Date }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        className="h-14 bg-primary1 mb-1 me-2 hover:bg-sec1 w-full active:bg-primary2"
      ></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Etes-vous sure ?
              </ModalHeader>
              <ModalBody>
                <p>Do you confirm booking a meeting on {date.toString()}?</p>
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
    </>
  );
}
