import { type Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import FullWidthThreeColumnLayout from "~/components/tailwindui/MultiColumnLayouts/FullWidthThreeColumnLayout";
import InvestmentTypePicker from "~/components/InvestmentTypePicker";

export const metadata: Metadata = {
  title: "Profile",
};

export default function Dashboard({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <FullWidthThreeColumnLayout>
        <InvestmentTypePicker />
      </FullWidthThreeColumnLayout>
    </>
  );
}
