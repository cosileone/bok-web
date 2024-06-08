import { Container } from "~/components/frontpage/Container";
import { useTranslations } from "next-intl";

const getFAQs = (t: (arg0: string) => string) => [
  [
    {
      question: `${t("faq.question1.question")}`,
      answer: `${t("faq.question1.answer")}`,
    },
    {
      question: `${t("faq.question2.question")}`,
      answer: `${t("faq.question2.answer")}`,
    },
    {
      question: `${t("faq.question3.question")}`,
      answer: `${t("faq.question3.answer")}`,
    },
  ],
  [
    {
      question: `${t("faq.question4.question")}`,
      answer: `${t("faq.question4.answer")}`,
    },
    {
      question: `${t("faq.question5.question")}`,
      answer: `${t("faq.question5.answer")}`,
    },
    {
      question: `${t("faq.question6.question")}`,
      answer: `${t("faq.question6.answer")}`,
    },
  ],
];

export function Faqs() {
  const t = useTranslations("Index");
  const faqs = getFAQs(t);

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-neutral-200 bg-orange-600 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="unbounded text-3xl font-medium tracking-tight text-neutral-100"
          >
            {t("faq.title")}
          </h2>
          <p className="urbanist mt-2 text-lg text-neutral-200">
            {t("faq.subtitle")}{" "}
            <a
              href="mailto:info@billsofknowledge.com"
              className="text-neutral-200 underline"
            >
              Email
            </a>
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="unbounded text-lg font-semibold leading-6 text-neutral-100">
                      {faq.question}
                    </h3>
                    <p className="urbanist mt-4 text-neutral-200">
                      {faq.answer}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
