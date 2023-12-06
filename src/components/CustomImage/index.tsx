"use client";

import React, { FC } from "react";

import Image, { ImageProps } from "next/image";
import { rgbDataURL } from "./rgbDataURL";

export const CustomImage: FC<ImageProps> = (props) => {
  const { src, alt, ...rest } = props;

  return (
    <Image
      {...rest}
      src={src}
      alt={alt || "some image"}
      placeholder="blur"
      blurDataURL={rgbDataURL(248, 248, 248)}
    />
  );
};
