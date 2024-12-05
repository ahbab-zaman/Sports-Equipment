import Title from "../../Components/Title/Title";

const AddEquipment = () => {
  Title("Add Equipment");
  return (
    <div className="w-11/12 mx-auto py-6">
      <form>
        <div className="flex flex-col border p-4 rounded-xl">
          <div className="flex items-center justify-center gap-6">
            <div className="form-control w-full">
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
            <div className="form-control w-full">
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

          <div className="flex items-center justify-center gap-6">
            <div className="form-control w-full">
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
            <div className="form-control w-full">
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

          <div className="flex items-center justify-center gap-6">
            <div className="form-control w-full">
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
            <div className="form-control w-full">
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
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter item price"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-6">
            <div className="form-control w-full">
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
            <div className="form-control w-full">
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

          <div className="flex items-center justify-center gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Item User Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="email"
                name="email"
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
