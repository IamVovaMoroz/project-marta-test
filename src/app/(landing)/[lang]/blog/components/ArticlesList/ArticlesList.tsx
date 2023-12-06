import React, { Fragment } from "react";
import { ArticleData } from "@/types/ArtcilesData";
import ArticleBlock from "@/app/(landing)/[lang]/blog/components/ArticlesList/ArticleBlock/ArticleBlock";
import styles from "./ArticlesList.module.css";

const ArticlesList = ({ data }: ArticleData) => (
  <div className={styles.articles}>
    {data.map((item, index) => (
      <Fragment key={index}>
        <ArticleBlock image={item.image} title={item.title} text={item.text} />
      </Fragment>
    ))}
  </div>
);

export default ArticlesList;
