import { useState } from "react";
import MenuCategoryItems from "./MenuCategoryItems";

const MenuCategories = ({ menuCategories }) => {
  return (
    <div className="font-gilroy flex flex-col gap-4 mb-10">
      {menuCategories.map((category) => {
        const [isCategoryItemsVisible, setIsCategoryItemsVisible] =
          useState(false);
        return (
          <div className="" key={category.card.card.title}>
            <div
              className="flex justify-between cursor-pointer font-extrabold text-lg my-4"
              onClick={() => setIsCategoryItemsVisible(!isCategoryItemsVisible)}
            >
              <p>
                {category.card.card.title +
                  `${" (" + category?.card?.card?.itemCards.length + ")"}`}
              </p>
              <p>🔽</p>
            </div>
            {isCategoryItemsVisible && (
              <MenuCategoryItems
                categoryItems={category?.card?.card?.itemCards}
              />
            )}
            <div className=" border-b-[15] border-gray-100"></div>
          </div>
        );
      })}
    </div>
  );
};
export default MenuCategories;
