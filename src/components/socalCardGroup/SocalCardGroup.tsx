import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import styles from "./SocalCardGroup.module.css";
import SocialCard from "../SocialCard/SocalCard";

const SocialCardGroup = () => {
  return (
    <div className={styles.container}>
      <SocialCard
        href="https://github.com/mertsabinov"
        icon={<FiGithub width="20px" height="20px" />}
        title={"MertSabinov"}
      />
      <SocialCard
        href="https://www.linkedin.com/in/mertsabinov/"
        icon={<FiLinkedin height="20px" width="20px" />}
        title="MertSabinov"
      />
      <SocialCard
        href="https://twitter.com/mertsabinov"
        icon={<FiTwitter height="20px" width="20px" />}
        title="MertSabinov"
      />
    </div>
  );
};

export default SocialCardGroup;
