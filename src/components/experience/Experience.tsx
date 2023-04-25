import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <div className={styles.container}>
      <h2>EXPERIENCE</h2>
      <div>
        <div className={styles.timeLineContainer}>
          <div className={styles.timeLinePoint}></div>
          <h3>
            Front-end Developer, Notes (2023
            - 2023)
          </h3>
          <ul>
            <li>
              My project is an application that allows users to securely
              store and manage their notes. Utilizing Firebase Realtime
              Database technology, the application allows users to instantly
              save their notes. Additionally, the application API is secured
              with JWT tokens and api-keys to ensure safety. I independently
              completed all stages of the project and worked in a completely
              self-directed manner. Through the use of Next.js and TypeScript,
              I was able to enhance my technical skills and problem- solving abilities.
            </li>
            <li>
              <a href="https://github.com/mertsabinov/your-note-web-app">Link to Notes</a>
            </li>
          </ul>
          <div className={styles.timeLinePoint}></div>
          <h3>
            Front-end Developer, ProfileCard (December 2022
            - 2023)
          </h3>
          <ul>
            <li>
              ProfileCard enables users to create an online business card. It provides
              a secure way for users to store and share their profiles using Firebase
              Authentication and Realtime Database technologies. In this project, I worked
              independently using React and TypeScript, and developed my technical skills
            </li>
            <li>
              <a href="https://github.com/mertsabinov/profilecard.co">Link to ProfileCard</a>
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
