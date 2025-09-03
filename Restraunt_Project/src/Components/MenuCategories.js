import MenuCategoryItems from "./MenuCategoryItems";

const MenuItems = ({ menuCategories }) => {
  console.log("MenuItems", menuCategories);
  return (
    <div className="menu-items">
      {menuCategories.map((category) => {
        return (
          <div className="menu-category" key={category.card.card.title}>
            <div className="category-title">
              <h2>
                {category.card.card.title +
                  `${" (" + category?.card?.card?.itemCards.length + ")"}`}
              </h2>
            </div>
            <MenuCategoryItems
              categoryItems={category?.card?.card?.itemCards}
            />
          </div>
        );
      })}
    </div>
  );
};
export default MenuItems;
