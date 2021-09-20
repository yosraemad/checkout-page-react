import Logo from "../../assets/icons/Logo";
import Categories from "./Categories";
import CompanyName from "./CompanyName";
import HeaderIcons from "./HeaderIcons";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header>
        <div className={styles.logo}>
          <Logo />
          <CompanyName className={styles.name} />
        </div>
        <Categories className={styles.categories} />
        <HeaderIcons className={styles.icons} />
      </header>
      <hr />
    </>
  );
};

export default Header;
