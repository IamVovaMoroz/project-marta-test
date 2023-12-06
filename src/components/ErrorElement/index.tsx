"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IErrorPage, Locale, Locales } from "@/types";

export const ErrorElement: FC<IErrorPage> = ({ statusCode, title }) => {
  const [locale, setLocale] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const localData = pathname.split("/")[1] as Locales;

    if (Object.values(Locale).includes(localData)) {
      setLocale(localData);
    } else {
      setLocale(Locale.en);
    }
  }, [pathname]);

  return (
    <div>
      <h1>{statusCode}</h1>
      <div>
        <Link href={`/${locale}`}>Go To Homepage</Link>
      </div>
      <div>
        <h4>{title}</h4>
      </div>
    </div>
  );
};
