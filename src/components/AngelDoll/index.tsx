"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { useMedia } from "@/hooks/useMedia";
import { Button } from "../Button";
import Container from "../Container";
import HiddenText, { HiddenTextProps } from "./HiddenText";
import styles from "./AngelDoll.module.css";

interface AngelDollProps {
  data: {
    title: string;
    buttonUp: string;
    buttonDown: string;
    img: string;
    alt: string;
    hiddenText: HiddenTextProps;
  };
}

const AngelDoll: FC<AngelDollProps> = ({
  data: { title, buttonUp, buttonDown, img, alt, hiddenText },
}) => {
  const [isHiddenText, setIsHiddenText] = useState(true);
  const { isMobile, isTablet, isDesktop } = useMedia();

  const toggleHandler = () => {
    setIsHiddenText(!isHiddenText);
  };

  return (
    <section className={styles.angelDoll}>
      <Container>
        <div className={styles["angelDoll-wrapper"]}>
          <div className={styles["hiddenText-isDesktop"]}>
            <h2 className={styles["angelDoll-title"]}>{title}</h2>
            <Button
              variant="yellow"
              onClick={toggleHandler}
              className={`${
                !isMobile
                  ? styles["angelDoll-btn-mb"]
                  : styles["angelDoll-btn-hidden-mb"]
              }`}
            >
              {!isHiddenText ? buttonUp : buttonDown}
              <Image
                src={img}
                alt={alt}
                width={24}
                height={24}
                className={
                  !isHiddenText
                    ? styles["arrow-transform"]
                    : styles["arrow-back"]
                }
              />
            </Button>
          </div>
          {!isHiddenText && isMobile && <HiddenText hiddenText={hiddenText} />}
          <Button
            variant="yellow"
            onClick={toggleHandler}
            className={`${
              isMobile
                ? styles["angelDoll-btn-mb"]
                : styles["angelDoll-btn-hidden-mb"]
            }`}
          >
            {!isHiddenText ? buttonUp : buttonDown}
            <Image
              src={img}
              alt={alt}
              width={24}
              height={24}
              className={
                !isHiddenText ? styles["arrow-transform"] : styles["arrow-back"]
              }
            />
          </Button>

          {!isHiddenText && (isDesktop || isTablet) && (
            <HiddenText hiddenText={hiddenText} />
          )}
        </div>
      </Container>
    </section>
  );
};

export default AngelDoll;
