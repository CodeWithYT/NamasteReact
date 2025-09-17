import { useState } from "react";
import MenuCategoryItems from "./MenuCategoryItems";

const MenuCategories = ({
  menuCategories,
  isCategoryItemsVisible,
  setShowIndex,
}) => {
  const showCategoryItems = () => {
    setShowIndex();
  };
  return (
    <div className="font-gilroy flex flex-col gap-4 mb-10">
      <div
        className="flex justify-between cursor-pointer font-extrabold text-lg my-4"
        onClick={() => showCategoryItems()}
      >
        <p>
          {menuCategories.card.card.title +
            `${" (" + menuCategories?.card?.card?.itemCards.length + ")"}`}
        </p>
        <p>🔽</p>
      </div>
      {isCategoryItemsVisible && (
        <MenuCategoryItems
          categoryItems={menuCategories?.card?.card?.itemCards}
        />
      )}
      <div className=" border-b-[15] border-gray-100"></div>
    </div>
  );
};
export default MenuCategories;
