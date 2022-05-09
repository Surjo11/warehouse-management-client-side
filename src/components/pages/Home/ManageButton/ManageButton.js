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
        className="lg:flex items-center justify-center w-60 h-16 text-white font-semibold bg-cyan-600 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Manage Inventories
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </button>
    </div>
  );
};

export default ManageButton;
