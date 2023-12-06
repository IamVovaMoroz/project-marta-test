import React from "react";
import styles from "@/components/Header/Header.module.css";
import { Nav } from "@/components";
import { NextPage } from "next";
import { CustomImage } from "@/components/CustomImage";
import Link from "next/link";
import { HeaderProps } from "@/components/Header/Types/Header.types";

const HeaderDesc: NextPage<HeaderProps> = ({ lang, data }) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <Link href={`/${lang}`}>
        <CustomImage
          src="/images/logo/site_logo.png"
          width={86}
          height={48}
          alt="logo"
          quality={100}
        />
      </Link>
      <Nav data={data} locale={lang} />
    </div>
  </div>
);

export default HeaderDesc;
