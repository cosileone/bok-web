import { Avatar, AvatarImage } from "~/components/ui/avatar";

const employees = [
  { name: "Alice Johnson", amount: 5000 },
  { name: "Bob Smith", amount: 4200 },
  { name: "Charlie Brown", amount: 3800 },
  { name: "Diana Ross", amount: 3200 },
  { name: "Edward Norton", amount: 2900 },
  { name: "Fiona Apple", amount: 2500 },
  { name: "George Clooney", amount: 2100 },
];

const totalInvested = employees.reduce(
  (sum, employee) => sum + employee.amount,
  0,
);

const ProgressBar = ({ percentage }: { percentage: number }) => (
  <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-200">
    <div className="bg-primary h-full" style={{ width: `${percentage}%` }} />
  </div>
);

export default function InvestmentLeaderboard() {
  const maxAmount = Math.max(...employees.map((e) => e.amount));

  return (
    <div className="mx-auto w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg">
      <h1 className="mb-2 text-3xl font-bold text-gray-800">
        Employee Investment Leaderboard
      </h1>
      <p className="mb-6 text-xl text-gray-600">
        Total Invested: ${totalInvested.toLocaleString()}
      </p>

      <ul className="space-y-4">
        {employees.map((employee, index) => (
          <li key={employee.name} className="flex items-center space-x-4">
            <span className="w-6 text-xl font-semibold text-gray-700">
              {index + 1}.
            </span>
            <Avatar>
              <AvatarImage
                className="h-10 w-10"
                src={"https://picsum.photos/100?random=" + index}
              />
            </Avatar>
            <div className="flex-grow">
              <p className="font-semibold text-gray-800">{employee.name}</p>
              <ProgressBar percentage={(employee.amount / maxAmount) * 100} />
            </div>
            <span className="text-xl font-semibold text-gray-800">
              ${employee.amount.toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
