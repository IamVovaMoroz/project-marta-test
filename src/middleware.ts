import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { Locales, Locale } from "./types";

export const middleware = async (request: NextRequest) => {
  if (request.nextUrl.pathname === "/report") {
    return;
  }

  const headers = {
    "accept-language": request.headers.get("accept-language"),
  };

  // @ts-ignore
  const languages = new Negotiator({ headers }).languages();

  const supportedLanguage =
    languages.find((lang) => Object.values(Locale).includes(lang as Locales)) ||
    Locale.ua;

  if (
    !(
      request.nextUrl.pathname.startsWith(`/${Locale.en}`) ||
      request.nextUrl.pathname.startsWith(`/${Locale.ua}`) ||
      request.nextUrl.pathname.startsWith(`/${Locale.pl}`)
    )
  ) {
    return NextResponse.redirect(
      new URL(`/${supportedLanguage}/${request.nextUrl.pathname}`, request.url),
    );
  }
};

export const config = {
  matcher: [
    "/((?!api|.*\\..*|_next/static|_next/image|assets|favicon.ico|sw.js).*)",
  ],
};
