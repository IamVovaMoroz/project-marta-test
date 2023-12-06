import React, { FC } from "react";
import Container from "@/components/Container";
import { Button } from "@/components";
import styles from "./Help.module.css";

interface HelpProps {
  data: {
    text: string;
    buttonText: string;
  };
}
const Help: FC<HelpProps> = ({ data }) => (
  <section className={styles.help}>
    <Container className={styles.wrapper}>
      <p>{data.text}</p>
      <Button variant="yellow">{data.buttonText}</Button>
    </Container>
  </section>
);

export default Help;
