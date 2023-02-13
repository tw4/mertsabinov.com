/* eslint-disable @next/next/no-img-element */
import styles from "./SocialCard.module.css";
import type { FC } from "react";

type IProps = {
  icon: any;
  title: string;
  href: string;
};

const SocialCard: FC<IProps> = ({ icon, title, href }) => {
  return (
    <a href={href} className={styles.container}>
      {icon}
      <h3 className={styles.h3}>{title}</h3>
    </a>
  );
};

export default SocialCard;
