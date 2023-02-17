/* eslint-disable @next/next/no-img-element */
import type { FC } from "react";
import styles from "./Card.module.css";

type IProps = {
  img: string;
  title: string;
  url: string;
};

const Card: FC<IProps> = ({ img, title, url }) => {
  return (
    <a href={url} className={styles.container}>
      <div className={styles.card}>
        <img className={styles.image} src={img} alt={title} />
        <p className={styles.text}>{title}</p>
      </div>
    </a>
  );
};

export default Card;
