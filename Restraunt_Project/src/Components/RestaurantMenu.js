import { useState, useEffect, use } from "react";
import Shimmer from "./Shimmer";
import MenuItems from "./MenuCategories";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/data";

const RestaurantMenu = () => {
  const [resData, setResData] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResData(json);
  };

  if (resData === null) return <Shimmer />;

  const {
    id,
    name,
    cuisines,
    areaName,
    avgRating,
    totalRating,
    costForTwoMessage,
  } = resData?.data?.cards[2]?.card?.card?.info;
  const { slaString, deliveryTime } =
    resData?.data?.cards[2]?.card?.card?.info?.sla;

  const menuCategories =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="restaurant-menu">
      <div className="restaurant-info">
        <h2>{name}</h2>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating}</p>
        <p>{totalRating}</p>
        <p>{costForTwoMessage}</p>
        <p>{areaName}</p>
      </div>
      <MenuItems menuCategories={menuCategories} />
    </div>
  );
};
export default RestaurantMenu;
