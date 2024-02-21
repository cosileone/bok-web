"use server";

import { db } from "~/server/db";

export const calculateQuizResults = async ({ userId }: { userId: number }) => {
  const quizAnswers = await db.quizAnswer.findMany({
    where: { userId },
  });

  const totalScore = quizAnswers.reduce((acc, answer) => acc + answer.score, 0);
  return db.quizResult.upsert({
    where: { userId },
    update: {},
    create: {
      userId,
      score: totalScore,
    },
  });
};

export const getAllQuizResults = async () => {
  return db.quizResult.findMany({
    orderBy: [{ score: "desc" }, { id: "desc" }],
    include: {
      user: true,
    },
  });
};
