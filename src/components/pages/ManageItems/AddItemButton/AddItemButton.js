import React from "react";
import { useNavigate } from "react-router-dom";

const AddItemButton = () => {
  const navigate = useNavigate();
  const addItemBtn = () => {
    navigate("/additem");
  };
  return (
    <div className="flex justify-center w-full mt-10 mb-10">
      <button
        onClick={() => addItemBtn()}
        className="flex items-center justify-center w-60 h-16 text-white font-semibold bg-violet-600 hover:bg-violet-500 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Item
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
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default AddItemButton;
