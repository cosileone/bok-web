import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy • Bills of Knowledge",
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <main className={"mx-auto my-20 flex max-w-prose flex-col gap-6 p-6"}>
        <h1 className={"text-4xl font-bold"}>Privacy Policy</h1>
        <h2 className={"text-2xl font-bold"}>Introduction</h2>
        <p>
          At Bills of Knowledge, we are committed to protecting the privacy of
          our users. This Privacy Policy outlines the types of personal
          information we collect, how we use it, and the steps we take to ensure
          your personal information is handled appropriately.
        </p>
        <h2 className={"text-2xl font-bold"}>Information Collection</h2>
        <p>We collect the following types of information from our users:</p>
        <ol className={"flex flex-col gap-3"}>
          {/*<li>*/}
          {/*  <strong>Name & Date of Birth:</strong> As a banking and financial*/}
          {/*  platform we will collect first and last names and date of birth*/}
          {/*  information for use with our banking partners.*/}
          {/*</li>*/}
          <li>
            <strong>Email Addresses:</strong> We collect email addresses and
            names from users who sign up for an account on our website via our
            trusted authentication partners.
          </li>
          <li>
            <strong>Website Usage Information:</strong> Through Vercel
            Analytics, we collect non-personally identifiable information
            related to your usage of our website. This includes information such
            as pages viewed, time spent on our site, and the type of device used
            to access our site.
          </li>
        </ol>
        <h2 className={"text-2xl font-bold"}>Use of Information</h2>
        <p>The information we collect is used for the following purposes:</p>
        <ul className={"flex flex-col gap-3"}>
          {/*<li>*/}
          {/*  <strong>Name & Date of Birth:</strong> In order to confirm our*/}
          {/*  customer identities, we collect first and last name information, as*/}
          {/*  well as date of birth. This is an anti-fraud requirement for our*/}
          {/*  financial partners to provide you with financial accounts and*/}
          {/*  banking services.*/}
          {/*</li>*/}
          <li>
            <strong>Email Addresses:</strong> Your email address is used for
            authentication and security (secure login and multi-factor
            authentication). We also use your email address to respond to
            inquiries, requests, or questions for support. Your Bills of
            Knowledge account will be associated with your email address which
            will provide you with custom tailored functionality as well as our
            core services. Names are required to sign up to our partnered banks
            to provide you with the banking services we offer. We do not use
            your email address for marketing purposes unless you have opted in.
          </li>
          <li>
            <strong>Website Usage Information:</strong> This information is used
            to understand how our users interact with our website, which helps
            us improve user experience and tailor our content more effectively.
            We do not use this information to personally identify individual
            users.
          </li>
        </ul>
        <h2 className={"text-2xl font-bold"}>Data Sharing and Disclosure</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your
          personally identifiable information.
        </p>
        <h2 className={"text-2xl font-bold"}>Data Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of
          your personal information. However, no method of transmission over the
          Internet, or method of electronic storage, is 100% secure. Therefore,
          while we strive to use commercially acceptable means to protect your
          personal information, we cannot guarantee its absolute security.
        </p>
        <h2 className={"text-2xl font-bold"}>Changes to Our Privacy Policy</h2>{" "}
        <p>
          We reserve the right to update or change our Privacy Policy at any
          time. We will notify you of any changes by posting the new Privacy
          Policy on this page. We encourage you to periodically review this
          Privacy Policy for any changes.
        </p>
        {/*<h2 className={"text-2xl font-bold"}>Contact Us</h2>*/}
        {/*<p>*/}
        {/*  If you have any questions about this Privacy Policy, please contact us*/}
        {/*  at [Your Contact Information].*/}
        {/*</p>*/}
        <p className={"text-slate-600"}>
          ~ Thank you from the Bills of Knowledge team
        </p>
      </main>
      <footer className={"mx-auto max-w-prose p-6 text-slate-400"}>
        <i>Last updated February 19th, 2024</i>
      </footer>
    </>
  );
};

export default PrivacyPolicyPage;
