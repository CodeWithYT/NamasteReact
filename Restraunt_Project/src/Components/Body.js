import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Body = ({api, freshList, setFreshList, originalData}) => {
    let [isTopRated, setIsTopRated] = useState(false);
    let [isFastDelivered, setIsFastDelivered] = useState(false);
    
    const filters = (isTopRated, isFastDelivered) => {
        let filteredList = [...originalData];
        filteredList = isTopRated ? filteredList.filter((product) => product.info.avgRating >= 4).sort((a,b) => b.info.avgRating - a.info.avgRating) : filteredList;
        filteredList = isFastDelivered ? filteredList.sort((a,b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime) : filteredList;
        setFreshList(filteredList);
    }

    return freshList === null ? (console.log("shimmer called"), <Shimmer/>) : (
        <div className="body">
            {/* <div className="hero-image-container"></div> */}
            <div className="title">
                <p>{api?.data?.cards[2]?.card?.card?.title}</p>
            </div>
            <div className="filters">
                <button className={`filter ${isTopRated ? "active" : ""}`} onClick={() => {
                    const filter = !isTopRated;
                    setIsTopRated(filter);
                    filters(filter, isFastDelivered);
                }}
                >Top Rated</button>
                <button className={`filter ${isFastDelivered ? "active" : ""}`} onClick={() => {
                    const filter = !isFastDelivered;
                    setIsFastDelivered(filter);
                    filters(isTopRated, filter);
                }}
                >Less Delivery Time</button>
            </div>
            <div className="card-container">
                {freshList.map(item => (
                    <Card key = {item.info.id} res = {item} />
                ))}
            </div>
            <div className="hero-image-container">
            </div>
        </div>
    )
}
export default Body;