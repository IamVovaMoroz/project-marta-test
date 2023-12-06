import React, { FC } from "react";
import { CustomImage } from "@/components";
import SliderDots from "@/components/CreationHistory/SliderDots";
import styles from "./History.module.css";

interface SliderCardProps {
  src: string;
  alt: string;
  text: string[];
  icons: number;
  currentSlide: number;
  setCurrentSlide: React.Dispatch<number>;
}

const SliderCard: FC<SliderCardProps> = ({
  src,
  alt,
  text,
  icons,
  currentSlide,
  setCurrentSlide,
}) => (
  <div className={styles.card}>
    <div className={styles.image}>
      <CustomImage src={src} alt={alt} fill />
    </div>
    <SliderDots
      icons={icons}
      setCurrentSlide={setCurrentSlide}
      currentSlide={currentSlide}
    />
    {text.map((text, textIndex) => (
      <p key={textIndex}>{text}</p>
    ))}
  </div>
);

export default SliderCard;
