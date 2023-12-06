"use client";

import React, { FC, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/Button";
import { AccordionDataProps, AccordionSectionProps } from "@/types";
import styles from "./Accordion.module.css";

const AccordionSection: FC<AccordionSectionProps> = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const [selectedButton, setSelectedButton] = useState<string>("UAH");

  let accordionHeader: React.JSX.Element | null = null;
  let accordionContent: React.JSX.Element | null = null;

  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };

  if (section.subtitle) {
    accordionHeader = (
      <h4 className={styles["accordion-subtitle"]}>{section.subtitle}</h4>
    );
  }

  if (section.img) {
    accordionHeader = (
      <Image
        src={section.img}
        alt={section.alt}
        width={100}
        height={24}
        className={
          section.alt === "bitcoin"
            ? styles["bitcoin-img"]
            : styles["accordion-img"]
        }
      />
    );
  }

  if (
    section.alt === "monobank" ||
    section.alt === "paypal" ||
    section.alt === "bitcoin"
  ) {
    accordionContent = (
      <div className={styles["accordion-description"]}>
        {section.text.map((text, index) => (
          <p
            className={
              section.alt === "paypal"
                ? styles["paypal__accordion-paragraph"]
                : styles["accordion-paragraph"]
            }
            key={index}
          >
            {text}
          </p>
        ))}
      </div>
    );
  }

  if (section.alt === "privatbank") {
    accordionContent = (
      <div className={styles["privatbank__accordion-description"]}>
        <Button variant="white" className={styles["privatbank-button"]}>
          {section.buttonPrivat}
        </Button>
        <p className={styles["privatbank-text"]}>{section.text[0]}</p>
        <Image src={section.qrImg} alt={section.alt} width={154} height={154} />
      </div>
    );
  }

  if (section.hasOwnProperty("button")) {
    accordionContent = (
      <div className={styles["accordion-description__button"]}>
        {section.button.map((item, index) => (
          <Button
            key={index}
            variant="white"
            className={
              section.subtitle === "Підписка" ||
              section.subtitle === "Subscription" ||
              section.subtitle === "Subskrypcja"
                ? styles["button-subscribe"]
                : styles["button-online"]
            }
          >
            <span>{item}</span>
          </Button>
        ))}
      </div>
    );
  }

  if (section.hasOwnProperty("buttonCurrency")) {
    accordionContent = (
      <div className={styles["bank-transfer__wrapper"]}>
        <div className={styles["bank-transfer__button"]}>
          {section.buttonCurrency.map((item, index) => (
            <Button
              key={index}
              variant="white"
              value={item.title}
              style={{ width: 53 }}
              className={
                item.title !== selectedButton
                  ? styles["button-transparent"]
                  : ""
              }
              onClick={(e: React.FormEvent<HTMLButtonElement>) => {
                setSelectedButton(e.currentTarget.value);
              }}
            >
              {item.title}
            </Button>
          ))}
        </div>
        {/* eslint-disable arrow-body-style */}
        {section.buttonCurrency.map((item, index) => {
          return (
            item.title === selectedButton && (
              <div key={index}>
                {item.content.map((text, index) => (
                  <p
                    className={
                      selectedButton === "UAH"
                        ? styles["bank-transfer__text-ua"]
                        : styles["bank-transfer__text"]
                    }
                    key={index}
                  >
                    {text}
                  </p>
                ))}
              </div>
            )
          );
        })}
      </div>
    );
  }

  return (
    <div className={styles["accordion-section"]}>
      <div className={styles["accordion-header"]} onClick={toggleSection}>
        {accordionHeader}
        <Image
          src={section.icon}
          alt="icon"
          width={24}
          height={24}
          className={
            isActiveSection
              ? styles["accordion-arrow__transform"]
              : styles["accordion-arrow__back"]
          }
        />
      </div>
      {isActiveSection && accordionContent}
    </div>
  );
};

const Accordion: FC<{ sections: AccordionDataProps[] }> = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={styles["accordion-wrapper"]}>
      {sections.map((section, index: number) => (
        <AccordionSection
          key={index}
          section={section}
          isActiveSection={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
      ))}
    </div>
  );
};

export default Accordion;
