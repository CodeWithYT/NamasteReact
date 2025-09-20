import { useContext } from "react";
import { LOGO, CART, WISHLIST, SWIGGY } from "../utils/Images";
import { data } from "../utils/data";
import Search from "./Search";
import AppContext from "../utils/AppContext";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { originalData, freshList, setFreshList } = useContext(AppContext);
  const { user } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header">
      <div className="left-container">
        <div className="image-container">
          <Link to={"/"}>
            <img src={SWIGGY} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="right-container">
        <div>
          <span>{onlineStatus ? "🟢 online" : "🔴 offline"}</span>
        </div>
        <Search />
        <div className="profile-container"></div>
        <div>{user.name}</div>
        <img
          src={WISHLIST}
          alt="wish-list"
          className="hover:cursor-pointer"
        ></img>
        <div className="py-2 pr-3 flex items-center relative hover:cursor-pointer">
          <Link to="/cart">
            <img src={CART} alt="cart"></img>
          </Link>
          {cartItems.length ? (
            <div className="absolute right-0 top-0">
              <span className="font-bold rounded-full bg-red-600 text-white px-2 py-1">
                {cartItems.length}
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
