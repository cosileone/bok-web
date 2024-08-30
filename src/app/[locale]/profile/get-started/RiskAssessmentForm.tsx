"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Slider } from "~/components/ui/slider";
import { useLocalStorage } from "@uidotdev/usehooks";
import { toast } from "sonner";
import { useRouter } from "~/lib/i18n/navigation";

export default function RiskAssessmentForm() {
  const router = useRouter();
  const [riskAssessmentAnswers, setRiskAssessmentAnswers] = useLocalStorage<{
    riskTolerance: number;
    debtSituation: string;
    age: string;
  }>("bokRiskAssessmentAnswers", {
    riskTolerance: 5,
    debtSituation: "",
    age: "",
  });

  const [riskTolerance, setRiskTolerance] = useState(
    riskAssessmentAnswers.riskTolerance || 5,
  );
  const [debtSituation, setDebtSituation] = useState(
    riskAssessmentAnswers.debtSituation,
  );
  const [age, setAge] = useState(riskAssessmentAnswers.age);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRiskAssessmentAnswers({ riskTolerance, debtSituation, age });

    toast.success("Risk tolerance preferences saved.");
    void router.push("/profile");
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Investment Risk Assessment</CardTitle>
        <CardDescription>
          Please answer the following questions to help us understand your
          financial situation.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-8">
          <div className="space-y-2">
            <Label htmlFor="risk-tolerance">
              When it comes to investing, how much of a risk-taker are you?
            </Label>
            <p className={"text-xs leading-5"}>
              On a scale from 1 (super cautious) to 10 (all-in for high risks),
              where do you see yourself?
            </p>
            <Slider
              id="risk-tolerance"
              min={1}
              max={10}
              step={1}
              value={[riskTolerance]}
              onValueChange={(value: number[]) => {
                if (!value[0]) return;
                setRiskTolerance(value[0]);
              }}
              className="w-full"
            />
            <p className="text-muted-foreground text-sm">
              Your risk tolerance: {riskTolerance}
            </p>
          </div>

          <div className="space-y-2">
            <Label>How&apos;s your debt situation looking right now?</Label>
            <RadioGroup value={debtSituation} onValueChange={setDebtSituation}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="debt-free" id="debt-free" />
                <Label htmlFor="debt-free">
                  I&apos;m pretty much debt-free
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="some-debt" id="some-debt" />
                <Label htmlFor="some-debt">
                  I have some debt, but it&apos;s chill and under control
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="heavy-debt" id="heavy-debt" />
                <Label htmlFor="heavy-debt">
                  My debt&apos;s a bit heavy and it affects my money decisions
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="age">How old are you?</Label>
            <Input
              id="age"
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
