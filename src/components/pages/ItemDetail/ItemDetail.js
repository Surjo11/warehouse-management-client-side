import React from "react";
import { useParams } from "react-router-dom";
import useItemDetails from "../../../hooks/useItemDetails";
import { useForm } from "react-hook-form";
import axios from "axios";

const ItemDetail = () => {
  const { itemId } = useParams();
  const [item] = useItemDetails(itemId);

  // Decrease Quantity
  const handelDecrease = () => {
    const oldQuantity = item.quantity;
    console.log(oldQuantity);
    const newQuantity = oldQuantity - 1;
    console.log(newQuantity);
    const url = `http://localhost:5000/item/${itemId}`;
    console.log(url);
    axios.put(url, { newQuantity });
  };

  // Increase Quantity
  const { register, handleSubmit } = useForm();
  const onSubmit = (value, event) => {
    const newValue = value.quantity;
    console.log(newValue);
    const oldQuantity = item.quantity;
    console.log(oldQuantity);
    const newQuantity = parseInt(newValue) + parseInt(oldQuantity);
    console.log(newQuantity);
    const url = `http://localhost:5000/item/${itemId}`;
    axios.put(url, { newQuantity });
    // console.log(newQuantity);
    event.target.reset();
  };
  return (
    <div>
      <h1 className="text-center text-xl font-normal lg:text-5xl dark:text-white mt-10">
        Item Details
      </h1>
      <div className="flex justify-center lg:m-10">
        <div className="flex flex-col items-center w-full p-4 bg-white rounded-lg border shadow-md md:flex-row">
          <img
            className="object-cover w-52 h-full mb-5 rounded-t-lg md:h-auto md:rounded-none md:rounded-l-lg lg:w-52"
            src={item.image}
            alt="item-image"
          />
          <div className="pl-10">
            <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {item.name}
            </h5>
            <p className="dark:text-white">
              <span className="font-bold">Price: </span>
              {item.price}
            </p>
            <p className="dark:text-white">
              <span className="font-bold">Quantity: </span>
              {item.quantity}
            </p>
            <p className="dark:text-white">
              <span className="font-bold">Supplier: </span>
              {item.suppliername}
            </p>
            <p className="dark:text-white">
              <span className="font-bold">Id: </span>
              {item._id}
            </p>
            <p className="dark:text-white">
              <span className="font-bold">Description: </span>
              {item.description}
            </p>
            <button
              onClick={() => handelDecrease()}
              className=" mb-5 inline-flex items-center py-2 px-3 mt-5 text-sm font-medium text-center text-white bg-green-600  hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Delivered
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <form
              className="flex-wrap lg:flex"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input type="number" {...register("quantity")} />
              <button
                type="submit"
                className="flex items-center justify-center w-20 h-12 text-white font-semibold bg-violet-600 hover:bg-violet-500 focus:ring-4 focus:outline-none focus:ring-blue-300  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Restock
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
