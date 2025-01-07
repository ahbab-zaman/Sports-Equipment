import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const { user } = useContext(AuthContext);
  const updatedData = useLoaderData();
  console.log(updatedData)

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const item = form.item.value;
    const category = form.category.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const rating = form.rating.value;
    const custom = form.custom.value;
    const price = form.price.value;
    const process = form.process.value;
    const stock = form.stock.value;
    const name = form.name.value;
    const email = form.email.value;
    const updatedEquipments = {
      item,
      category,
      description,
      photo,
      rating,
      custom,
      price,
      process,
      stock,
      name,
      email,
    };
    console.log(updatedEquipments);

fetch(`https://equi-sports-server-side-two.vercel.app/allProducts/${updatedData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedEquipments),
    })
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: 'Item Updated Successfully',
              text: 'Check Your Equipment LIst',
              icon: 'success',
              confirmButtonText: 'OK'
            })
        }
      });
  };

  return (
    <div>
      <div className="w-11/12 mx-auto py-6">
        <form onSubmit={handleUpdate}>
          <div className="flex flex-col border p-4 rounded-xl">
            <div className="flex items-center justify-center lg:gap-6 gap-2">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Item Name</span>
                </label>
                <input
                  type="text"
                  name="item"
                  defaultValue={updatedData.item}
                  placeholder="Enter item name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Category Name</span>
                </label>
                <input
                  type="text"
                  name="category"
                  defaultValue={updatedData.category}
                  placeholder="Enter category name"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-center lg:gap-6 gap-2">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  defaultValue={updatedData.description}
                  placeholder="Enter item description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={updatedData.photo}
                  placeholder="Enter photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-center lg:gap-6 gap-2">
              <div className="form-control w-1/3">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  defaultValue={updatedData.rating}
                  placeholder="Enter item rating"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/3">
                <label className="label">
                  <span className="label-text">Customization</span>
                </label>
                <input
                  type="text"
                  name="custom"
                  defaultValue={updatedData.custom}
                  placeholder="Enter the customization"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/3">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={updatedData.price}
                  placeholder="Enter item price"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-center lg:gap-6 gap-2">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Processing Time</span>
                </label>
                <input
                  type="text"
                  name="process"
                  defaultValue={updatedData.process}
                  placeholder="Enter Item Processing Time"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">In Stock</span>
                </label>
                <input
                  type="text"
                  name="stock"
                  defaultValue={updatedData.stock}
                  placeholder="Enter Item Quantity"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-center lg:gap-6 gap-2">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={user?.displayName}
                  placeholder="Enter Item User Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={user?.email}
                  placeholder="Enter User Email"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="py-4">
              <button className="bg-[#1c1c1ccd] text-[#fff] w-full py-2 rounded-md font-semibold">
                Update Equipment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
