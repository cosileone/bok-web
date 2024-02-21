import { Leaderboard } from "~/components/Leaderboard";
import ForecastChart from "~/components/ForecastChart";

const QuizResultsPage = () => {
  return (
    <>
      <div className={"flex flex-col items-center pt-20 sm:pt-40"}>
        <ForecastChart />
        <Leaderboard className={"w-[400px]"} />
      </div>
    </>
  );
};

export default QuizResultsPage;
