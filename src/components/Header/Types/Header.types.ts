import { Locales } from "@/types";

export interface HeaderProps {
  data: {
    mainPage: string;
    blog: string;
    news: string;
  };
  lang: Locales;
}
