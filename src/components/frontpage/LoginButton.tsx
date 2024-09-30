import { Button } from "~/components/frontpage/Button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { cn } from "~/lib/utils";
import { useTranslations } from "next-intl";

type LoginButtonProps = {
  className?: string;
};

const LoginButton = ({ className }: LoginButtonProps) => {
  const t = useTranslations("Index");
  return (
    <>
      <SignedOut>
        <Button href={"/register"} className={cn(className)}>
          {t("ctaButton.register")}
        </Button>
      </SignedOut>
      <SignedIn>
        <Button href={"/home"} className={cn(className)}>
          {t("ctaButton.loggedIn")}
        </Button>
      </SignedIn>
    </>
  );
};

export default LoginButton;
