import { useEffect, useState } from "react";

const useRestaurantData = (url) => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const response = await fetch(url);
    const json = await response.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setData(restaurants);
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return data;
};
export default useRestaurantData;
