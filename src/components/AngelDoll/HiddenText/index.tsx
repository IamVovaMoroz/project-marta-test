/* eslint-disable import/no-extraneous-dependencies */
import { FC } from "react";
import { CustomImage } from "@/components/CustomImage";
import styles from "./HiddenText.module.css";

export interface HiddenTextProps {
  img: string;
  alt: string;
  text: string[];
  title: string;
  subtitle1: string;
  text1: string[];
  subtitle2: string;
  text2: string;
}

const HiddenText: FC<{ hiddenText: HiddenTextProps }> = ({
  hiddenText: { img, alt, text, title, subtitle1, text1, subtitle2, text2 },
}) => (
  <div className={styles["hiddenContext-wrapper"]}>
    <div className={styles["hiddenImg-wrapper"]}>
      <CustomImage
        src={img}
        alt={alt}
        width={343}
        height={400}
        className={styles["angelDoll-img"]}
      />
    </div>
    <div className={styles.hiddenDescription}>
      <div className={styles.hiddenText}>
        {text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className={styles["hidden-borderWrapper"]}>
        <h4>{title}</h4>
        <div className={styles["hidden-borderText"]}>
          <h6>{subtitle1}</h6>
          {text1 &&
            Array.isArray(text) &&
            text1.map((text, index) => <p key={index}>{text}</p>)}
        </div>
        <div className={styles["hidden-borderText"]}>
          <h6>{subtitle2}</h6>
          <p>{text2}</p>
        </div>
      </div>
    </div>
  </div>
);

export default HiddenText;
