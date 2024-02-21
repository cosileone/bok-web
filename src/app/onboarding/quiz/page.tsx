import { SignOutButton, UserButton } from "@clerk/nextjs";
import Quiz from "~/components/Quiz";

const QuizPage = () => {
  return (
    <div>
      {/*<UserButton afterSignOutUrl={"/"} />*/}
      {/*<SignOutButton />*/}
      {/*<h1>Quiz Page</h1>*/}
      <div className={"flex justify-center pt-20 sm:pt-40"}>
        <Quiz />
      </div>
    </div>
  );
};

export default QuizPage;
