const CategoryCard = ({ category }) => {
  const { image_url, category_name } = category;
  return (
    <div>
      <div className="space-y-4">
        <img
          className="w-[220px] h-[220px] rounded-full"
          src={image_url}
          alt=""
        />
        <div>
          <h2 className="text-xl font-bold text-center">
            <span>{category_name}</span>
          </h2>
        </div>
      </div>
          <li className="text-center font-semibold relative group list-none w-1/2 mx-auto hover:cursor-pointer">
            <a>View Category</a>
            <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </li>
    </div>
  );
};

export default CategoryCard;
