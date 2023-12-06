"use client";

import React, { FC, useState } from "react";
import DropDown from "@/components/NeedHelp/DropDown";
import { NeedHelpProps } from "@/components/NeedHelp/NeedHelp.types";
import Container from "@/components/Container";
import Image from "next/image";
import styles from "./NeedHelp.module.css";

const NeedHelp: FC<NeedHelpProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const expandMoreHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className={styles.wrapper}>
      <Container className={`${styles.help} ${isOpen ? styles.opened : ""}`}>
        <div className={styles.main}>
          <div className={styles.title}>
            <h2>{data.title}</h2>
            <p>{data.subtitle}</p>
          </div>
          {!isOpen && (
            <Image
              src="/images/icons/expand_more.svg"
              width={32}
              height={32}
              alt="expand"
              style={{ filter: "invert(100%) brightness(150%)" }}
              onClick={expandMoreHandler}
            />
          )}
        </div>
        {isOpen && <DropDown data={data} handler={expandMoreHandler} />}
      </Container>
    </section>
  );
};

export default NeedHelp;
