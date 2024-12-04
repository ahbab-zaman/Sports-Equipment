import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";

const ViewAllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./productSection.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className="w-11/12 mx-auto py-8">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-semibold">Explore Our Products</h2>
        <p className="w-1/2 mx-auto">
          These are top brand products of our company. We both import and export
          these to foreign country.
        </p>
      </div>
      <div className="grid grid-cols-3 py-4 gap-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ViewAllProducts;
