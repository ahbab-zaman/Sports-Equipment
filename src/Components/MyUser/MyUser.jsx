import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyUser = ({ list, setDeleteProduct, deleteProduct }) => {
  const { item, photo, category, _id, price, rating } = list;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingProduct = deleteProduct.filter(
                (product) => product._id !== id
              );
              setDeleteProduct(remainingProduct);
            }
          });
      }
    });
  };
  return (
    <div className="">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="">
          <img className="w-full h-[300px]" src={photo} alt="Equipment" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{item}</h2>
          <p className="text-lg font-semibold">
            Category: <span>{category}</span>
          </p>
          <div className="flex justify-between items-center font-semibold">
            <p>
              Price: $<span>{price}</span>
            </p>
            <p>
              Rating : <span>{rating}</span>
            </p>
          </div>
          <div>
            <Link to={`/viewAll/${_id}`}>
              <p className="link font-semibold">View Details</p>
            </Link>
          </div>
          <div className="flex justify-between items-center space-y-2">
            <Link to={`/updateProduct/${_id}`}>
              <button className="px-4 py-2 bg-[#1c1c1ccd] text-[#fff] font-semibold">
                Update
              </button>
            </Link>
            <Link>
              <button
                onClick={() => handleDelete(_id)}
                className="px-4 py-2 bg-[#1c1c1ccd] text-[#fff] font-semibold"
              >
                Delete
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyUser;
