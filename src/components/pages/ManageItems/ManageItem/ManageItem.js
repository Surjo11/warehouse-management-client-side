import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useItems from "../../../../hooks/useItems";

const ManageItem = (props) => {
  const [items, setItems] = useItems();
  const { _id, name, description, image, price, quantity, suppliername } =
    props.item;
  const navigate = useNavigate();
  const navigateToItemDetail = (id) => {
    navigate(`/item/${id}`);
  };

  const handelDeleteBtn = (itemId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            const remaining = items.filter((item) => item._id !== itemId);
            setItems(remaining);
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h5 className="text-center text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <div className="flex justify-center">
        <img className="p-8" src={image} alt="Item image" />
      </div>
      <div className="px-5 pb-5">
        <p className="dark:text-white">
          <span className="font-bold">Price:</span>${price}
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
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          <button
            onClick={() => handelDeleteBtn(_id)}
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300"
          >
            Delete
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
