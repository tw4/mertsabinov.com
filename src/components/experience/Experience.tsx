import styles from "./Experience.module.css";
import { useEffect, useState } from "react";
import { getExperience } from "@/api";
import ReactMarkdown from "react-markdown";

const Experience = () => {
  const [experience, setExperience] = useState<any[]>([]);

  useEffect(() => {
    getExperience().then((items) => {
      setExperience(items);
    });
  }, []);
  return (
    <div className={styles.container}>
      <h2>EXPERIENCE</h2>
      <div>
        {experience.map((item) => {
          return (
            <div key={item} className={styles.timeLineContainer}>
              <div className={styles.timeLinePoint}></div>
              <h3>{item.fields.title}</h3>
              <ul>
                <ReactMarkdown>{item.fields.description}</ReactMarkdown>
                <li>
                  <a href={`${item.fields.projectUrl}`}>Link</a>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
