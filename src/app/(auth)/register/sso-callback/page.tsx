import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

const SsoCallbackPage = () => {
  return <AuthenticateWithRedirectCallback />;
};

export default SsoCallbackPage;
