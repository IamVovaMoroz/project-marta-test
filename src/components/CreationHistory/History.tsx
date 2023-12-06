"use client";

import React, { FC, useEffect, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSwipeable } from "react-swipeable";
import Container from "@/components/Container";
import SliderCard from "@/components/CreationHistory/SliderCard";
import styles from "./History.module.css";

interface SliderData {
  text: string[];
  img: string;
  alt: string;
}

interface HistoryProps {
  data: {
    title: string;
    sliderOne: SliderData;
    sliderTwo: SliderData;
    sliderThree: SliderData;
    sliderFour: SliderData;
  };
}

const History: FC<HistoryProps> = ({ data }) => {
  const sliders = [
    data.sliderOne,
    data.sliderTwo,
    data.sliderThree,
    data.sliderFour,
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliders.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide, sliders.length]);

  const handlers = useSwipeable({
    onSwipedRight: () =>
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + sliders.length) % sliders.length,
      ),
    onSwipedLeft: () =>
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliders.length),
  });

  return (
    <section>
      <Container className={styles.history}>
        <h2>{data.title}</h2>
        <div {...handlers}>
          <SliderCard
            src={sliders[currentSlide].img}
            alt={sliders[currentSlide].alt}
            text={sliders[currentSlide].text}
            icons={sliders.length}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
          />
        </div>
      </Container>
    </section>
  );
};

export default History;
