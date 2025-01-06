import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductSection = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            setProducts(data)
        })
    },[])
    return (
        <div className="w-11/12 mx-auto py-8">
           <div className="text-center space-y-2">
            <h2 className="text-4xl font-semibold">Explore Our Products</h2>
            <p className="w-1/2 mx-auto">These are top brand products of our company. We both import and export these to foreign country.</p>
           </div>
           <div className="grid lg:grid-cols-4 grid-cols-1 py-4 gap-4">
                {
                    products.map(product => <ProductCard product={product} key={product._id}></ProductCard>)
                }
           </div>

        </div>
    );
};

export default ProductSection;