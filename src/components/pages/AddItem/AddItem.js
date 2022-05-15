import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    const url = `http://localhost:5000/items`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        event.target.reset();
      });
  };
  const [user] = useAuthState(auth);
  return (
    <div className="w-1/2 mx-auto lg:w-1/4 m-10">
      <h1 className="text-center text-xl font-semibold lg:text-5xl mb-10">
        Add Inventory
      </h1>
      <form className="lg:flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="font-semibold">Name</h1>
        <input
          className="mb-2 rounded-lg"
          placeholder="Enter item name"
          type="text"
          {...register("name")}
        />
        <h1 className="font-semibold">Price</h1>
        <input
          className="mb-2 rounded-lg"
          placeholder="Enter price"
          type="number"
          {...register("price")}
        />
        <h1 className="font-semibold">Quantity</h1>
        <input
          className="mb-2 rounded-lg"
          placeholder="Enter quantity"
          type="number"
          {...register("quantity")}
        />
        <h1 className="font-semibold">Image Url</h1>
        <input
          className="mb-2 rounded-lg"
          placeholder="Enter image url"
          type="text"
          {...register("image")}
        />
        <h1 className="font-semibold">Supplier Name</h1>
        <input
          className="mb-2 rounded-lg"
          type="text"
          value={user?.displayName}
          {...register("suppliername")}
        />
        <h1 className="font-semibold">Supplier Email</h1>
        <input
          className="mb-2 rounded-lg"
          type="text"
          value={user?.email}
          {...register("supplieremail")}
        />
        <h1 className="font-semibold">Description</h1>
        <textarea
          className="mb-2 rounded-lg"
          placeholder="Description"
          type="text"
          {...register("description")}
        />
        <button
          type="submit"
          className=" flex justify-center items-center h-12 lg:h-12 m-3 w-full mx-auto text-white bg-violet-600 hover:bg-violet-500 font-medium rounded-lg text-sm"
        >
          Add to Inventory
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
      </form>
    </div>
  );
};

export default AddItem;
