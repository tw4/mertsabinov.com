/* eslint-disable react/no-children-prop */
import styles from "./Post.module.css";
import type { FC } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type IProps = {
  post: {
    title: string;
    content: string;
  };
};

const Post: FC<IProps> = ({ post }) => {
  return post ? (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{post.title}</h1>
        <ReactMarkdown children={post.content} rehypePlugins={[rehypeRaw]} />
      </div>
    </div>
  ) : null;
};

export default Post;
