"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useParams } from "next/navigation";
import { cn } from "~/lib/utils";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "~/lib/i18n/navigation";
import { resolveLocaleEmoji } from "~/i18n";

const LocalePicker = ({
  urlOverride,
  className,
}: {
  urlOverride?: string;
  className?: string;
}) => {
  const itaMoji = resolveLocaleEmoji("it");
  const engMoji = resolveLocaleEmoji("en");

  const params = useParams();
  const locale = params.locale as string | undefined;

  const router = useRouter();
  const completePathname = usePathname();
  const removeLocale = completePathname.replace(`/${locale}`, "");

  const pathname = urlOverride ?? removeLocale.length <= 1 ? "/" : removeLocale;

  const [selectedLocale, setSelectedLocale] = useState(locale);

  useEffect(() => {
    if (selectedLocale === locale) return;
    void router.push(pathname, { locale: selectedLocale });
  }, [pathname, router, selectedLocale, locale]);
  return (
    <>
      <Select
        onValueChange={(value) => {
          setSelectedLocale(value);
        }}
        value={selectedLocale}
      >
        <SelectTrigger
          className={cn("w-18 border-0 text-2xl shadow-none", className)}
        >
          <SelectValue placeholder={resolveLocaleEmoji(locale) ?? itaMoji} />
        </SelectTrigger>
        <SelectContent align={"end"}>
          <SelectGroup>
            <SelectItem value="en" className={"text-2xl"}>
              {engMoji}
            </SelectItem>
            <SelectItem value="it" className={"text-2xl"}>
              {itaMoji}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default LocalePicker;
