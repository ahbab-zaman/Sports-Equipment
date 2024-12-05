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
    <div className="py-12">
      <div className="hero bg-slate-100 w-11/12 mx-auto p-4 shadow-xl">
        <div className="hero-content w-full flex-col lg:flex-row">
          <div className="w-1/2 ">
          <img
            src={photo}
            className="max-w-sm bg-[#fff] rounded-lg shadow-2xl"
          />
          </div>
          <div className="w-3/4">
            <h1 className="text-5xl font-bold">{item}</h1>
            <p className="py-4 w-full text-lg font-semibold text-gray-600">Product description: <span>{description}</span></p>
            <h2 className="w-full text-lg font-semibold text-gray-600">Category: <span>{category}</span> </h2>
            <div className="py-4 flex items-center justify-between w-1/2">
                <p className="text-lg font-bold">Price: <span>{price}</span></p>
                <p className="text-lg font-bold">Rating: <span>${rating}</span></p>
            </div>
            <div className="py- flex items-center justify-between">
                <p className="text-lg font-semibold">Customization: <span>{custom}</span></p>
                <p className="text-lg font-semibold">Processing Time: <span>${process}</span></p>
                <p className="text-lg font-semibold">In Stock: <span>${stock}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
