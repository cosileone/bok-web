import EmployeesTable from "~/components/EmployeesTable";

interface EmployeesPageContentProps {
  className?: string;
}

const EmployeesPageContent = ({}: EmployeesPageContentProps) => {
  return (
    <>
      <EmployeesTable />
    </>
  );
};

export default EmployeesPageContent;
