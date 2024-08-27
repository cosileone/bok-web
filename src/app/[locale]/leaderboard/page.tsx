import InvestmentLeaderboard from "~/components/InvestmentLeaderboard";
import FullWidthThreeColumnLayout from "~/components/tailwindui/MultiColumnLayouts/FullWidthThreeColumnLayout";
import { cn } from "~/lib/utils";

const LeaderboardPage = () => {
  return (
    <>
      <FullWidthThreeColumnLayout>
        <div
          className={cn(
            "mx-auto w-full max-w-md rounded-lg bg-white p-6 font-sans dark:bg-black dark:text-white",
          )}
        >
          <InvestmentLeaderboard />
        </div>
      </FullWidthThreeColumnLayout>
    </>
  );
};

export default LeaderboardPage;
