import React from "react";
import Container from "@/components/Container";
import { CustomImage as Icon } from "@/components/CustomImage";
import styles from "./CoreValuesSection.module.css";
// sign @ for importing components
// index file for components instead named file to avoid double slash.
// remove index file for exporting all components for next js in my opinion it doesnt suit and not so intuitive
// Capital letter for component folder
// clsx for styles
// Sections naming for sections
// export default use and const for components
// remove hooks folder from component folder
type valueType = {
  title: string;
  subtitle: string;
  imagePath: string;
};

interface CoreValuesSectionProps {
  data: valueType[];
}

const CoreValuesSection: React.FC<CoreValuesSectionProps> = ({ data }) => (
  <section className={styles.styledCoreValuesSection}>
    <Container className={styles.styledContainer}>
      {data.map((value, index) => (
        <div key={index} className={styles.styledDivSection}>
          <Icon
            src={`./images/icons/${value.imagePath}`}
            alt="icon"
            width="48"
            height="48"
            className={styles.icons}
          />
          <p className={styles.styledTitle}>{value.title}</p>
          <p className={styles.styledSubTitle}>{value.subtitle}</p>
        </div>
      ))}
    </Container>
  </section>
);

export default CoreValuesSection;
