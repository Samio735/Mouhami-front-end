"use client";

import { Button } from "@nextui-org/react";
import Review from "./Review";
import { GoogleMap } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/withScriptjs";
import withGoogleMap from "react-google-maps/lib/withGoogleMap";
import Link from "next/link";
import { Lawyer } from "@/types";

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 36.752887, lng: 3.042048 }}
    />
  );
};
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Avocat() {
  const avocat: Lawyer = {
    id: 1,
    name: "Said Nouasria",
    email: "s_nouasria@estin.dz",
    phone: "0556 043 325",
    wilaya: "Boumerdes",
    languages: ["Français", "Arabe", "Anglais"],
    specialities: [
      "Droit Civil",
      "Droit Penal",
      "Droit Commercial",
      "Droit de Travail",
      "Droit de Famille",
    ],
    rating: 4.8,
    reviews: [
      {
        id: 1,
        reviewerId: "1",
        rating: 5,
        comment: "Very nice person",
        reviewerName: "Ahmed",
      },
      {
        id: 2,
        reviewerId: "2",
        rating: 4.5,
        comment: "Lorum ipsum, Lorum ipsum, Lorum ipsum, Lorum ipsum",
        reviewerName: "Jamal",
      },
      {
        id: 3,
        reviewerId: "3",
        rating: 4.5,
        comment: "Lorum ipsum, Lorum ipsum, Lorum ipsum, Lorum ipsum",
        reviewerName: "Ahmed",
      },
      {
        id: 4,
        reviewerId: "4",
        rating: 4.5,
        comment: "Lorum ipsum, Lorum ipsum, Lorum ipsum, Lorum ipsum",
        reviewerName: "Samir",
      },
      {
        id: 5,
        reviewerId: "5",
        rating: 4.5,
        comment: "Lorum ipsum, Lorum ipsum, Lorum ipsum, Lorum ipsum",
        reviewerName: "Ahmed",
      },
    ],
  };
  const bgImage = avocat.photo ? `url(${avocat.photo})` : `url(/avatar.png)`;
  console.log(avocat.photo);
  return (
    <div className=" flex flex-col items-center">
      <div className="grid grid-cols-3 gap-20 max-w-[80vw] my-12">
        <div
          className="border-4 relative border-primary1 w-full  text-lg"
          style={{
            backgroundImage: bgImage,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex bg-primary1 absolute top-8 -left-4 py-1 px-5 text-white gap-2 items-center">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.20695 2.62228C8.53342 1.61127 8.69666 1.10577 8.99996 1.10577C9.30326 1.10577 9.4665 1.61127 9.79297 2.62228L10.8969 6.04086C10.9868 6.3193 11.0318 6.45852 11.1414 6.53832C11.251 6.61812 11.3973 6.61812 11.6899 6.61812L14.7591 6.61812C15.8192 6.61812 16.3493 6.61812 16.4426 6.90645C16.536 7.19479 16.1065 7.50542 15.2475 8.12668L12.6158 10.0301C12.379 10.2013 12.2606 10.287 12.2185 10.4157C12.1764 10.5444 12.2214 10.6835 12.3112 10.9615L13.4254 14.4102C13.7483 15.4095 13.9097 15.9091 13.6655 16.0868C13.4212 16.2644 12.9956 15.9569 12.1444 15.3418L9.48803 13.4224C9.25251 13.2522 9.13474 13.1671 8.99996 13.1671C8.86517 13.1671 8.74741 13.2522 8.51189 13.4224L5.85551 15.3418C5.00434 15.9569 4.57875 16.2644 4.33447 16.0868C4.09019 15.9091 4.25162 15.4095 4.57448 14.4102L5.68872 10.9615C5.77856 10.6835 5.82348 10.5444 5.78138 10.4157C5.73928 10.287 5.62089 10.2013 5.38412 10.0301L2.75241 8.12668C1.89344 7.50542 1.46395 7.19479 1.55729 6.90645C1.65064 6.61812 2.18068 6.61812 3.24078 6.61812L6.31002 6.61812C6.60262 6.61812 6.74891 6.61812 6.85854 6.53832C6.96816 6.45852 7.01312 6.3193 7.10303 6.04086L8.20695 2.62228Z"
                stroke="#ffffff"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h3 className="mt-[2px]">4,8</h3>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold">{avocat.name}</h1>
          <div className="flex flex-col ">
            <p className="text-sec1 font-semibold">Numero De Telephone</p>
            <p> {avocat.phone}</p>
          </div>
          <div className="flex flex-col ">
            <p className="text-sec1 font-semibold">Email</p>
            <p>{avocat.email}</p>
          </div>
          <div className="flex flex-col ">
            <p className="text-sec1 font-semibold">Langues</p>
            <p>
              {avocat.languages.map((lang, i) => (
                <span className="mr-2">
                  {lang}
                  {i < avocat.languages.length - 1 && ","}
                </span>
              ))}
            </p>
          </div>
          <div className="flex flex-col ">
            <p className="text-sec1 font-semibold">Specialités</p>
            <p>
              {avocat.specialities.map((spec, i) => (
                <span className="mr-2">
                  {spec}
                  {i < avocat.specialities.length - 1 && ","}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Link href={`/avocat/rendez-vous`} className="w-full">
            <Button
              variant="solid"
              color="primary"
              className="text-white  text-lg w-full"
            >
              Prendre un Rendez-vous
            </Button>
          </Link>
          <div className="flex flex-col ">
            <p className="text-sec1 font-semibold mb-2">Localisation</p>
            <div className="border-4 border-primary1 w-full h-80">
              <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80vw] mb-10">
        <p className="text-sec1 font-semibold mb-2">Evaluations</p>
        <div className="grid grid-cols-3 gap-10 gap-y-7">
          {avocat.reviews.map((review, i) => (
            <Review review={review} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
