import { TextField } from "~/components/Fields";
import { Button } from "~/components/Button";
import { Client } from "@hubspot/api-client";
import { env } from "~/env.mjs";

const hubspotClient = new Client({
  accessToken: env.HUBSPOT_ACCESS_TOKEN || "",
});

const formUrl =
  "https://api.hsforms.com/submissions/v3/integration/submit/141068097/270dcd4c-7a55-4637-aea6-8fe08df6bc90";

const NewsletterMiniForm = () => {
  return (
    <form className="flex w-full justify-center md:w-auto">
      <TextField
        type="email"
        aria-label="Email address"
        placeholder="indirizzo email"
        autoComplete="email"
        required
        className="w-60 min-w-0 shrink"
      />
      <Button type="submit" color="blue" className="ml-4 flex-none">
        <span className="hidden lg:inline">Pre-Iscriviti Ora</span>
        <span className="lg:hidden">Pre-Iscriviti</span>
      </Button>
    </form>
  );
};

export default NewsletterMiniForm;
