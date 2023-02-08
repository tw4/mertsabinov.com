import CardGroup from "@/components/cardGroup/CardGroup";
import Layout from "@/components/layout/Layout";
import RepositoryCardGroup from "@/components/RepositoryCardGroup/RepositoryCardGroup";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.h1}>
          Hello 👋 I`m a Software Developer Mert Sabinov
        </h1>
        <CardGroup />
        <h2>open source projects of my choice</h2>
        <RepositoryCardGroup />
      </div>
    </Layout>
  );
};

export default Home;
