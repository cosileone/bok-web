interface Option {
  id: string;
  label: string;
  value: number;
}

export type Question = {
  question: string;
  options: Option[];
};

export const question1: Question = {
  question: "Quale secondo te è accaduto più volte quest'anno?",
  options: [
    { id: "a", label: "Le volte che Elon Musk ha twittato", value: 400 },
    {
      id: "b",
      label: "Le volte che Fedez ha postato su Instagram",
      value: 200,
    },
    { id: "c", label: "Le volte che la Juve ha fatto gol", value: 300 },
    { id: "d", label: "I discorsi di Papa Francesco", value: 100 },
  ],
};

export const question2 = {
  question: "Quale regola, secondo te, ti avrebbe portato più risparmi",
  options: [
    {
      id: "a",
      label: "Tutte le volte che piove a Milano metti via 1 euro",
      value: 200,
    },
    {
      id: "b",
      label: "Tutte le volte che piove a Singapore metti via 1 euro",
      value: 400,
    },
    {
      id: "c",
      label: "Tutte le volte che piove a New York metti via 1 euro",
      value: 100,
    },
    {
      id: "d",
      label: "Tutte le volte che piove a Londra metti via 1 euro",
      value: 300,
    },
  ],
};

export const question3 = {
  question: "quale tipo di investimento avrebbe i migliori rendimenti?",
  options: [
    {
      id: "a",
      label: "Fondo indicizzato S&P 500",
      value: 400,
    },
    {
      id: "b",
      label: "Conto deposito",
      value: 100,
    },
    {
      id: "c",
      label: "Azioni Apple",
      value: 200,
    },
    {
      id: "d",
      label: "Cryptovaluta",
      value: 300,
    },
  ],
};

export const question4 = {
  question:
    "Più o meno quante volte pensi di aver ascoltato la tua canzone preferita in un anno",
  options: [
    {
      id: "a",
      label: "10",
      value: 100,
    },
    {
      id: "b",
      label: "20",
      value: 200,
    },
    {
      id: "c",
      label: "50",
      value: 300,
    },
    {
      id: "d",
      label: "100+",
      value: 400,
    },
  ],
};
