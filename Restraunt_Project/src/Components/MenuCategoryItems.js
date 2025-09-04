import { CLOUDINARY_URL } from "../utils/Images";

const MenuCategoryItems = ({ categoryItems }) => {
  console.log("CI", categoryItems);
  return (
    <div className="">
      {categoryItems?.map((item) => {
        const { id, name, description, price, defaultPrice, imageId } =
          item.card.info;
        return (
          <div key={id}>
            <div className="border-b-2 border-gray-200 my-4 py-8 flex justify-between items-center">
              <div className="flex flex-col gap-1  overflow-ellipsis">
                <p>{name}</p>
                <p>{description}</p>
                <p>₹{(price || defaultPrice) / 100}</p>
              </div>
              <div className="bg-amber-300 w-64 aspect-square overflow-hidden rounded-2xl">
                <img
                  className="w-full h-full object-cover"
                  src={CLOUDINARY_URL + imageId}
                  alt="dd"
                ></img>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MenuCategoryItems;
