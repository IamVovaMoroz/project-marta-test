import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../ArticlesList.module.css";

const ArticleBlock = ({
  image,
  text,
  title,
}: {
  image: string;
  text: string;
  title: string;
}) => (
  <div className={styles.block}>
    <div className={styles.image}>
      <Image src={image} alt={title} width={295} height={240} />
    </div>
    <div className={styles.info}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <div className={styles.link}>
          <Link href="/">
            <Image
              src="/images/icons/vector.svg"
              alt="vector"
              width={12}
              height={12}
            />
          </Link>
        </div>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  </div>
);

export default ArticleBlock;
