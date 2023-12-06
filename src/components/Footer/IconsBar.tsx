import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

const IconsBar = () => (
  <div className={styles.social}>
    <a href="https://www.facebook.com/maybutneukr/">
      <Image
        src="/images/icons/facebook.svg"
        alt="facebook"
        width={24}
        height={24}
      />
    </a>
    <a href="https://www.instagram.com/misto.dobra/">
      <Image
        src="/images/icons/instagram.svg"
        alt="instagram"
        width={24}
        height={24}
      />
    </a>
    <a href="https://www.youtube.com/channel/UCTkEh1ww0RrNk7KUK4-ffBw/videos">
      <Image
        src="/images/icons/youtube.svg"
        alt="youtube"
        width={24}
        height={24}
      />
    </a>
    <a href="https://t.me/mistodobra1">
      <Image
        src="/images/icons/telegram.svg"
        alt="telegram"
        width={24}
        height={24}
      />
    </a>
  </div>
);

export default IconsBar;
