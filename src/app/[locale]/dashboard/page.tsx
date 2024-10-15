import FullWidthThreeColumnLayout from "~/components/tailwindui/MultiColumnLayouts/FullWidthThreeColumnLayout";
import EmployeesPageContent from "~/components/EmployeesPageContent";

const DashboardPage = () => {
  return (
    <>
      <FullWidthThreeColumnLayout>
        <EmployeesPageContent />
      </FullWidthThreeColumnLayout>
    </>
  );
};

export default DashboardPage;
