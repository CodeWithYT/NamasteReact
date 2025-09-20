import { useDispatch } from "react-redux";
import { CLOUDINARY_URL } from "../utils/Images";
import { removeItem } from "../utils/cartSlice";

const CartItems = ({ addItems }) => {
  console.log(addItems);
  const dispatch = useDispatch();
  let total = 0;
  return (
    <div>
      {addItems?.map((item, index) => {
        const { id, name, description, price, defaultPrice, imageId } =
          item.card.info;
        const isLastItem = index === addItems.length - 1;
        total += price;
        return (
          <div key={index}>
            <div
              className={`flex justify-between gap-4 my-4 ${
                !isLastItem ? "pb-4 border-b border-gray-200" : ""
              }`}
            >
              <div className="flex flex-col gap-1 pr-4 ">
                <p className="font-semibold text-lg">{name}</p>
                <p className="line-clamp-2 text-sm text-gray-600">
                  {description}
                </p>
                <p className="text-md font-medium">
                  ₹{(price || defaultPrice) / 100}
                </p>
              </div>
              <div className="w-40 h-40 overflow-hidden rounded-2xl flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  src={CLOUDINARY_URL + imageId}
                  alt={name}
                ></img>
              </div>
              <div>
                <button
                  className="hover: cursor-pointer"
                  onClick={() => dispatch(removeItem(id))}
                >
                  ❌
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className="border-t-16 border-gray-200">
        <div className="px-4">
          <p>Billing Details</p>
          <div className="flex justify-between">
            <p>Item Total</p>
            <p className="font-bold">
              {addItems.length ? total / 100 + "/-" : ""}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItems;
