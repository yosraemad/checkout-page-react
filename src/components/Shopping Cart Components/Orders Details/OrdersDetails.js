import BackButtonIcon from "../../../assets/icons/BackButton";
import PromocodeIcon from "../../../assets/icons/Promocode";
import { Link } from "react-router-dom";

import styles from "./OrderDetails.module.css";

const OrdersDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <BackButtonIcon />
        <p>Continue Shopping</p>
      </div>
      <div className={styles.right}>
        <div className={styles.promocode}>
          <input placeholder="Promo Code" type="text"></input>
          <PromocodeIcon />
        </div>
        <p className={styles.cost}>
          Total Cost <span>$159,98</span>
        </p>
        <Link to="/checkout">
          <button className={styles.checkout}>Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default OrdersDetails;
