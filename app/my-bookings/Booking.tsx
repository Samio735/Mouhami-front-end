import { AccountType, Booking } from "@/types";
import { Avatar, Button, Textarea } from "@nextui-org/react";
import { Rating, Star } from "@smastrom/react-rating";
import { useState } from "react";

export default function Booking({
  booking,
  accountType,
}: {
  booking: Booking;
  accountType: AccountType;
}) {
  const [rating, setRating] = useState(booking.rating || 0);
  const [comment, setComment] = useState(booking.comment || "");
  const [isLocked, setisLocked] = useState(false);
  const handleRating = (rate: number) => {
    setRating(rate);
  };
  return (
    <div className="flex  p-6 justify-between shadow-sm ">
      <div className="flex flex-col ">
        <p className="mb-2  font-medium text-gray-400">
          {booking.date} At {booking.time}
        </p>

        <h2 className="text-sec1 text-lg mb-2 font-semibold">
          {booking.title}
          <span className="font-normal text-medium text-black ms-2">
            {booking.speciality}
          </span>
        </h2>
        <div className="flex mt-1 gap-10">
          <div className="flex gap-2 items-center font-semibold">
            <Avatar
              src="https://i.pravvatar.cc/150?u=a04258114e29026302dkkkkkkkkkkkkkkkkkk"
              size="sm"
              showFallback
              classNames={{ icon: "text-black" }}
            />
            {booking.name}{" "}
          </div>
          <div className="flex gap-2 items-center font-normal ">
            <svg
              className="w-5 h-5 text-black dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>{" "}
            {booking.email}{" "}
          </div>
          <div className="flex gap-2 items-center font-normal">
            <svg
              className="w-5 h-5 text-black dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 19 18"
            >
              <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
            </svg>
            {booking.phone}
          </div>
        </div>
      </div>
      {accountType === "client" && (
        <div
          className={`flex flex-col   bg-white ${
            isLocked && "pointer-events-none opacity-50"
          } `}
        >
          <div className="mb-2 flex gap-2 justify-center font-normal">
            <p className="  font-medium ">Votre avis sur l'avocat</p>
            <Rating
              itemStyles={{
                itemStrokeWidth: 0,
                itemShapes: Star,
                activeFillColor: "#61BF7B",
                inactiveFillColor: "#E9E9E9",
              }}
              style={{ maxWidth: 100 }}
              value={rating}
              onChange={handleRating}
            />
          </div>
          <Textarea
            label="Commentaire"
            placeholder="Laissez un commentaire ..."
            className="max-w-xs"
          />
          {!isLocked && (
            <Button
              className="bg-primary1 text-white mt-2"
              onClick={() => setisLocked(true)}
              value={booking.comment}
            >
              Envoyer
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
