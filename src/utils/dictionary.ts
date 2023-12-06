import "server-only";
import { get } from "lodash";
import { Locale, Locales } from "@/types";

const languages = {
  [Locale.en]: () =>
    import("@/assets/en_US.json").then((module) => module.default),
  [Locale.ua]: () =>
    import("@/assets/uk_UA.json").then((module) => module.default),
  [Locale.pl]: () =>
    import("@/assets/pl_PL.json").then((module) => module.default),
};

export const getAllTranslations = async (locale: Locales) => {
  const result = await languages[locale]();
  return result;
};

export const getTranslation = (language: any) => (path: string) =>
  get(language, path);
