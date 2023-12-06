import { usePathname } from "next/navigation";
import { Locale } from "@/types";

export const useNav = () => {
  const pathname = usePathname();
  const partsUrl = pathname.split("/");
  const ukLink =
    partsUrl.length > 2
      ? `/${Locale.ua}/${partsUrl.slice(2).join("/")}`
      : `/${Locale.ua}`;
  const enLink =
    partsUrl.length > 2
      ? `/${Locale.en}/${partsUrl.slice(2).join("/")}`
      : `/${Locale.en}`;
  const plLink =
    partsUrl.length > 2
      ? `/${Locale.pl}/${partsUrl.slice(2).join("/")}`
      : `/${Locale.pl}`;

  return {
    ukLink,
    enLink,
    plLink,
  };
};
