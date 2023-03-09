import { FaGithub, FaHackerrank, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <p>Copyright © 2023 Mert Sabinov</p>
      </div>
      <div className={styles.iconContainer}>
        <a href="https://github.com/mertsabinov">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/mertsabinov/">
          <FaLinkedin size={20} />
        </a>
        <a href="https://twitter.com/mertsabinov">
          <FaTwitter size={20} />
        </a>
        <a href="https://www.hackerrank.com/mdsabinov">
          <FaHackerrank size={20} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
