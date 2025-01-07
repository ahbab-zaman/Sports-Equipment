import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyUser = ({ list, setDeleteProduct, deleteProduct }) => {
  const { item, photo, category, _id, price, rating } = list;
  
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
