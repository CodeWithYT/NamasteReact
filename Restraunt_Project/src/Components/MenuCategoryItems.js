import { CLOUDINARY_URL } from "../utils/Images";

const MenuCategoryItems = ({ categoryItems }) => {
  return (
    <div>
      {categoryItems?.map((item, index) => {
        const { id, name, description, price, defaultPrice, imageId } =
          item.card.info;
        const isLastItem = index === categoryItems.length - 1;
        return (
          <div key={id}>
            <div
              className={`flex justify-between gap-4 my-4 ${
                !isLastItem ? "pb-4 border-b border-gray-200" : ""
              }`}
            >
              <div className="flex flex-col gap-1 pr-4 ">
                <p className="font-semibold text-lg">{name}</p>
                <p className="line-clamp-2 text-sm text-gray-600">
                  {description}
                </p>
                <p className="text-md font-medium">
                  ₹{(price || defaultPrice) / 100}
                </p>
              </div>
              <div className="w-40 h-40 overflow-hidden rounded-2xl flex-shrink-0 relative">
                <img
                  className="w-full h-full object-cover"
                  src={CLOUDINARY_URL + imageId}
                  alt={name}
                ></img>
                <button className="px-2 m-2 bg-black text-white outline-none rounded-lg h-8 w-auto hover:cursor-pointer absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  Add+
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MenuCategoryItems;
