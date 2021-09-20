import ShoppingCartProgressIcon from "../../assets/icons/ShoppingCartProgress";
import styles from "./PageHeader.module.css";

const PageHeader = (props) => {
  return (
    <div className={styles.header}>
      <p>{props.text}</p>
      <ShoppingCartProgressIcon checkout={props.isCheckout} />
    </div>
  );
};

export default PageHeader;
