import { Container } from "~/components/salient/Container";

const faqsOld = [
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

const faqs = [
  [
    {
      question: "Who is BOK aimed at?",
      answer:
        "Any company looking to retain their Gen Z employees by providing real and tangible value. As well to fellow Gen Z’s looking to build their wealth and investment profile in the stage in which it matters the most!",
    },
    {
      question: "How does it work specifically?",
      answer:
        "As a company you purchase the service for x amount of Gen Z employees. Consequently, you will have a dashboard with all signed up users and their roles in the firm. The employees instead will download the app and answer a few questions to set up their profiles to be officially investment ready!",
    },
    {
      question: "As a company what influence do I have on investment choice?",
      answer:
        "We make sure that our partners are always satisfied with the service. While the specific categories your employees want to invest in are up to them exclusively, there can be custom agreements on what asset classes might be available for workers in your firm.",
    },
  ],
  [
    {
      question: "Investment advice provided?",
      answer:
        "BOK strives to help users through the learning component available in app, although does not actively suggest or refer users to investments. Users will just choose the areas of investment based on categories of interest. The content section will serve as a hub where users can develop and foster their understanding and knowledge of finance",
    },
    {
      question:
        "In terms of pricing is there any other fee other than the monthly subscription",
      answer:
        "Our pricing is transparent and thought to be advantageous for our partner companies too. Therefore, the subscription is the only cost.",
    },
    {
      question: "How long is the contract for?",
      answer:
        "Contracts tend to be on a yearly basis, and have the option to be automatically renewed.",
    },
  ],
  [
    {
      question:
        "Is the service available everywhere or do you have geographic restrictions",
      answer:
        "Indeed! BOK is available to any partner company regardless of location",
    },
    {
      question: "Is there a contact number in case more information is needed?",
      answer:
        "To speak with one of our operators, you can dial the \n" +
        "+39 3312495678\n" +
        "or reach out to us on LinkedIn or our social medias @bokfinanz",
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-bokpurple relative overflow-hidden py-20 sm:py-32"
    >
      {/*<Image*/}
      {/*  className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"*/}
      {/*  src={backgroundImage}*/}
      {/*  alt=""*/}
      {/*  width={1558}*/}
      {/*  height={946}*/}
      {/*  unoptimized*/}
      {/*/>*/}
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-50 sm:text-4xl"
          >
            FAQ
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-100">
            If you have additional questions, don&apos;t hesitate to contact us{" "}
            <a href="mailto:info@billsofknowledge.com" className="underline">
              via email
            </a>
            !
          </p>
          {/*<p className="mt-4 text-lg tracking-tight text-slate-700">*/}
          {/*  Se hai qualsiasi altra domanda, non esitare a{" "}*/}
          {/*  <a href="mailto:info@billsofknowledge.com" className="underline">*/}
          {/*    contattarci*/}
          {/*  </a>*/}
          {/*  !*/}
          {/*</p>*/}
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
                    <h3 className="font-display text-lg leading-7 text-slate-50">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-300">{faq.answer}</p>
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
