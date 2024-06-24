"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { cn } from "~/lib/utils";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "~/lib/i18n/navigation";
import { resolveLocaleEmoji } from "~/i18n";
import { useLocale } from "next-intl";

const LocalePicker = ({
  className,
}: {
  urlOverride?: string;
  className?: string;
}) => {
  const itaMoji = resolveLocaleEmoji("it");
  const engMoji = resolveLocaleEmoji("en");

  const locale = useLocale();
  const router = useRouter();
  const pathnameNoLocale = usePathname();

  const [selectedLocale, setSelectedLocale] = useState(locale);

  useEffect(() => {
    if (selectedLocale === locale) return;
    router.push(pathnameNoLocale, { locale: selectedLocale });
  }, [selectedLocale]);
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
