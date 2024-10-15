"use client";

import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { shortCurrencyFormat, shortNumberFormat } from "~/util/strings";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "~/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Link } from "~/lib/i18n/navigation";

const employees = [
  {
    name: "Liam Johnson",
    email: "liam@billsofknowledge.com",
    department: "Sales",
    status: "Inactive",
    salary: Math.random() * 100000,
    contribution: Math.random() * 10,
    total: Math.random() * 25000,
  },
  {
    name: "Olivia Smith",
    email: "olivia@billsofknowledge.com",
    department: "HR",
    status: "Active",
    salary: Math.random() * 100000,
    contribution: Math.random() * 10,
    total: Math.random() * 25000,
  },
  {
    name: "Noah Williams",
    email: "noah@billsofknowledge.com",
    department: "Management",
    status: "Inactive",
    salary: Math.random() * 100000,
    contribution: Math.random() * 10,
    total: Math.random() * 25000,
  },
  {
    name: "Emma Brown",
    email: "emma@billsofknowledge.com",
    department: "Sales",
    status: "Inactive",
    salary: Math.random() * 100000,
    contribution: Math.random() * 10,
    total: Math.random() * 25000,
  },
  {
    name: "Liam Johnson",
    email: "liam@billsofknowledge.com",
    department: "Sales",
    status: "Inactive",
    salary: Math.random() * 100000,
    contribution: Math.random() * 10,
    total: Math.random() * 25000,
  },
  {
    name: "Liam Johnson",
    email: "liam@billsofknowledge.com",
    department: "Sales",
    status: "Inactive",
    salary: Math.random() * 100000,
    contribution: Math.random() * 10,
    total: Math.random() * 25000,
  },
  {
    name: "Olivia Smith",
    email: "olivia@billsofknowledge.com",
    department: "HR",
    status: "Active",
    salary: Math.random() * 100000,
    contribution: Math.random() * 10,
    total: Math.random() * 25000,
  },
  {
    name: "Emma Brown",
    email: "emma@billsofknowledge.com",
    department: "Sales",
    status: "Inactive",
    salary: Math.random() * 100000,
    contribution: Math.random() * 10,
    total: Math.random() * 25000,
  },
];

export default function EmployeesTable() {
  return (
    <>
      <div className={"mb-4 flex flex-col justify-between gap-4 sm:flex-row"}>
        <Card className={"grow"}>
          <CardHeader>
            <CardTitle>AAPL, TSLA, NVDA</CardTitle>
            <CardDescription>Top 3 Stocks Picked</CardDescription>
          </CardHeader>
        </Card>
        <Card className={"grow"}>
          <CardHeader>
            <CardTitle>{shortNumberFormat(Math.random() * 5 + 5)}%</CardTitle>
            <CardDescription>Average Employee Returns (%)</CardDescription>
          </CardHeader>
        </Card>
        <Card className={"grow"}>
          <CardHeader>
            <CardTitle>
              {shortCurrencyFormat(
                employees.reduce((acc, employee) => acc + employee.total, 0),
              )}
            </CardTitle>
            <CardDescription>Total Contributions</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <Card>
        <CardHeader className="relative px-7">
          <CardTitle>Employees</CardTitle>
          <CardDescription>{employees.length} Results</CardDescription>
          <Button
            variant="secondary"
            size={"sm"}
            className={"absolute right-4 top-3 gap-2"}
          >
            <EnvelopeClosedIcon className="h-3.5 w-3.5" />
            <span>Invite Employee</span>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead className="hidden sm:table-cell">
                  Department
                </TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="hidden sm:table-cell">Salary</TableHead>
                <TableHead className="hidden md:table-cell">
                  Contribution
                </TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead className="hidden text-right md:table-cell">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee, index) => (
                <TableRow
                  key={index}
                  className={index === 0 ? "bg-accent" : undefined}
                >
                  <TableCell>
                    <div>
                      <Link href={"#"} className="font-medium">
                        {employee.name}
                      </Link>
                    </div>
                    <div className="text-muted-foreground hidden text-sm md:inline">
                      {employee.email}
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {employee.department}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge
                      className="text-xs"
                      variant={
                        employee.status === "Active" ? "secondary" : "outline"
                      }
                    >
                      {employee.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {shortCurrencyFormat(employee.salary)}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {employee.contribution.toFixed(2)}%
                  </TableCell>
                  <TableCell className="text-right">
                    <strong>{shortCurrencyFormat(employee.total)}</strong>
                  </TableCell>
                  <TableCell className="hidden text-right md:table-cell">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size={"icon"}>
                          <Cog8ToothIcon
                            className="h-5 w-5"
                            strokeWidth={1.5}
                          />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>View</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <Pagination className="ml-auto mr-0 w-auto">
            <PaginationContent>
              <PaginationItem>
                <Button size="icon" variant="outline" className="h-6 w-6">
                  <ChevronLeft className="h-3.5 w-3.5" />
                  <span className="sr-only">Previous Order</span>
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button size="icon" variant="outline" className="h-6 w-6">
                  <ChevronRight className="h-3.5 w-3.5" />
                  <span className="sr-only">Next Order</span>
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>
    </>
  );
}
