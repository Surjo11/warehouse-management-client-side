import React from "react";
import { useNavigate } from "react-router-dom";
const ManageButton = () => {
  const navigate = useNavigate();
  const manageInventoriesbtn = () => {
    navigate("/manageitems");
  };
  return (
    <div className="flex justify-center w-full mt-10 mb-10">
      <button
        onClick={() => manageInventoriesbtn()}
        className="lg:w-40 h-16 p-20 text-white font-semibold bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Manage Inventories
      </button>
    </div>
  );
};

export default ManageButton;
