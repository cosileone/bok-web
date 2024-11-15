import { db } from "~/server/db";
import type Stripe from "stripe";
import { StripeActiveSubscriptionStatuses } from "~/constants/stripe";

const updateCompanySubscription = async (subscription: Stripe.Subscription) => {
  const isSubscriptionActive = StripeActiveSubscriptionStatuses.includes(
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
