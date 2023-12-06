import React, { FC, ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import styles from "./Button.module.css";

interface IProps extends ComponentPropsWithoutRef<"button"> {
  variant: "white" | "yellow";
  icon?: string;
  alt?: string;
}

export const Button: FC<IProps> = (props) => {
  const { variant, alt, icon, children, className, ...rest } = props;
  const buttonStyles = {
    white: styles.white,
    yellow: styles.yellow,
  };

  return (
    <button
      {...rest}
      className={`${styles.button} ${buttonStyles[variant]} ${className || ""}`}
    >
      {children}
      {icon && <Image src={icon} width={24} height={24} alt={alt || ""} />}
    </button>
  );
};
