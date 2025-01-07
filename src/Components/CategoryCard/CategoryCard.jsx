const CategoryCard = ({ category }) => {
  const { image_url, category_name } = category;
  return (
    <div>
      <div data-aos="zoom-in" className="space-y-4">
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
    </div>
  );
};

export default CategoryCard;
