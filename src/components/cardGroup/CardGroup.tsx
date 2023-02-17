import Card from "../card/Card";
import styles from "./CardGroup.module.css";

const CardGroup = () => {
  return (
    <div className={styles.container}>
      <Card
        img="https://raw.githubusercontent.com/mertsabinov/mertsabinov.com/v1/src/assets/logo/profilecard.png"
        title="profilecard.co"
        url="https://www.profilecard.co/"
      />
      <Card
        img="https://raw.githubusercontent.com/mertsabinov/mertsabinov.com/v1/src/assets/logo/workflow.webp"
        title="Workflow Premium"
        url="https://play.google.com/store/apps/details?id=mds.workflow&hl=tr&gl=US"
      />
    </div>
  );
};

export default CardGroup;
