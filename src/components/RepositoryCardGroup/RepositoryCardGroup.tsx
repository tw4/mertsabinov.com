import RepositoryCard from "../repositoryCard/RepositoryCard";
import styles from "./RepositoryCardGroup.module.css";

const RepositoryCardGroup = () => {
  return (
    <div className={styles.container}>
      <RepositoryCard title="test" link="" description="test des" />
      <RepositoryCard title="test" link="" description="test des" />
    </div>
  );
};

export default RepositoryCardGroup;
