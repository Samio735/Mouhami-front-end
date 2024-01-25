import { Button, Input } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const wilayas = [
    "Adrar",
    "Chlef",
    "Laghouat",
    "Oum El Bouaghi",
    "Batna",
    "Béjaïa",
    "Biskra",
    "Béchar",
    "Blida",
    "Bouira",
    "Tamanrasset",
    "Tébessa",
    "Tlemcen",
    "Tiaret",
    "Tizi Ouzou",
    "Alger",
    "Djelfa",
    "Jijel",
    "Sétif",
    "Saïda",
    "Skikda",
    "Sidi Bel Abbès",
    "Annaba",
    "Guelma",
    "Constantine",
    "Médéa",
    "Mostaganem",
    "M'Sila",
    "Mascara",
    "Ouargla",
    "Oran",
    "El Bayadh",
    "Illizi",
    "Bordj Bou Arreridj",
    "Boumerdès",
    "El Tarf",
    "Tindouf",
    "Tissemsilt",
    "El Oued",
    "Khenchela",
    "Souk Ahras",
    "Tipaza",
    "Mila",
    "Aïn Defla",
    "Naâma",
    "Aïn Témouchent",
    "Ghardaïa",
    "Relizane",
  ];
  const languages = ["Arabe", "Français", "Anglais"];
  const specialities = [
    "Droit administratif",
    "Droit Affaires",
    "Droit civil",
    "Droit commercial",
    "Droit de l'immobilier",
    "Droit de la consommation",
    "Droit de la propri\u00e9t\u00e9 intellectuelle",
    "Droit de la sant\u00e9",
    "Droit des contrats",
    "Droit des entreprises",
    "Droit des \u00e9trangers",
    "Droit des soci\u00e9t\u00e9s",
    "droit douanier",
    "Droit du travail",
    "Droit familial",
    "Droit foncier",
    "Droit maritime",
    "Droit p\u00e9nal",
    "Droit routier",
    "Droit social",
    "Droits de l'homme",
  ];
  const ratings = ["1 +", "2 +", "3 +", "4 +", "5"];

  const [wilaya, setWilaya] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [speciality, setSpeciality] = useState<string>("");
  const [rating, setRating] = useState<string>("");
  const [name, setName] = useState<string>("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2 m-4">
      <div className="flex min-w-[70vw] border-primary1 ">
        <Input
          className="h-12 w-[80%]"
          size="sm"
          placeholder="Type a name ..."
          onChange={(e) => {
            setName(e.target.value);
          }}
          defaultValue={searchParams.get("name")?.toString()}
        ></Input>

        <Button
          className="h-12 w-[20%] bg-primary1 text-white"
          variant="solid"
          onClick={() => {
            const params = new URLSearchParams(searchParams);
            wilaya ? params.set("wilaya", wilaya) : params.delete("wilaya");
            language
              ? params.set("language", language)
              : params.delete("language");
            speciality
              ? params.set("speciality", speciality)
              : params.delete("speciality");
            rating ? params.set("rating", rating) : params.delete("rating");
            name ? params.set("name", name) : params.delete("name");
            router.replace(`${pathname}?${params.toString()}`);
          }}
        >
          Search
        </Button>
      </div>
      <div className="flex min-w-[70vw] gap-2 ">
        <Autocomplete
          label="Wilaya"
          className="max-w-xs"
          value={wilaya}
          size="sm"
          onInputChange={(value) => {
            setWilaya(value);
          }}
          defaultInputValue={searchParams.get("wilaya")?.toString()}
        >
          {wilayas.map((wilaya, index) => (
            <AutocompleteItem value={wilaya} key={index} color="primary">
              {wilaya}
            </AutocompleteItem>
          ))}
        </Autocomplete>
        <Autocomplete
          label="Langue"
          className="max-w-xs"
          value={language}
          size="sm"
          onInputChange={(value) => {
            setLanguage(value);
          }}
          defaultInputValue={searchParams.get("language")?.toString()}
        >
          {languages.map((language, index) => (
            <AutocompleteItem key={index} color="primary">
              {language}
            </AutocompleteItem>
          ))}
        </Autocomplete>
        <Autocomplete
          label="Specialité"
          className="max-w-xs"
          value={speciality}
          size="sm"
          onInputChange={(value) => {
            setSpeciality(value);
          }}
          defaultInputValue={searchParams.get("speciality")?.toString()}
        >
          {specialities.map((speciality, index) => (
            <AutocompleteItem value={speciality} key={index} color="primary">
              {speciality}
            </AutocompleteItem>
          ))}
        </Autocomplete>
        <Autocomplete
          label="Rating"
          className="max-w-xs"
          value={rating}
          size="sm"
          onInputChange={(value) => {
            setRating(value);
          }}
          defaultInputValue={searchParams.get("rating")?.toString()}
        >
          {ratings.map((rating, index) => (
            <AutocompleteItem value={rating} key={index} color="primary">
              {rating}
            </AutocompleteItem>
          ))}
        </Autocomplete>
      </div>
    </div>
  );
}
