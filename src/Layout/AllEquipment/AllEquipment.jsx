import { Link, useLoaderData } from "react-router-dom";
import Title from "../../Components/Title/Title";
import { useState } from "react";

const AllEquipment = () => {
  const allEquipment = useLoaderData();
  const [sortItem, setSortItem] = useState(allEquipment);
  const handleSort = () => {
    fetch("https://equi-sports-server-side-two.vercel.app/allProduct")
      .then((res) => res.json())
      .then((data) => {
        setSortItem(data);
      });
  };

  Title("All Equipment");
  return (
    <div>
      <div className="w-11/12 mx auto flex justify-between items-center py-6">
        <div></div>
        <div>
          <button
            onClick={() => handleSort("price")}
            className="btn rounded-none py-2 px-4 text-[#fff] font-bold bg-[#1c1c1ccd]"
          >
            Sort By Price
          </button>
        </div>
      </div>
      <div className="overflow-x-auto px-2 pb-6 pl-6">
        <table className="table border border-collapse">
          {/* head */}
          <thead className="bg-base-200">
            <tr>
              <th>SL No.</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sortItem.map((equipment, idx) => (
              <tr equipment={equipment} key={equipment._id} className="hover">
                <th>{idx + 1}</th>
                <td>
                  <img className="w-10" src={equipment.photo} alt="" />
                </td>
                <td>{equipment.item}</td>
                <td>{equipment.category}</td>
                <td>${equipment.price}</td>
                <td className="px-0">
                  <Link to={`/viewAll/${equipment._id}`}>
                    <button className="px-3 py-1 text-[12px] lg:text-base bg-[#1c1c1ccd] font-semibold text-[#fff]">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEquipment;
