import React from "react";
import "./Loading.css";
import { Triangle } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="loading-screen">
      <Triangle
        height="150"
        width="150"
        color="grey"
        ariaLabel="loading-indicator"
      />
    </div>
  );
};

export default Loading;
