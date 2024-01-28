"use client";
import { registerAvocat, registerClient } from "@/functions";
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
import React, { use } from "react";

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
  const [first_name, setFirst_name] = React.useState("");
  const [last_name, setLast_name] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password1, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [username, setusername] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [languages, setLanguages] = React.useState<String[]>([]);
  const [phone, setPhone] = React.useState("");

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

          <Radio value="avocat">Je suis un avocat</Radio>
        </RadioGroup>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col gap-4 w-full">
            <Input
              label="Nom"
              onChange={(e) => setFirst_name(e.target.value)}
            />
            <Input
              label="Prenom"
              onChange={(e) => setLast_name(e.target.value)}
            />
            <Input
              label="Nom d'utilisateur"
              onChange={(e) => setusername(e.target.value)}
            />
            <Input label="Email" onChange={(e) => setEmail(e.target.value)} />
            {/* <Input label="Numero de telephone" /> */}
            <Input
              label="Mot de passe"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              label="Confirmer le mot de passe"
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>{" "}
          {type === "avocat" ? (
            <div className="flex flex-col gap-4">
              <Input
                label="Numero de telephone"
                onChange={(e) => setPhone(e.target.value)}
              />
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
        <Button
          color="primary"
          size="lg"
          className=" mt-4"
          fullWidth
          onClick={() => {
            console.log(email, password1, password2, first_name, last_name);
            setMsg("loading ...");
            if (type === "client") {
              registerClient(
                email,
                username,

                first_name,
                last_name,
                password2,
                password2
              ).then((res) => {
                console.log(res);
                setMsg(res?.message);
              });
            } else {
              registerAvocat(
                email,
                username,

                first_name,
                last_name,
                password2,
                password2,
                {
                  name: first_name + " " + last_name,
                  email,
                  phone,
                  wilaya: location,
                  specialities,
                  location,
                  photo: "",
                  lat: 0,
                  lng: 0,
                  languages,
                }
              ).then((res) => {
                console.log(res);
                setMsg(res?.message);
              });
            }
          }}
        >
          S'inscrire
        </Button>
        <p className="text-lg">{msg}</p>
      </div>
    </div>
  );
}
