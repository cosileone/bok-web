import { Leaderboard } from "~/components/Leaderboard";
import ForecastChartCard from "~/components/ForecastChartCard";

const QuizResultsPage = () => {
  return (
    <>
      <div className={"flex flex-col items-center pb-40 pt-6 sm:pt-40"}>
        <ForecastChartCard className={"mb-6 sm:mb-20 sm:w-[600px]"} />
        <Leaderboard className={"w-[400px]"} />
      </div>
    </>
  );
};

export default QuizResultsPage;
