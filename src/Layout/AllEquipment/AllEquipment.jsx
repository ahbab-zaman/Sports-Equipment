import { Link, useLoaderData } from "react-router-dom";
import Title from "../../Components/Title/Title";

const AllEquipment = () => {
  const allEquipment = useLoaderData();
  console.log(allEquipment);

  Title("All Equipment");
  return (
    <div>
      <div className="overflow-x-auto px-2">
        <table className="table ">
          {/* head */}
          <thead>
            <tr >
              <th className="hidden lg:table"></th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th className="hidden lg:table">Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody >
            {allEquipment.map((equipment, idx) => (
              <tr equipment={equipment} key={equipment._id}>
                <th className="hidden lg:table">{idx + 1}</th>
                <td><img className="w-10" src={equipment.photo} alt="" /></td>
                <td>{equipment.item}</td>
                <td>{equipment.category}</td>
                <td className="hidden lg:table">{equipment.price}</td>
                <td className="px-0"><Link><button className="px-3 py-1 text-[12px] lg:text-base bg-[#1c1c1ccd] text-[#fff]">View Details</button></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEquipment;
