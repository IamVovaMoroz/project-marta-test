export const Locale = {
  en: "en-US",
  ua: "uk-UA",
  pl: "pl-PL",
} as const;

export type Locales = (typeof Locale)[keyof typeof Locale];
