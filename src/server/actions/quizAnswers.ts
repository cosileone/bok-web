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
  question,
  answer,
  score,
  userId,
}: SaveQuizAnswerProps) => {
  const existingAnswer = await db.quizAnswer.findFirst({
    where: { userId, question },
  });
  if (existingAnswer?.answer === answer) return existingAnswer;

  if (existingAnswer) {
    return db.quizAnswer.update({
      where: { id: existingAnswer.id },
      data: { answer, score },
    });
  }

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
  return db.quizAnswer.findFirst({
    where: { userId, question },
    take: 1,
  });
};
