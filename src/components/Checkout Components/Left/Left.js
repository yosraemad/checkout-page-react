import styles from "./Left.module.css";

const Left = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button>Log in</button>
        <button className={styles.signUp}>Sign Up</button>
      </div>
      <label>Shipping Information</label>
      <div className={styles.inputs}>
        <input placeholder="Email" />
        <input placeholder="Address" />
        <input placeholder="First Name" />
        <input placeholder="City" />
        <input placeholder="Last Name" />
        <input placeholder="Postal code / ZIP" />
        <input placeholder="Phone Number" />
        <input placeholder="Poland" />
      </div>
    </div>
  );
};

export default Left;
