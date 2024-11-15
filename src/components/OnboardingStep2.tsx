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
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { PiggyBankIcon, XIcon } from "lucide-react";
import { useState } from "react";

export function OnboardingStep2() {
  const [income, setIncome] = useState(0);
  const [percentage, setPercentage] = useState<number | null>(null);
  return (
    <Card className="mx-auto w-full max-w-md space-y-6">
      <CardHeader className="p-6">
        <div className="flex items-center space-x-4">
          <PiggyBankIcon className="h-6 w-6" />
          <div className="space-y-1.5">
            <h2 className="text-lg font-bold">Financial Information</h2>
            <p className="text-sm leading-none text-neutral-500 dark:text-neutral-400">
              Pagina 3 di 3
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3 space-y-2">
              <div className="space-y-2">
                <Label htmlFor="industry">Settore</Label>
                <Input id="industry" placeholder="Settore" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="income">Reddito Mensile Stimato</Label>
                <Input
                  id="income"
                  placeholder="€ 2.000"
                  required
                  type="number"
                  min={0}
                  value={income}
                  onChange={(e) => setIncome(+e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className={"col-span-3 space-y-2"}>
              <Label htmlFor="savings">Quanto (%) vuoi risparmiare?</Label>
              <Input
                id="savings"
                placeholder="10%"
                type="number"
                value={percentage ?? ""}
                onChange={(e) => setPercentage(+e.target.value)}
              />
            </div>
            <div className={"flex items-center pt-8"}>
              {percentage && income > 0 ? (
                <>
                  <XIcon className={"h-4 w-4"} />
                  <span className={"pl-4"}>
                    € {(income * percentage) / 100}
                  </span>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-6">
        <Link href={"/onboarding"}>
          <Button className="w-20" variant="outline">
            Back
          </Button>
        </Link>
        <Link href={"/onboarding/thank-you"}>
          <Button className="w-20">Next</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
