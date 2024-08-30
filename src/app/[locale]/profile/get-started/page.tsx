import { unstable_setRequestLocale } from "next-intl/server";
import FullWidthThreeColumnLayout from "~/components/tailwindui/MultiColumnLayouts/FullWidthThreeColumnLayout";
import GetStartedContent from "~/app/[locale]/profile/get-started/GetStartedContent";

export default function GetStartedPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <FullWidthThreeColumnLayout>
        <GetStartedContent />
      </FullWidthThreeColumnLayout>
    </>
  );
}
