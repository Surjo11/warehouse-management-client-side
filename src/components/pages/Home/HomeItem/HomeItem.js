import React from "react";
import { useNavigate } from "react-router-dom";

const HomeItem = (props) => {
  const { _id, name, description, image, price, quantity, suppliername } =
    props.item;
  const navigate = useNavigate();
  const navigateToItemDetail = (id) => {
    navigate(`/item/${id}`);
  };
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h5 className="text-center text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <div className="flex justify-center">
        <img className="p-8" src={image} alt="product image" />
      </div>
      <div className="px-5 pb-5">
        <p className="dark:text-white">
          <span className="font-bold">Price: </span>
          {price}
        </p>
        <p className="dark:text-white">
          <span className="font-bold">Quantity: </span>
          {quantity}
        </p>
        <p className="dark:text-white">
          <span className="font-bold">Supplier: </span>
          {suppliername}
        </p>
        <p className="dark:text-white">
          <span className="font-bold">Description: </span>
          {description}
        </p>
        <div className="mt-2">
          <button
            onClick={() => navigateToItemDetail(_id)}
            class="inline-flex items-center justify-center py-3 px-3 w-full text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
