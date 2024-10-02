import { db } from "~/server/db";
import type Stripe from "stripe";

export const ActiveStripeSubscriptionStatuses = ["active", "trialing"];

const updateCompanySubscription = async (subscription: Stripe.Subscription) => {
  const isSubscriptionActive = ActiveStripeSubscriptionStatuses.includes(
    subscription.status,
  );

  return db.company.update({
    where: {
      stripeCustomerId: subscription.customer as string,
    },
    data: {
      isActive: isSubscriptionActive,
      subscriptionId: isSubscriptionActive ? subscription.id : undefined,
    },
  });
};

export default updateCompanySubscription;
