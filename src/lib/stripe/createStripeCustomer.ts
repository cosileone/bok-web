import { db } from "~/server/db";
import stripe from "~/lib/stripe";

const createStripeCustomer = async (company: { name: string }) => {
  let newStripeCustomer;

  try {
    newStripeCustomer = await stripe.customers.create({
      name: company.name,
      metadata: {},
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "unknown stripe error";
    console.error(error);
    throw Error(`Error creating Stripe Customer: ${message}`);
  }

  try {
    return await db.company.update({
      where: { name: company.name },
      data: { stripeCustomerId: newStripeCustomer.id },
    });
  } catch (error) {
    console.error(error);
    throw Error(
      `Error updating Company "${company.name}" with stripeCustomerId`,
    );
  }
};

export default createStripeCustomer;
