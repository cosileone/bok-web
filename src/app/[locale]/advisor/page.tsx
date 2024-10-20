import AdvisorPageContent from "~/app/[locale]/advisor/AdvisorPageContent";
import FullWidthThreeColumnLayout from "~/components/tailwindui/MultiColumnLayouts/FullWidthThreeColumnLayout";

const AdvisorPage = () => {
  return (
    <>
      <FullWidthThreeColumnLayout>
        <AdvisorPageContent />
      </FullWidthThreeColumnLayout>
    </>
  );
};

export default AdvisorPage;
