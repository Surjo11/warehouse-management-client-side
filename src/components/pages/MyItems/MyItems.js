import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import AddItemButton from "../ManageItems/AddItemButton/AddItemButton";
import ManageItem from "../ManageItems/ManageItem/ManageItem";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const email = user?.email;
  useEffect(() => {
    fetch(`https://secure-atoll-36381.herokuapp.com/items?email=${email}`, {
      headers: {
        authorization: `${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [items]);
  console.log(items);
  return (
    <div>
      <h1 className="text-center text-xl font-semibold lg:text-5xl dark:text-white mt-10 mb-20">
        My Items
      </h1>
      {items.length > 0 ? (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20 mt-10 mr-28">
          {items?.map((item) => (
            <ManageItem key={item._id} item={item}></ManageItem>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl font-normal lg:text-3xl dark:text-white">
          No Item Added Yet
        </p>
      )}
      <AddItemButton></AddItemButton>
    </div>
  );
};

export default MyItems;
