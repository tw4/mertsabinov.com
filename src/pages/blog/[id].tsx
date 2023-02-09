import Layout from "@/components/layout/Layout";
import Post from "@/components/post/Post";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Article = () => {
  const [blogList, setBlogList] = useState<[]>([]);

  const router = useRouter();
  const id: number = Number(router.query.id);

  useEffect(() => {
    getBlogList();
  }, []);

  const getBlogList = async () => {
    await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40mertsabinov"
    )
      .then((res) => res.json())
      .then((res) => {
        setBlogList(res.items);
      });
  };

  return (
    <Layout>
      <div>
        <Post post={blogList[id]} />
      </div>
    </Layout>
  );
};

export default Article;
