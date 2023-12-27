"use client";

import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex justify-center">
      <div className="py-10">
        <h1 className="text-2xl mb-4">Se connecter</h1>
        <div className="flex flex-col gap-4 w-full">
          <Input label="Email" />
          <Input label="Mot de passe" />

          <Button color="primary">Se connecter</Button>
          <div className="flex justify-center gap-2">
            <p className="text-primary1">Vous n'avez pas de compte ?</p>
            <Link href="/joindre" className="text-primary1 underline">
              S'inscrire
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
