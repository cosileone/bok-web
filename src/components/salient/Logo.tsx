import bokLogo from "/public/bok_logo_black.svg";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import { cn } from "~/utils";
import Image from "next/image";

export function Logo(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <Image
      unoptimized
      src={bokLogo as StaticImport}
      alt={""}
      className={cn(
        "h-24 w-auto drop-shadow lg:ml-20 lg:pl-0",
        props.className,
      )}
    />
  );
}
