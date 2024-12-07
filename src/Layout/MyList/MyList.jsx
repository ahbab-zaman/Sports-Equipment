import { useLoaderData, useParams } from "react-router-dom";
import Title from "../../Components/Title/Title";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyUser from "../../Components/MyUser/MyUser";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [myUser, setMyUser] = useState([]);
  Title("My Equipment List");
  useEffect(() => {
    fetch(`http://localhost:5000/myProducts/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyUser(data);
      });
  }, []);

  return (
    <div>
      <div className="w-11/12 mx-auto grid lg:grid-cols-3 grid-cols-1 gap-6 py-12">
        {myUser.map((list) => (
          <MyUser list={list} key={list._id}></MyUser>
        ))}
      </div>
    </div>
  );
};

export default MyList;
