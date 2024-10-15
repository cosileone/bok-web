import FullWidthThreeColumnLayout from "~/components/tailwindui/MultiColumnLayouts/FullWidthThreeColumnLayout";
import EmployeesPageContent from "~/components/EmployeesPageContent";

const EmployeesPage = () => {
  return (
    <>
      <FullWidthThreeColumnLayout>
        <EmployeesPageContent />
      </FullWidthThreeColumnLayout>
    </>
  );
};

export default EmployeesPage;
