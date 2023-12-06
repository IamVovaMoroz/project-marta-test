import React, { useState } from "react";
import styles from "@/components/Header/Header.module.css";
import { Nav } from "@/components";
import { NextPage } from "next";
import { CustomImage } from "@/components/CustomImage";
import Link from "next/link";
import { HeaderProps } from "@/components/Header/Types/Header.types";

export const HeaderMob: NextPage<HeaderProps> = ({ lang, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={isOpen ? styles.burger : styles.container}>
      <div className={styles.main}>
        <Link href={`/${lang}`}>
          <CustomImage
            src="/images/logo/site_logo.png"
            width={65}
            height={36}
            alt="logo"
          />
        </Link>
        <CustomImage
          onClick={handleToggle}
          src={
            isOpen ? "/images/icons/close_white.svg" : "/images/icons/menu.svg"
          }
          width={32}
          height={32}
          alt="logo"
          className={styles.close}
        />
      </div>
      {isOpen && <Nav data={data} locale={lang} />}
    </div>
  );
};
