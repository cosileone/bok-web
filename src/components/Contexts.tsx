import { type FC, type PropsWithChildren } from "react";
import { ClerkProvider } from "@clerk/nextjs";

const Contexts: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ClerkProvider>{children}</ClerkProvider>
    </>
  );
};

export default Contexts;
