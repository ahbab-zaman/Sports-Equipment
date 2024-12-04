const ProductCard = ({product}) => {
    console.log(product)
    const {product_title,  product_description, product_image, product_price, review} = product
    return (
        <div>
            <div className="bg-[#ffffff76] shadow-xl space-y-2 p-6">
            <img className="h-[220px]" src={product_image} alt="" />
                <h3 className="text-lg font-semibold">{product_title}</h3>
                <p className="text-sm font-semibold">{product_description}</p>
                <div className="flex justify-between items-center gap-6">
                    <p className="text-lg font-semibold">Price: $<span className="font-bold">{product_price}</span></p>
                    <p className="text-lg font-semibold">Review: <span className="font-bold">{review}</span></p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;