import { Link, useLoaderData } from "react-router-dom";
import Title from "../../Components/Title/Title";

const AllEquipment = () => {
  const allEquipment = useLoaderData();
  console.log(allEquipment);
  Title("All Equipment");
  return (
    <div>
      <div className="overflow-x-auto w-11/12 mx-auto">
        <table className="table w-11/12 mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Image</th>
              <th>Equipment Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {allEquipment.map((equipment, idx) => (
              <tr key={equipment._id} className="hover">
                <th>{idx + 1}</th>
                <th><img className="w-[40px]" src={equipment.photo} alt="" /></th>
                <td>{equipment.item}</td>
                <td>{equipment.category}</td>
                <td>{equipment.price}</td>
                <td><Link to={`/viewAll/${equipment._id}`}><button className="px-3 py-1 btn rounded-none bg-[#1c1c1ccd] text-[#fff]">View Details</button></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEquipment;
