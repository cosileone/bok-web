import { type Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import FullWidthThreeColumnLayout from "~/components/tailwindui/MultiColumnLayouts/FullWidthThreeColumnLayout";
import ProfilePageContent from "~/components/ProfilePageContent";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfilePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <FullWidthThreeColumnLayout>
        <ProfilePageContent />
      </FullWidthThreeColumnLayout>
    </>
  );
}
