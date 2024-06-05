import { Button } from "~/components/frontpage/Button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { cn } from "~/utils";

type LoginButtonProps = {
  className?: string;
};

const LoginButton = ({ className }: LoginButtonProps) => {
  return (
    <>
      <SignedOut>
        <Button href={"/onboarding"} className={cn(className)}>
          Registrati
        </Button>
      </SignedOut>
      <SignedIn>
        <Button href={"/dashboard"} className={cn(className)}>
          Vai al dashboard
        </Button>
      </SignedIn>
    </>
  );
};

export default LoginButton;
