import type { FC } from "react";
import styles from "./RepositoryCard.module.css";

type IProps = {
  title: string;
  link: string;
  description: string;
};

const RepositoryCard: FC<IProps> = ({ title, link, description }) => {
  return (
    <a href={link} className={styles.container}>
      <div className={styles.card}>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default RepositoryCard;
