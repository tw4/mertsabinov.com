/* eslint-disable @next/next/no-img-element */
import { FaGithub, FaHackerrank, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "./Greetings.module.css";

const Greetings = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://raw.githubusercontent.com/mertsabinov/mertsabinov.com/v2/src/assets/images/ms.jpeg"
        alt="Mert Sabinov"
      />

      <div className={styles.rightContainer}>
        <h1>Hello 👋 I`m Mert Sabinov</h1>
        <p>
          I am a Front-end developer with experience in various technologies
          such as React, Next.js, TypeScript, Go, React Native, MongoDB,
          Express, Gin Gonic, Chakra UI, Stitches, HTML, and CSS. I have skills
          in developing full-stack applications and experience in data
          management and storage. As a team player, I enjoy sharing my knowledge
          with others and constantly learning.
        </p>
        <div className={styles.iconContainer}>
          <a href="https://github.com/6fy">
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
    </div>
  );
};

export default Greetings;
