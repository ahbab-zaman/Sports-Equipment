import { useLoaderData, useParams } from "react-router-dom";
import Title from "../../Components/Title/Title";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyUser from "../../Components/MyUser/MyUser";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [myUser, setMyUser] = useState([]);
  const [deleteProduct, setDeleteProduct] = useState(myUser)
  console.log(deleteProduct)
  Title("My Equipment List");
  useEffect(() => {
    fetch(`https://equi-sports-server-side-two.vercel.app/myProduct/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setDeleteProduct(data);
      });
  }, []);

  return (
    <div>
      <div className="w-11/12 mx-auto grid lg:grid-cols-3 grid-cols-1 gap-6 py-12">
        {deleteProduct.map((list) => (
          <MyUser list={list} key={list._id} deleteProduct={deleteProduct} setDeleteProduct={setDeleteProduct}></MyUser>
        ))}
      </div>
    </div>
  );
};

export default MyList;
