"use server";

import { db } from "~/server/db";

type SaveQuizAnswerProps = {
  quizAnswerId?: number;
  question: number;
  answer: string;
  score: number;
  userId: number;
};
export const saveQuizAnswer = async ({
  quizAnswerId,
  question,
  answer,
  score,
  userId,
}: SaveQuizAnswerProps) => {
  return db.quizAnswer.create({
    data: { question, answer, score, userId },
  });
};

export const getQuizAnswer = async ({
  userId,
  question,
}: {
  userId: number;
  question: number;
}) => {
  return db.quizAnswer.findMany({
    where: { userId, question },
    take: 1,
  });
};
