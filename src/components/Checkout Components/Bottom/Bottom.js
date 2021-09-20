import BackButtonIcon from "../../../assets/icons/BackButton";
import styles from "./Bottom.module.css";

const Bottom = () => {
  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <BackButtonIcon />
        <p>Back</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.continue}>Continue Shopping</button>
        <button>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default Bottom;
