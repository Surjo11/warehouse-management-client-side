import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
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
          {...register("itemname", { required: true, maxLength: 20 })}
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
          {...register("imageurl")}
        />
        <h1 className="font-semibold">Supplier Name</h1>
        <input
          className="mb-2 rounded-lg"
          type="text"
          value={user?.displayName}
          disabled
          {...register("suppliername")}
        />
        <h1 className="font-semibold">Supplier Email</h1>
        <input
          className="mb-2 rounded-lg"
          type="text"
          value={user?.email}
          disabled
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
          className=" h-12 lg:h-12 m-3 w-full mx-auto text-white bg-violet-600 hover:bg-violet-500 font-medium rounded-lg text-sm"
        >
          Add to Inventory
        </button>
      </form>
    </div>
  );
};

export default AddItem;
