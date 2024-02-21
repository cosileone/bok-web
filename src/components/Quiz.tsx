"use client";

import { QuizStep } from "~/components/QuizStep";
import {
  question1,
  question2,
  question3,
  question4,
} from "~/app/onboarding/quiz/questionsConfig";
import { useState } from "react";
import useUserStore from "~/state/useUserStore";
import { redirect } from "next/navigation";
import { saveQuizAnswer } from "~/server/actions/quizAnswers";

const questions = [question1, question2, question3, question4];

const Quiz = () => {
  const [page, setPage] = useState(1);
  const user = useUserStore((state) => state.user);
  const handleOnNext = async ({
    answer,
    score,
  }: {
    answer: string;
    score: number;
  }) => {
    if (!user) {
      redirect("/onboarding");
    }
    await saveQuizAnswer({
      question: page,
      answer,
      score,
      userId: user.id,
    });

    if (page < questions.length) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <QuizStep
        page={page}
        totalPages={questions.length}
        question={questions[page - 1]!}
        onBack={page === 1 ? undefined : () => setPage(page - 1)}
        onNext={handleOnNext}
      />
    </>
  );
};

export default Quiz;
