import { useState, useEffect, use } from "react";
import Shimmer from "./Shimmer";
import MenuCategories from "./MenuCategories";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/data";

const RestaurantMenu = () => {
  const [resData, setResData] = useState(null);
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResData(json);
  };

  if (resData === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resData?.data?.cards[2]?.card?.card?.info || {};
  const { slaString, deliveryTime } =
    resData?.data?.cards[2]?.card?.card?.info?.sla;

  const menuCategories =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="w-6/12 m-auto font-gilroy">
      <div className="my-6 border-b-2 border-gray-300 text-center">
        <p className="font-extrabold text-3xl mb-2 ">{name}</p>
        <div className="flex flex-wrap font-bold mb-4 gap-2 text-gray-400 justify-center ">
          <p>{cuisines.join(", ")}</p>
          <p>- {costForTwoMessage}</p>
        </div>
      </div>
      {menuCategories.map((category, index) => (
        <MenuCategories
          key={category.card?.card?.title}
          menuCategories={category}
          isCategoryItemsVisible={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
