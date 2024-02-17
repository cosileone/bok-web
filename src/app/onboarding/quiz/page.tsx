"use client";

import { SignOutButton, UserButton } from "@clerk/nextjs";
import { QuizStep } from "~/components/quiz-step";
import {
  question1,
  question2,
  question3,
  question4,
} from "~/app/onboarding/quiz/questionsConfig";
import { useState } from "react";

const questions = [question1, question2, question3, question4];
const QuizPage = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <UserButton afterSignOutUrl={"/"} />
      <SignOutButton />
      <h1>Quiz Page</h1>
      <div className={"flex justify-center pt-20"}>
        <QuizStep
          page={page}
          totalPages={questions.length}
          ctaUrl={"/onboarding/quiz/page2"}
          question={questions[page - 1]!}
          onBack={page === 1 ? undefined : () => setPage(page - 1)}
          onNext={(x) => {
            console.log(x);
            if (page < questions.length) {
              setPage(page + 1);
            }
          }}
        />
      </div>
    </div>
  );
};

export default QuizPage;
