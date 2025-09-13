import { useContext } from "react";
import { LOGO, CART, WISHLIST, SWIGGY } from "../utils/Images";
import { data } from "../utils/data";
import Search from "./Search";
import AppContext from "../utils/AppContext";
import UserContext from "../utils/UserContext";

const Header = () => {
  const { originalData, freshList, setFreshList } = useContext(AppContext);
  const { user } = useContext(UserContext);
  return (
    <div className="header">
      <div className="left-container">
        <div className="image-container">
          <img src={SWIGGY} alt="logo" />
        </div>
      </div>
      <div className="right-container">
        <Search />
        <div className="profile-container"></div>
        <div>{user.name}</div>
        <img src={WISHLIST} alt="wish-list"></img>
        <img src={CART} alt="cart"></img>
      </div>
    </div>
  );
};
export default Header;
