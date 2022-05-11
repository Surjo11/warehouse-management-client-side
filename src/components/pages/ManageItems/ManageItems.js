import React from "react";
import useItems from "../../../hooks/useItems";
import AddItem from "./AddItemButton/AddItemButton";
import ManageItem from "./ManageItem/ManageItem";

const ManageItems = () => {
  const [items] = useItems();
  return (
    <div>
      <h1 className="text-center text-xl font-semibold lg:text-5xl dark:text-white">
        Manage Inventories
      </h1>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20 mt-10 mr-28">
        {items.map((item) => (
          <ManageItem key={item._id} item={item}></ManageItem>
        ))}
      </div>
      <AddItem></AddItem>
    </div>
  );
};

export default ManageItems;
