/* eslint-disable react/no-children-prop */
import styles from "./Post.module.css";
import { FC, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type IProps = {
  title: string;
  content: string;
};

const Post: FC<IProps> = ({ title, content }) => {
  const [short, setShort] = useState<number>(200);

  const moreShort = () => {
    switch (short) {
      case 200:
        setShort(content.length);
        break;
      case content.length:
        setShort(200);
        break;
    }
  };

  return (
    <div className={styles.container} onClick={() => moreShort()}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <ReactMarkdown
          children={content.slice(0, short)}
          rehypePlugins={[rehypeRaw]}
        />
        {short !== 200 ? <h3>Less</h3> : null}
      </div>
    </div>
  );
};

export default Post;
