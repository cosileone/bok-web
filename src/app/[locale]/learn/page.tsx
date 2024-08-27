import { type Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import FullWidthThreeColumnLayout from "~/components/tailwindui/MultiColumnLayouts/FullWidthThreeColumnLayout";
import LearnPageContent from "~/components/LearnPageContent";

export const metadata: Metadata = {
  title: "Learn",
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
        <LearnPageContent />
      </FullWidthThreeColumnLayout>
    </>
  );
}
