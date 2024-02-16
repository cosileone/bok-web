import { AppStoreLink } from "~/components/frontpage/AppStoreLink";
import { CircleBackground } from "~/components/frontpage/CircleBackground";
import { Container } from "~/components/frontpage/Container";
import NewsletterMiniForm from "~/components/frontpage/NewsletterMiniForm";

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-[#2e00f9] py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="unbounded text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Ricevi i primi <br /> consigli da subito!
          </h2>
          <p className="urbanist mt-4 text-lg text-gray-300">
            Iscriviti alla nostra newsletter
          </p>
          <br />
          <NewsletterMiniForm />
          {/*<div className="mt-8 flex justify-center">*/}
          {/*  <AppStoreLink color="white" />*/}
          {/*</div>*/}
        </div>
      </Container>
    </section>
  );
}
