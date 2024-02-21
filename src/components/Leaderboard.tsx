/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/2quG6Ncz0hN
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "~/components/ui/table";
import { cn } from "~/lib/utils";
import { type Preregistration } from "@prisma/client";
import Image from "next/image";
import { getAllQuizResults } from "~/server/actions/quizResults";
import {
  CircleUserRound,
  CircleUserRoundIcon,
  UserIcon,
  UserRoundIcon,
} from "lucide-react";

type LeaderboardProps = {
  className?: string;
};
export async function Leaderboard({ className }: LeaderboardProps) {
  const scores = await getAllQuizResults();

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="w-full max-w-2xl">
        <Card>
          <CardHeader className="flex items-center gap-4">
            <div className="flex flex-col">
              <CardTitle className="text-3xl">High Score</CardTitle>
              <CardDescription>I migliori risultati del quiz.</CardDescription>
            </div>
            {/*<Button size="lg">Export</Button>*/}
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-8 pl-4">#</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Punteggio</TableHead>
                  <TableHead className={"w-6"}></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {scores.map((score, index) => (
                  <LeaderboardRow
                    key={score.id}
                    user={score.user}
                    score={score.score}
                    position={index + 1}
                  />
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const LeaderboardRow = ({
  user,
  score,
  position,
}: {
  user: Preregistration;
  score: number;
  position: number;
}) => {
  return (
    <TableRow>
      <TableCell className="w-8 pl-4">{position}</TableCell>
      <TableCell className="flex items-center gap-4">
        {user.firstName} {user.lastName[0]}.
      </TableCell>
      <TableCell>{score}</TableCell>
      <TableCell>
        <UserRoundIcon className={"h-5 w-5"} strokeWidth={1.5} />
      </TableCell>
    </TableRow>
  );
};