import React from "react";
import useItems from "../../../hooks/useItems";
import Item from "./ManageItem/ManageItem";

const ManageItems = () => {
  const [items] = useItems();
  return (
    <div>
      <h1 className="text-center text-xl font-semibold lg:text-5xl font-semibold dark:text-white">
        Manage Inventories
      </h1>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20 mt-10 ">
        {items.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default ManageItems;
