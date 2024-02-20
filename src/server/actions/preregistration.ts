"use server";

import { db } from "~/server/db";

export type SavePreregistrationProps = {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth?: Date;
};
export const savePreregistration = async ({
  firstName,
  lastName,
  email,
  dateOfBirth,
}: SavePreregistrationProps) => {
  return db.preregistration.upsert({
    create: { firstName, lastName, email, dateOfBirth },
    update: { firstName, lastName, email, dateOfBirth },
    where: { email },
  });
};
