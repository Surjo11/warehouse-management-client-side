import React from "react";
import image1 from "./fedex.png";
import image2 from "./oppo.png";
import image3 from "./samsung.png";
import image4 from "./walmart.png";
import image5 from "./realme.png";
const Partners = () => {
  return (
    <div>
      <h1 className="text-center text-xl font-normal lg:text-5xl dark:text-white mt-10">
        Our Partners
      </h1>
      <div className=" flex flex-wrap lg:flex justify-center">
        <img className="w-52 lg:mr-10" src={image1} alt="image1" />
        <img className="w-52 lg:mr-10" src={image2} alt="image2" />
        <img className="w-52 lg:mr-10" src={image3} alt="image3" />
        <img className="w-52 lg:mr-10" src={image4} alt="image4" />
        <img className="w-52 " src={image5} alt="image5" />
      </div>
    </div>
  );
};

export default Partners;
