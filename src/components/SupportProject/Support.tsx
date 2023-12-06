import React, { FC } from "react";
import Container from "@/components/Container";
import { Button } from "@/components";
import styles from "./Support.module.css";

interface SupportProps {
  data: {
    text: string;
    buttonText: string;
  };
}
const Support: FC<SupportProps> = ({ data }) => (
  <section className={styles.support}>
    <Container className={styles.wrapper}>
      <p>{data.text}</p>
      <Button variant="white">{data.buttonText}</Button>
    </Container>
  </section>
);

export default Support;
