"use client";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Checkbox,
  CheckboxGroup,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { spec } from "node:test/reporters";
import React from "react";

export default function Joindre() {
  const [type, setType] = React.useState("client");
  const allSpecialities = [
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
  const [specialities, setSpecialities] = React.useState<String[]>([]);
  const handleClose = (specialityToRemove: String) => {
    setSpecialities(
      specialities.filter((speciality) => speciality !== specialityToRemove)
    );
  };

  return (
    <div className="flex justify-center">
      <div className="py-10">
        <h1 className="text-2xl mb-4">Joindre Mouhami</h1>

        <RadioGroup
          label="Quelle est votre situation ?"
          value={type}
          onValueChange={setType}
          orientation="horizontal"
          className="mb-6"
        >
          <Radio value="client">Je cherche un avocat</Radio>

          <Radio value="avocat">Un avocat</Radio>
        </RadioGroup>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col gap-4 w-full">
            <Input label="Nom" />
            <Input label="Prenom" />
            <Input label="Email" />
            <Input label="Numero de telephone" />
            <Input label="Mot de passe" />
            <Input label="Confirmer le mot de passe" />
          </div>{" "}
          {type === "avocat" ? (
            <div className="flex flex-col gap-4">
              <Input label="Location" />
              <CheckboxGroup label="Quelle sonts votre langues?">
                <Checkbox value="arabic">Arabe</Checkbox>
                <Checkbox value="french">Francais</Checkbox>
                <Checkbox value="english">Anglais</Checkbox>
              </CheckboxGroup>
              <div className="flex items-center gap-4">
                <h2 className="text-gray-500">
                  Quelle sont votre specialités ?
                </h2>
                <Dropdown>
                  <DropdownTrigger>
                    <Button>Ajouter</Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Static Actions"
                    className="max-h-80 overflow-scroll"
                  >
                    {allSpecialities.map((speciality, index) => (
                      <DropdownItem
                        key={index}
                        onClick={() =>
                          setSpecialities((specialities) => [
                            ...specialities,
                            speciality,
                          ])
                        }
                      >
                        {speciality}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="flex gap-2 w-[400px] flex-wrap">
                {specialities.map((speciality, index) => (
                  <Chip onClose={() => handleClose(speciality)}>
                    {speciality}
                  </Chip>
                ))}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <Button color="primary" size="lg" className=" mt-4" fullWidth>
          S'inscrire
        </Button>
      </div>
    </div>
  );
}
