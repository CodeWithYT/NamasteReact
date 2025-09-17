import { useState, useContext } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import AppContext from "../utils/AppContext";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const { api, freshList, setFreshList, originalData } = useContext(AppContext);
  const [isTopRated, setIsTopRated] = useState(false);
  const [isFastDelivered, setIsFastDelivered] = useState(false);
  const { user, setUserName } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();

  const filters = (isTopRated, isFastDelivered) => {
    let filteredList = [...originalData];
    filteredList = isTopRated
      ? filteredList
          .filter((product) => product.info.avgRating >= 4)
          .sort((a, b) => b.info.avgRating - a.info.avgRating)
      : filteredList;
    filteredList = isFastDelivered
      ? filteredList.sort(
          (a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime
        )
      : filteredList;
    setFreshList(filteredList);
  };
  if (!onlineStatus) return <h1>you are offline!</h1>;
  return freshList === null ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="hero-image-container"></div> */}

      <div className="title">
        <p>{api?.data?.cards[2]?.card?.card?.title}</p>
      </div>
      <div className="filters">
        <button
          className={`filter ${isTopRated ? "active" : ""}`}
          onClick={() => {
            const filter = !isTopRated;
            setIsTopRated(filter);
            filters(filter, isFastDelivered);
          }}
        >
          Top Rated
        </button>
        <button
          className={`filter ${isFastDelivered ? "active" : ""}`}
          onClick={() => {
            const filter = !isFastDelivered;
            setIsFastDelivered(filter);
            filters(isTopRated, filter);
          }}
        >
          Less Delivery Time
        </button>
      </div>
      <div className="card-container">
        {freshList.map((item) => (
          <Link key={item.info.id} to={"/restaurant/" + item.info.id}>
            {" "}
            <Card res={item} />{" "}
          </Link>
        ))}
      </div>
      <div className="hero-image-container"></div>
    </div>
  );
};
export default Body;
