import { env } from "~/env.mjs";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";
import { type UserJSON, type WebhookEvent } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import createStripeCustomer from "~/lib/stripe/createStripeCustomer";
import { type Prisma } from "@prisma/client";

const createUserFromClerkData = (data: UserJSON) => {
  const googleAccount = data.external_accounts.find(
    (ea) => (ea.object as string) === "google_account",
  );

  const userImage =
    googleAccount && "picture" in googleAccount
      ? (googleAccount.picture as string)
      : data.image_url;

  return {
    email: data.email_addresses[0]?.email_address ?? "",
    image: userImage,
    firstName: data.first_name,
    lastName: data.last_name,
    clerkId: data.id,
    // phone?
  } satisfies Prisma.UserCreateInput;
};

export async function POST(req: Request) {
  const WEBHOOK_SECRET = env.CLERK_WEBHOOK_SECRET;
  // Create a new Svix instance with your secret.
  const webhook = new Webhook(WEBHOOK_SECRET);

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occurred: no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = (await req.json()) as WebhookEvent;
  const body = JSON.stringify(payload);

  let event: WebhookEvent;

  // Verify the payload with the headers
  try {
    event = webhook.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook: ", err);
    return NextResponse.json(
      { error: "Webhook verification failed" },
      { status: 400 },
    );
  }

  try {
    // Handle the event
    switch (event.type) {
      case "organization.created":
        const newCompany = await db.company.create({
          data: {
            slug: event.data.slug,
            name: event.data.name,
            logoUrl: event.data.image_url,
            clerkId: event.data.id,
          },
        });

        await createStripeCustomer({
          name: newCompany.name,
        });

        break;
      case "organization.updated":
        await db.company.update({
          where: { clerkId: event.data.id },
          data: {
            slug: event.data.slug,
            name: event.data.name,
            logoUrl: event.data.image_url,
          },
        });
        break;
      case "organization.deleted":
        // Soft delete the company
        await db.company.update({
          where: { clerkId: event.data.id },
          data: { isActive: false },
        });

        // TODO: Delete/cancel the stripe subscription?
        break;
      case "user.created":
        const newUser = createUserFromClerkData(event.data);
        await db.user.create({
          data: { ...newUser },
        });
        break;
      case "user.updated":
        const userData = createUserFromClerkData(event.data);
        await db.user.update({
          where: { clerkId: userData.clerkId },
          data: { ...userData },
        });
        break;
      case "user.deleted":
        await db.user.delete({ where: { clerkId: event.data.id } });
        break;
      default:
        console.log("Unhandled event type:", event.type);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : "unknown error";

    const responseMessage = `Webhook action failed: ${errorMsg}`;
    console.error(responseMessage);

    return NextResponse.json({ error: responseMessage }, { status: 400 });
  }
}
