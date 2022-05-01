import React from "react";
import banner from "./banner.jpg";
import "./Banner.css";
import { Fade, Zoom } from "react-reveal";
const Banner = () => {
  return (
    <div className="relative banner">
      <Zoom top cascade>
        <h1 className=" banner-text text-8xl text-white absolute inset-0 ">
          Welcome to our Warehouse
        </h1>
      </Zoom>
      <img src={banner} alt="" />
    </div>
  );
};

export default Banner;
