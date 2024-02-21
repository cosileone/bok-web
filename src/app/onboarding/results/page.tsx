import { Leaderboard } from "~/components/Leaderboard";

const QuizResultsPage = () => {
  return (
    <>
      <div className={"flex justify-center pt-20 sm:pt-40"}>
        <Leaderboard className={"w-[400px]"} />
      </div>
    </>
  );
};

export default QuizResultsPage;
