"use client";

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/x4XIOsuQ1NB
 */
import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { UserIcon } from "lucide-react";
import { useState } from "react";
import {
  savePreregistration,
  type SavePreregistrationProps,
} from "~/server/actions/preregistration";

export function OnboardingStep1() {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [dob, setDob] = useState<Date>();

  const handleOnSubmit = async (payload: SavePreregistrationProps) => {
    await savePreregistration(payload);
  };

  return (
    <Card className="mx-auto w-full max-w-md space-y-6">
      <CardHeader className="p-6">
        <div className="flex items-center space-x-4">
          <UserIcon className="h-6 w-6" />
          <div className="space-y-1.5">
            <h2 className="text-lg font-bold">Personal Information</h2>
            <p className="text-sm leading-none text-neutral-500 dark:text-neutral-400">
              Step 1 of 3
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">Nome</Label>
              <Input
                id="first-name"
                placeholder="Nome"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Cognome</Label>
              <Input
                id="last-name"
                placeholder="Cognome"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="nome.cognome@gmail.com"
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dob">Data di nascita</Label>
            <Input
              id="dob"
              required
              type="date"
              onChange={(e) => setDob(e.target.valueAsDate ?? undefined)}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end p-6">
        {/*<Button className="w-20" variant="outline">*/}
        {/*  Back*/}
        {/*</Button>*/}
        <Link href={"/onboarding/step2"}>
          <Button
            className="w-20"
            onClick={(e) => {
              if (firstName && lastName && email) {
                void handleOnSubmit({
                  firstName,
                  lastName,
                  email,
                  dateOfBirth: dob,
                });
              }
            }}
          >
            Next
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
