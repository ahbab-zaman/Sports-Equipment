import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const ProductSection = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('./productSection.json')
        .then(res=> res.json())
        .then(data=> {
            setProducts(data)
        })
    },[])
    return (
        <div className="w-11/12 mx-auto py-8">
           <div className="text-center space-y-2">
            <h2 className="text-4xl font-semibold">Explore Our Products</h2>
            <p className="w-1/2 mx-auto">These are top brand products of our company. We both import and export these to foreign country.</p>
           </div>
           <div className="grid grid-cols-3 py-4 gap-4">
                {
                    products.map(product => <ProductCard product={product} key={product.id}></ProductCard>).slice(0,6)
                }
           </div>
           <div className="">
           <Link to="/viewAll"><button className="btn rounded-none btn-neutral w-3/4 flex mx-auto justify-center text-lg font-semibold">View Details</button></Link>
           </div>
        </div>
    );
};

export default ProductSection;