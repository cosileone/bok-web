"use client";

import { TextField } from "~/components/Fields";
import { Button } from "~/components/Button";
import { env } from "~/env.mjs";
import { useState, type FormEvent } from "react";

const portalId = 141068097;
const formId = "270dcd4c-7a55-4637-aea6-8fe08df6bc90";
const formUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

const NewsletterMiniForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const buttonText = submitting
    ? "Invio in corso..."
    : success
    ? "Iscrizione completata!"
    : "Pre-Iscriviti Ora";
  const buttonTextMobile = submitting
    ? "Invio in corso..."
    : success
    ? "Iscrizione completata!"
    : "Pre-Iscriviti";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    const formPayload = {
      fields: [
        {
          objectTypeId: "0-1",
          name: "email",
          value: email,
        },
      ],
      context: {
        pageUri: "www.billsofknowledge.com/",
        pageName: "BOK Landing Page",
      },
    };

    void fetch(formUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.NEXT_PUBLIC_HUBSPOT_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(formPayload),
    })
      .then((res) => {
        console.log(res);
        setSuccess(true);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setEmail("");
        setSubmitting(false);
      });
  };

  return (
    <form
      className="flex w-full justify-center md:w-auto"
      onSubmit={handleSubmit}
    >
      <TextField
        type="email"
        aria-label="Email address"
        placeholder="indirizzo email"
        autoComplete="email"
        required
        className="w-60 min-w-0 shrink"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        type="submit"
        color={success ? "gray" : "blue"}
        className="ml-4 flex-none"
      >
        <span className="hidden lg:inline">{buttonText}</span>
        <span className="lg:hidden">{buttonTextMobile}</span>
      </Button>
    </form>
  );
};

export default NewsletterMiniForm;
