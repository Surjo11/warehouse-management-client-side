import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import ManageItem from "../ManageItems/ManageItem/ManageItem";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const email = user?.email;
  useEffect(() => {
    fetch(`http://localhost:5000/items?email=${email}`, {
      headers: {
        authorization: `${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [items]);
  return (
    <div>
      <h1 className="text-center text-xl font-semibold lg:text-5xl dark:text-white m-10">
        My Items
      </h1>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20 mt-10 mr-28">
        {items?.map((item) => (
          <ManageItem key={item._id} item={item}></ManageItem>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
