"use client";

import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useMedia } from "@/hooks/useMedia";
import HeaderDesc from "@/components/Header/HeaderDesc";
import { HeaderMob } from "@/components/Header/HeaderMob";
import { HeaderProps } from "@/components/Header/Types/Header.types";
import styles from "./Header.module.css";

const Header: NextPage<HeaderProps> = ({ lang, data }) => {
  const { isMobile, isTablet } = useMedia();
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  if (!clientReady) return null;

  return (
    <header className={styles.header}>
      {isMobile || isTablet ? (
        <HeaderMob data={data} lang={lang} />
      ) : (
        <HeaderDesc data={data} lang={lang} />
      )}
    </header>
  );
};

export default Header;
