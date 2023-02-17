import RepositoryCard from "../repositoryCard/RepositoryCard";
import styles from "./RepositoryCardGroup.module.css";

const RepositoryCardGroup = () => {
  return (
    <div className={styles.container}>
      <RepositoryCard
        title="MDS E-Commerce"
        link="https://github.com/mertsabinov/mds-e-commerce"
        description="E-commerce platform that brings sellers and buyers together at a single point"
      />
      <RepositoryCard
        title="Cargo Project"
        link="https://github.com/mertsabinov/cargo-project"
        description="backend and frontend and desktop cargo management and tracking project"
      />
      <RepositoryCard
        title="Spotbot Twitch"
        link="https://github.com/mertsabinov/cargo-project"
        description="Forget about the hassle of running a raffle manually. With Twitch raffle bot, you can draw in your chat and easily select those who want to participate with the key you choose"
      />
    </div>
  );
};

export default RepositoryCardGroup;
