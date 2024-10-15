export const shortCurrencyFormat = (value: number) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "EUR",
    unitDisplay: "short",
    notation: "compact",
    minimumFractionDigits: 2,
  }).format(value);
};

export const shortNumberFormat = (value: number) => {
  return new Intl.NumberFormat("en-GB", {
    notation: "compact",
  }).format(value);
};
