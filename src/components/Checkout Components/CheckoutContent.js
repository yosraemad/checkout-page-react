import Left from "./Left/Left";
import styles from "./CheckoutModule.module.css";
import Center from "./Center/Center";
import Right from "./Right/Right";

const CheckoutContent = () => {
  return (
    <div className={styles["content"]}>
      <Left />
      <Center />
      <Right />
    </div>
  );
};

export default CheckoutContent;
