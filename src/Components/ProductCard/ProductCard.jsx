import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  console.log(product);
  const { photo, price, rating, item, description, _id } = product;
  return (
    <div>
      <div data-aos="fade-up" className="bg-[#fff] shadow-xl space-y-2 p-4 rounded-xl">
        <div>
          <img className="h-[150px] w-1/2 mx-auto" src={photo} alt="" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-[#222]">{item}</h3>
          <h3 className="text-sm text-gray-500">
            {description.slice(0, 60)}....
          </h3>
        <div className="flex justify-between items-center gap-6 text-[#222]">
            <p className="text-lg font-bold">${price}</p>
            <p className="text-lg font-bold flex items-center gap-1">
              <FaStar></FaStar> {rating}
            </p>
          </div>
          <div>
            <Link to={`/viewAll/${_id}`}>
              <button className="px-4 rounded-full
               py-2 text-sm bg-[#1c1c1ccd] text-white font-semibold hover:bg-base-200 hover:text-black hover:transition-all hover:duration-300">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
