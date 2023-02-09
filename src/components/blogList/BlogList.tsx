import { useEffect, useState } from "react";
import RepositoryCard from "../repositoryCard/RepositoryCard";
import styles from "./BlogList.module.css";

const BlogList = () => {
  const [blogList, setBlogList] = useState<[]>([]);

  useEffect(() => {
    getBlogList();
  }, []);

  const getBlogList = async () => {
    await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40mertsabinov"
    )
      .then((res) => res.json())
      .then((res) => setBlogList(res.items));
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardGroup}>
        {blogList.length > 0
          ? blogList.map(({ title, description }: any, idx) => {
              description = description
                .slice(0, 200)
                .replace(/<p>/gi, "")
                .replace("</p>", "");
              return (
                <RepositoryCard
                  key={idx}
                  title={title}
                  description={description}
                  link={"/blog/" + idx}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default BlogList;
