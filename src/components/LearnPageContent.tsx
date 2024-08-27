import { cn } from "~/lib/utils";
import { type PropsWithChildren } from "react";

const LearnPageContent = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <>
      <div
        className={cn(
          "mx-auto w-full max-w-md rounded-lg bg-white p-6 font-sans dark:bg-black dark:text-white",
          className,
        )}
      >
        {children}
      </div>
    </>
  );
};

export default LearnPageContent;
