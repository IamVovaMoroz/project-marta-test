"use client";

import React, { FC } from "react";
import { Locales } from "@/types";
import MenuLinks from "@/components/Header/nav/MenuLinks";
import LangLinks from "@/components/Header/nav/LangLinks";
import styles from "../Header.module.css";

interface NavProps {
  data: {
    mainPage: string;
    blog: string;
    news: string;
  };
  locale: Locales;
}

export const Nav: FC<NavProps> = ({
  locale,
  data: { mainPage, blog, news },
}) => (
  <nav className={styles.navigation}>
    <MenuLinks locale={locale} data={{ mainPage, blog, news }} />
    <LangLinks />
  </nav>
);
