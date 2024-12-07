import { useState } from "react";
import { Link } from "react-router-dom";

const MyUser = ({ list, setDeleteProduct, deleteProduct }) => {
  const { item, photo, category, _id, price, rating } = list;
  const handleDelete = (id) =>{
    console.log(id)
    fetch(`https://equi-sports-server-side-two.vercel.app/products/${id}`,{
      method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)

      if(data.deletedCount > 0){
        alert("Product deleted successfully")

        const remainingProduct = deleteProduct.filter(product => product._id !== id)
        setDeleteProduct(remainingProduct)
      }
    })
  }
  return (
    <div className="">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="w-full">
          <img
            src={photo}
            alt="Equipment"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{item}</h2>
          <p className="text-lg font-semibold">Category: <span>{category}</span></p>
          <div className="flex justify-between items-center font-semibold">
            <p>Price: $<span>{price}</span></p>
            <p>Rating : <span>{rating}</span></p>
          </div>
          <div>
            <Link to={`/viewAll/${_id}`}><p className="link font-semibold">View Details</p></Link>
          </div>
          <div className="flex justify-between items-center space-y-2">
            <Link to={`/updateProduct/${_id}`}><button className="px-4 py-2 bg-[#1c1c1ccd] text-[#fff] font-semibold">Update</button></Link>
            <Link><button onClick={()=>handleDelete(_id)} className="px-4 py-2 bg-[#1c1c1ccd] text-[#fff] font-semibold">Delete</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyUser;
