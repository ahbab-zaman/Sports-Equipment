import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  console.log(product);
  const { photo, price, rating, item, description, _id} = product;
  return (
    <div>
      <div className="bg-[#ffffff76] shadow-xl space-y-2 p-6">
        <img className="h-[220px]" src={photo} alt="" />
        <h3 className="text-xl font-semibold">Product name: {item}</h3>
        <h3 className="text-sm font-semibold">{description}....</h3>
        <div className="flex justify-between items-center gap-6">
          <p className="text-lg font-semibold">
            Price: $<span className="font-bold">{price}</span>
          </p>
          <p className="text-lg font-semibold">
            Rating: <span className="font-bold">{rating}</span>
          </p>
        </div>
        <div>
            <Link to={`/viewAll/${_id}`}><button className="btn px-3 rounded-none py-2 bg-[#1c1c1ccd] text-white font-semibold">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
