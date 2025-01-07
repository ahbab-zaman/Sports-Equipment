import Title from "../../Components/Title/Title";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../Components/ProductCard/ProductCard";
import LazyLoad from "react-lazy-load";

const AllEquipment = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://equi-sports-server-side-two.vercel.app/allProduct")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  Title("All Equipment");
  return (
    <div>
      <div className="text-center space-y-2 pt-24 pb-6">
        <h2 className="text-4xl font-semibold">Explore Our Products</h2>
        <p className="w-1/2 mx-auto">
          These are top brand products of our company. We both import and export
          these to foreign country.
        </p>
      </div>
      <LazyLoad height={762}>
        <div className="w-11/12 mx-auto grid lg:grid-cols-4 grid-cols-1 gap-4 py-4">
          {products.map((product) => (
            <ProductCard product={product} key={product._id}></ProductCard>
          ))}
        </div>
      </LazyLoad>
    </div>
  );
};

export default AllEquipment;
