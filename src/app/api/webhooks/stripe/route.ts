import { env } from "~/env.mjs";
import stripe from "~/lib/stripe";
import updateCompanySubscription from "~/server/queries/company";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const body = await request.text();

  let event;

  try {
    if (!signature) throw new Error("No stripe signature found");
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    console.error(`Error verifying stripe webhook: ${message}`);
    return NextResponse.json(
      { error: `Stripe Webhook Error: ${message}` },
      { status: 500 },
    );
  }

  try {
    // Handle the event
    switch (event.type) {
      case "checkout.session.completed": {
        const checkoutSession = event.data.object;
        const subscription = await stripe.subscriptions.retrieve(
          checkoutSession.subscription as string,
        );

        await updateCompanySubscription(subscription, true);
        break;
      }
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const subscription = event.data.object;
        await updateCompanySubscription(subscription);
        break;
      }
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    console.error(`Error handling stripe webhook: ${message}`);

    return NextResponse.json(
      { error: `Stripe Webhook Error: ${message}` },
      { status: 500 },
    );
  }
}
