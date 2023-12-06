import React from "react";

import { IHowToHelpProps, AccordionDataProps } from "@/types";
import Container from "../Container";
import Accordion from "./Accordion/Accordion";
import styles from "./HowToHelp.module.css";

const HowToHelp: React.FC<IHowToHelpProps> = ({ data }) => {
  const sections: AccordionDataProps[] = [
    data.accordionItemOne,
    data.accordionItemTwo,
    data.accordionItemThree,
    data.accordionItemFour,
    data.accordionItemFive,
    data.accordionItemSix,
    data.accordionItemSeven,
  ];

  return (
    <section className={styles.howToHelp}>
      <Container className={styles["howToHelp-container"]}>
        <div className={styles.extraWidth}>
          <h2 className={styles.title}>{data.title}</h2>
          <div className={styles["howToHelp-wrapper"]}>
            <p className={styles.paragraph}>{data.paragraph}</p>
            <Accordion sections={sections} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowToHelp;
