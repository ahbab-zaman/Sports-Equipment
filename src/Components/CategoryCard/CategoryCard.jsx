const CategoryCard = ({category}) => {
    const {image_url, category_name} = category
    return (
        <div>
            <div className="space-y-4">
                <img className="w-[350px] h-[350px] rounded-full" src={image_url} alt="" />
               <div>
               <h2 className="text-2xl font-bold text-center"><span>{category_name}</span></h2>
               <p className="link text-center font-semibold">View category</p>
               </div>
            </div>
        </div>
    );
};

export default CategoryCard;