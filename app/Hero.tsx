"use client";
import { Pagination } from "@nextui-org/react";
import Search from "./Search";
import SearchCard from "./SearchCard";
import { Lawyer } from "@/types";

export default function Hero() {
  const avocats: Lawyer[] = [
    {
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
    },
    {
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
    },
    {
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
    },
  ];
  return (
    <div className="flex  w-full flex-col items-center">
      <div className="bg-sec1 w-full flex flex-col items-center text-white py-8">
        <h1 className="text-6xl text-center my-4 font-semibold">
          Search The best Avocats
        </h1>
        <h2 className="text-center text-xl mb-4">
          Use the filters to find the avocats that suits you !
        </h2>
        <Search />
      </div>

      <div className="flex flex-col items-center py-12 gap-8 w-full">
        {avocats.map((avocat, index) => (
          <SearchCard avocat={avocat} key={index} />
        ))}
        <Pagination total={10} initialPage={1} />
      </div>
    </div>
  );
}
