import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <div className={styles.container}>
      <h2>EXPERIENCE</h2>
      <div>
        <div className={styles.timeLineContainer}>
          <div className={styles.timeLinePoint}></div>
          <h3>
            Founder and Lead Front-end Developer, ProfileCard.co (December 2022
            - Present)
          </h3>
          <ul>
            <li>
              Developed a custom UI library using React.js and Stitches CSS to
              streamline the design process and ensure consistent styling
              throughout the application
            </li>
            <li>
              Utilized Firebase for real-time data synchronization and storage,
              user authentication, and authorization Developed a responsive and
              intuitive user interface, improving overall performance of the web
              application
            </li>
            <li>
              Gained experience in developing a full-stack web application from
              scratch and implementing various front-end frameworks and
              libraries
            </li>
            <li>
              <a href="https://github.com/mertsabinov/profilecard.co">Link to profilecard.co</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className={styles.timeLineContainer}>
          <div className={styles.timeLinePoint}></div>
          <h3>Workflow Premium</h3>
          <ul>
            <li>
              Developed a React Native app that allows users to track and save
              their daily and monthly earnings using local storage for data
              management
            </li>
            <li>Gained experience in mobile development and data management</li>
            <li>
              <a href="https://play.google.com/store/apps/details?id=mds.workflow&hl=tr&gl=US">
                Link to Workflow Premium on Google Play Store
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className={styles.timeLineContainer}>
          <div className={styles.timeLinePoint}></div>
          <h3>MDS E-Commerce</h3>
          <ul>
            <li>
              Developed a full-stack e-commerce platform using Go for the API
              and React for the front-end Implemented
            </li>
            <li>Gained experience in mobile development and data management</li>
            <li>
              authentication methods and user properties, allowing users to see
              the list of products they have purchased and to comment on the
              products they have purchased{" "}
              <a href="https://github.com/mertsabinov/mds-e-commerce">
                Link to MDS E-Commerce on GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
