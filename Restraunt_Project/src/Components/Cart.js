import { useSelector } from "react-redux";
import MenuCategoryItems from "./MenuCategoryItems";
import CartItems from "./CartItems";
import { EMPTYCART } from "../utils/Images";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="w-6/12 mx-auto">
      <p className="font-extrabold text-3xl my-3 border-b py-3 border-gray-400 text-center">
        Cart
      </p>
      {cartItems.length ? (
        <CartItems addItems={cartItems} />
      ) : (
        <div className=" w-6/12 m-auto text-center">
          <img src={EMPTYCART} alt="cart empty"></img>
          <p className="font-bold text-xl text-gray-700">Your cart is empty</p>
          <p className="text-gray-600">
            You can go to home page to view more restaurants
          </p>
          <Link to={"/"}>
            <button className="hover:cursor-pointer hover:shadow-lg px-4 py-2 font-bold m-4 bg-orange-500 text-white">
              SEE RESTAURANTS NEAR YOU
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
