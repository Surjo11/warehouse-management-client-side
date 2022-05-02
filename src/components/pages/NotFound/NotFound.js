import React from "react";
import img from "./404.png";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="notFound">
      <img src={img} alt="" />
    </div>
  );
};

export default NotFound;
