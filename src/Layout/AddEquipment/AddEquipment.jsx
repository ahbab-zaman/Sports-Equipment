import { useContext } from "react";
import Title from "../../Components/Title/Title";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddEquipment = () => {
  Title("Add Equipment");
  const { user, setUser } = useContext(AuthContext);
  const handleAddEquipment = (e) => {
    e.preventDefault();
    const form = e.target;
    const item = form.item.value;
    const category = form.category.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const rating = form.rating.value;
    const custom = form.custom.value;
    const price = parseInt(form.price.value);
    const process = form.process.value;
    const stock = form.stock.value;
    const name = form.name.value;
    const email = form.email.value;
    const newEquipments = {
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
    console.log(newEquipments);

    fetch("https://equi-sports-server-side-two.vercel.app/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newEquipments),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        Swal.fire({
          title: "Item Added Successfully",
          text: "Check Your Equipment LIst",
          icon: "success",
          confirmButtonText: "OK",
        });
        form.reset();
      });
  };

  return (
    <div className="w-11/12 mx-auto py-6">
      <form onSubmit={handleAddEquipment}>
        <div className="flex flex-col border p-4 rounded-xl">
          <div className="flex items-center justify-center lg:gap-6 gap-2">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Item Name</span>
              </label>
              <input
                type="text"
                name="item"
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
                type="number"
                name="price"
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
              Add Equipment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEquipment;
