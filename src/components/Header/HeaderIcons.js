import ProfileIcon from "../../assets/icons/Profile";
import SearchIcon from "../../assets/icons/Search";
import ShoppingCartIcon from "../../assets/icons/ShoppingCart";

const HeaderIcons = (props) => {
  return (
    <div className={props.className}>
      <SearchIcon />
      <ShoppingCartIcon />
      <ProfileIcon />
    </div>
  );
};

export default HeaderIcons;
