import { Link, useLoaderData } from "react-router-dom";
import Title from "../../Components/Title/Title";

const AllEquipment = () => {
  const allEquipment = useLoaderData();
  console.log(allEquipment);

  Title("All Equipment");
  return (
    <div>
      <div className="overflow-x-auto px-2 pl-6">
        <table className="table border border-collapse">
          {/* head */}
          <thead className="bg-base-200">
            <tr >
              <th >SL No.</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody >
            {allEquipment.map((equipment, idx) => (
              <tr equipment={equipment} key={equipment._id} className="hover">
                <th>{idx + 1}</th>
                <td><img className="w-10" src={equipment.photo} alt="" /></td>
                <td>{equipment.item}</td>
                <td>{equipment.category}</td>
                <td>${equipment.price}</td>
                <td className="px-0"><Link to={`/viewAll/${equipment._id}`}><button className="px-3 py-1 text-[12px] lg:text-base bg-[#1c1c1ccd] font-semibold text-[#fff]">View Details</button></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEquipment;
