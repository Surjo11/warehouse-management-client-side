import React from "react";
import { useForm } from "react-hook-form";
const Test = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-1/2 mx-auto lg:w-1/4 mx-auto m-10">
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
          {...register("suppliername")}
        />
        <h1 className="font-semibold">Supplier Email</h1>
        <input
          className="mb-2 rounded-lg"
          type="text"
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

export default Test;
