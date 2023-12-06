import React from "react";
import Link from "next/link";
import { Locales } from "@/types";
import { NextPage } from "next";
import { usePathname } from "next/navigation";
import styles from "../Header.module.css";

interface MenuLinksProps {
  data: {
    mainPage: string;
    blog: string;
    news: string;
  };
  locale: Locales;
}

const MenuLinks: NextPage<MenuLinksProps> = ({
  locale,
  data: { mainPage, blog, news },
}) => {
  const pathname = usePathname();
  const menuLinks = [
    {
      href: `/${locale}`,
      anchor: mainPage,
    },
    {
      href: `/${locale}/news`,
      anchor: news,
    },
    {
      href: `/${locale}/blog`,
      anchor: blog,
    },
  ];
  return (
    <div className={styles["nav-menu"]}>
      {menuLinks.map((link, index) => (
        <Link
          key={index}
          className={pathname === link.href ? `${styles.active}` : ""}
          href={link.href}
        >
          {link.anchor}
        </Link>
      ))}
    </div>
  );
};

export default MenuLinks;
