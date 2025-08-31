const Card = ({res}) => {
    const {id, cloudinaryImageId, name, cuisines, costForTwo, avgRating, totalRatingsString, sla, locality } = res.info;
    return (
        <div className="card">
            <div className="product-image">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId} alt={name}></img>
            </div>
            <div className="product-details">
                <p className="name">{name}</p>
                <p className="description">{cuisines.join(", ")}</p>
                <p className="locality">{locality}</p>
                <div className="rating">
                    <div className="rating-info">
                        <p>{"⭐"+ avgRating }</p>
                        <p>{"("+totalRatingsString+")"}</p>
                    </div>
                    <div className="price">
                        {/* <p className="original-price">199/-</p> */}
                        <p className="discounted-price">{res.info.sla.slaString}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Card;