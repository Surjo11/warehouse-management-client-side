import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import HomeItem from "./HomeItem/HomeItem";
import ManageButton from "./ManageButton/ManageButton";
import Partners from "./Partners/Partners";
import Question from "./Question/Question";

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://secure-atoll-36381.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Partners></Partners>
      <h1 className="text-center text-xl font-normal lg:text-5xl dark:text-white mt-10">
        Featured Items
      </h1>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20 mt-10 mr-28 ">
        {items.slice(0, 6).map((item) => (
          <HomeItem key={item._id} item={item}></HomeItem>
        ))}
      </div>
      <ManageButton></ManageButton>
      <Question></Question>
    </div>
  );
};

export default Home;
