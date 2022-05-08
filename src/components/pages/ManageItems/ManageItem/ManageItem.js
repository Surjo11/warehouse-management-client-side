import React from "react";
import { useNavigate } from "react-router-dom";

const Item = (props) => {
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
        <div className="mt-5 flex justify-between">
          <button
            onClick={() => navigateToItemDetail(_id)}
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update
            <svg
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <button class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300">
            Delete
            <svg
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
