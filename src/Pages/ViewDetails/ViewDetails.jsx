import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    category,
    custom,
    photo,
    item,
    description,
    price,
    process,
    rating,
    stock,
  } = data;
  return (
    <div className="pt-16 pb-12">
      <div className="hero bg-slate-100 w-11/12 mx-auto p-4 shadow-xl">
        <div className="hero-content  flex-col lg:flex-row">
          <div className="w-1/2">
            <img
              src={photo}
              className="w-full bg-[#fff] rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-full">
            <h1 className="text-5xl font-bold">{item}</h1>
            <p className="py-4 w-full text-lg font-semibold text-slate-500">
              {description}
            </p>
            <h2 className="w-full text-lg font-semibold text-gray-600">
              {category}
            </h2>
            <div className="py-4 flex items-center justify-between lg:w-1/2 w-full">
              <p className="text-lg font-bold">${price}</p>
              <p className="text-lg font-bold flex items-center gap-1"><FaStar></FaStar> {rating}</p>
            </div>
            <div className="flex flex-col  lg:justify-between lg:gap-6 gap-0">
              <h1 className="text-xl font-semibold">Availability: </h1>
              <li className="text-lg font-semibold">{custom}</li>
              <li className="text-lg font-semibold">
                Processing Time: <span>{process}</span>
              </li>
              <li className="text-lg font-semibold">
                In Stock: <span>{stock}</span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
