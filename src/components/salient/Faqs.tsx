import Image from "next/image";

import { Container } from "~/components/salient/Container";
import backgroundImage from "~/images/salient/background-faqs.jpg";

const faqs = [
  [
    {
      question:
        "Se comincio un contratto mensile per i contenuti finanziari posso disdire in qualsiasi momento?",
      answer:
        "Certamente. Ogni mese, prima della fatturazione è possibile cancellare la sottoscirzione al servizio per quanto riguarda il piano mensile. Non verranno effettuati rimborsi su mensilità passate.",
    },
    {
      question: "A chi è diretto questo prodotto e servizio",
      answer:
        "Per le banche ed istituti finanziari offriamo contenuti da Gen Z per Gen Z, fornendo video per aiutare i ragazzi/e a rimanere interessati agli aspetti della finanza ed economia. Inoltre avremo un app di risparmio disponibile per i giovani a breve, che si baserà sulla gamification ed il divertimento",
    },
    {
      question: "Devo già avere una banca?",
      answer:
        "I nostri contenuti educativi saranno disponibili sulle app dei partner bancari/finanziari e quindi servirà essere cleinte di quell’istituto specifico. \n" +
        "\nPer la app di risparmio non servirà avere già un conto o una banca",
    },
  ],
  [
    {
      question: "Di cosa trattano nello specifico i contenuti?",
      answer:
        "Il contenuto specifico dipende dal bisogno dell’istituzione finanzaria e di temi importanti per la nostra categoria Gen Z. Nello specifico tratteremo di tecniche pratiche di risparmo e di come metterle in atto, concetti finanziari, di attualità e sugli investimenti.",
    },
    {
      question: "Dove posso trovare update sull’app di risparmio?",
      answer: "Su instagram su @bokfinanza e direttamente qui sul sito!",
    },
    {
      question: "In che lingua saranno i contenuti",
      answer: "Per adesso in Italiano ed in Inglese",
    },
  ],
  [
    {
      question: "Qaundo sarà disponibile l’app di risparmio?",
      answer:
        "Esattamente un mese prima faremo un annuncio sulle piattaforme social... stay tuned!",
    },
    {
      question: "Cercate personale?",
      answer:
        "Sempre! Se pensi che le tue skill possano essere di aiuto, mandaci un messaggio sui social oppure scrivi una mail a\n" +
        "matteodamiani@billsofknowledge.com",
    },
    {
      question: "Ci sarà una linea telefonica in caso di problemi?",
      answer:
        "Assolutamente, per i nostri clienti Pro. Ti verrà assegnato un numero specifico dove avrai un assistente/riferimento personale per personalizzare le tue esigenze e risolvere qualsiasi problema tu possa avere!",
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            FAQ
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Se hai qualsiasi altra domanda, non esitare a{" "}
            <a href="mailto:info@billsofknowledge.com" className="underline">
              contattarci
            </a>
            !
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
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
