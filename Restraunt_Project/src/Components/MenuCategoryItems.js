const MenuCategoryItems = ({ categoryItems }) => {
  return (
    <div className="category-items">
      {categoryItems?.map((item) => {
        const { id, name, description, price, defaultPrice } = item.card.info;
        return (
          <div className="item-card" key={id}>
            <p>{name}</p>
            <p>{description}</p>
            <p>₹{(price || defaultPrice) / 100}</p>
          </div>
        );
      })}
    </div>
  );
};
export default MenuCategoryItems;
