import { Container } from "~/_components/Container";

const faqs = [
  [
    {
      question: "Quale è la nostra visione?",
      answer:
        "Che tutti i Gen Z Italiani ed Europei raggiungano la stabilità finanziaria",
    },
    {
      question: "Come Funziona BOK?",
      answer:
        "BOK è una app per aiutare la generazione Z a salvare ed investire denaro in modo semplice e con il minimo sforzo. Ci saranno investimenti con amici, tornei e tanti altri modi per arricchirti, sempre divertendoti!",
    },
    {
      question: "Quanto costa BOK?",
      answer:
        "Tutto gratuito! Esisterà una versione pro con funzioni amplificate a pagamento, ma vogliamo che chiunque possa avere accesso alla propria libertà finanziaria. Oltre alla spedizione della tua carta personalizzabile BOK, non pagherai nulla :)",
    },
  ],
  [
    {
      question: "Per chi è pensato BOK?",
      answer:
        "Se hai fra i 18-27 anni e stai cercando di mettere da parte soldi, investire denaro e raggiungere la tua indipendenza finanziaria, questo è il posto e il momento giusto!",
    },
    {
      question: "Pre-Iscrizione",
      answer:
        "Lascia i tuoi dati e verrai notificato non appena la app sarà disponibile. Tieniti aggiornato sulla nostra newsletter e social media Instagram e TikTok per rimanere sempre al passo",
    },
    {
      question: "Devo già avere un conto?",
      answer:
        "Non necessariamente! Potrai connettere il tuo conto alla app e ordinare la nostra carta personalizzabile BOK. Fatta a seconda delle tue preferenze ti verrà inviata entro il 30 Novembre.",
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 bg-orange-600 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="unbounded text-3xl font-medium tracking-tight text-gray-100"
          >
            FAQ
          </h2>
          <p className="urbanist mt-2 text-lg text-gray-200">
            Se hai qualsiasi altra domanda, non esitare a{" "}
            <a
              href="mailto:info@billsofknowledge.com"
              className="text-gray-200 underline"
            >
              contattarci
            </a>
            !
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
                    <h3 className="unbounded text-lg font-semibold leading-6 text-gray-100">
                      {faq.question}
                    </h3>
                    <p className="urbanist mt-4 text-gray-200">{faq.answer}</p>
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
