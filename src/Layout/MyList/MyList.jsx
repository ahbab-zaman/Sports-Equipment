import { Link, useLoaderData, useParams } from "react-router-dom";
import Title from "../../Components/Title/Title";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyUser from "../../Components/MyUser/MyUser";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [myUser, setMyUser] = useState([]);
  const [deleteProduct, setDeleteProduct] = useState(myUser);
  console.log(deleteProduct);
  Title("My Equipment List");
  useEffect(() => {
    fetch(`https://equi-sports-server-side-two.vercel.app/myProduct/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setDeleteProduct(data);
      });
  }, []);

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
        fetch(`https://equi-sports-server-side-two.vercel.app/products/${id}`, {
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
    <div>
      {deleteProduct.length === 0 ? (
        <> <h2 className="py-[140px] text-center text-3xl font-bold">No Data Found</h2></>
      ) : (
        <>
          <div className="w-11/12 mx-auto py-12">
            <div className="overflow-x-auto w-full py-6">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Action</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {deleteProduct.map((product, idx) => (
                    <tr product={product} key={product._id}>
                      <th>{idx + 1}</th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask h-12 w-12">
                              <img src={product.photo} alt="Product Image" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{product.item}</div>
                          </div>
                        </div>
                      </td>
                      <th>{product.category}</th>
                      <td onClick={() => handleDelete(product._id)}>
                        <MdDelete className="text-2xl hover:text-3xl hover:text-slate-600 hover:transition-all hover:duration-300"></MdDelete>
                      </td>
                      <Link to={`/updateProduct/${product._id}`}>
                        <td>
                          <FaEdit className="text-2xl hover:text-3xl hover:text-slate-600 hover:transition-all hover:duration-300"></FaEdit>
                        </td>
                      </Link>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyList;
