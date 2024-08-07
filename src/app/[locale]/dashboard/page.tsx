import { type Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import FullWidthThreeColumnLayout from "~/components/tailwindui/MultiColumnLayouts/FullWidthThreeColumnLayout";
import DashboardContent from "~/components/DashboardContent";

export const metadata: Metadata = {
  title: "Dashboard",
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
        <DashboardContent />
      </FullWidthThreeColumnLayout>
    </>
  );
}
