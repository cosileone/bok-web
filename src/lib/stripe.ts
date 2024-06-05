import Stripe from "stripe";
import { env } from "~/env.mjs";

const stripeApi = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-04-10",
  appInfo: {
    name: "BOK Business",
  },
});

export default stripeApi;
