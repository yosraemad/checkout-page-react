import Labels from "./Labels";

import styles from "./CartItems.module.css";
import Item from "./Item";

const CartItems = () => {
  return (
    <main className={styles.container}>
      <Labels className={styles.labels} />
      <Item
        detailsClassName={styles.details}
        idClassName={styles.id}
        buttonClassName={styles.button}
        boldClassName={styles.bold}
        removeButtonClassName={styles["remove-button"]}
        image="data:image/jpeg;base64,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"
        name="T-shirt Summer Vibes"
        id="261311"
        color="White"
        size="XL"
        amount="1"
        price={89.99}
      />
      <Item
        detailsClassName={styles.details}
        buttonClassName={styles.button}
        idClassName={styles.id}
        boldClassName={styles.bold}
        removeButtonClassName={styles["remove-button"]}
        image="data:image/jpeg;base64,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"
        name="Basic Slim Fit T-shirt"
        id="212315"
        color="Black"
        size="XL"
        amount="1"
        price={69.99}
      />
    </main>
  );
};

export default CartItems;
