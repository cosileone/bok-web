import { EmployeeRole } from "@prisma/client";

export const ClerkRoleToEmployeeRoleMap = new Map<string, EmployeeRole>([
  ["Admin", EmployeeRole.ADMIN],
  ["HR", EmployeeRole.HR],
  ["Member", EmployeeRole.EMPLOYEE],
]);
