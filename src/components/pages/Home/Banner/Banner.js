import React from "react";
import banner from "./banner.jpg";
import "./Banner.css";
import { Zoom } from "react-reveal";
const Banner = () => {
  return (
    <div className="relative banner">
      <Zoom top cascade>
        <h1 className=" banner-tittle text-2xl lg:text-8xl text-white absolute inset-0 ">
          Welcome to our Warehouse
        </h1>
      </Zoom>
      <img src={banner} alt="Banner" />
    </div>
  );
};

export default Banner;
