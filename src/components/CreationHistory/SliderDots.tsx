import React, { FC } from "react";
import styles from "./History.module.css";

interface SliderDotsProps {
  icons: number;
  setCurrentSlide: React.Dispatch<number>;
  currentSlide: number;
}

const SliderDots: FC<SliderDotsProps> = ({
  icons,
  setCurrentSlide,
  currentSlide,
}) => (
  <div className={styles.dots}>
    {Array.from({ length: icons }).map((_, index) => {
      const imgFill: "#595959" | "#B3B3B3" =
        currentSlide === index ? "#595959" : "#B3B3B3";
      return (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="10"
          viewBox="0 0 11 10"
          fill="none"
          onClick={() => setCurrentSlide(index)}
        >
          <circle cx="5.5" cy="5" r="5" fill={imgFill} />
        </svg>
      );
    })}
  </div>
);

export default SliderDots;
