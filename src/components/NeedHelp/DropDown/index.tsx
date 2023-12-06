import React, { FC } from "react";
import Ellipses from "@/components/NeedHelp/EllipsesBlock/Ellipses";
import { useMedia } from "@/hooks/useMedia";
// eslint-disable-next-line import/no-cycle
import { Button } from "@/components";
import { NeedHelpProps } from "@/components/NeedHelp/NeedHelp.types";
import { CustomImage } from "@/components/CustomImage";
import styles from "@/components/NeedHelp/NeedHelp.module.css";

interface DropDownProps extends NeedHelpProps {
  handler: () => void;
}

const DropDown: FC<DropDownProps> = ({ data, handler }) => {
  const { isDesktop } = useMedia();
  return (
    <div className={styles.info}>
      <div className={styles.text}>
        <p className={styles["paragraph-one"]}>{data.text[0]}</p>
        <p className={styles["paragraph-two"]}>{data.text[1]}</p>
      </div>
      <Ellipses />
      <div className={styles.text}>
        <p className={styles["paragraph-four"]}>{data.text[2]}</p>
        <p className={styles["paragraph-five"]}>{data.text[3]}</p>
        {isDesktop && (
          <div className={styles["support-btn"]}>
            <Button variant="yellow">{data.button}</Button>
          </div>
        )}
      </div>
      {!isDesktop ? (
        <div className={styles.support}>
          <Button variant="yellow">{data.button}</Button>
          <CustomImage
            src="/images/icons/expend_less.svg"
            width={32}
            height={32}
            alt="expand"
            style={{ filter: "invert(100%) brightness(150%)" }}
            onClick={handler}
          />{" "}
        </div>
      ) : (
        <div className={styles.toggle}>
          <CustomImage
            src="/images/icons/expend_less.svg"
            width={32}
            height={32}
            alt="expand"
            style={{ filter: "invert(100%) brightness(150%)" }}
            onClick={handler}
          />
        </div>
      )}
    </div>
  );
};

export default DropDown;
