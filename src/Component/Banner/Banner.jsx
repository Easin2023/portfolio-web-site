import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="text-white text-8xl mt-24 ">
      <h1 className="ml-60">{"{Creative &"}</h1>
      <div className="flex relative">
        <h1 className="bg-color w-48 ml-64 h-[70px] my-auto rounded-3xl mt-6">
          <img
            className="w-20 mx-auto -mt-4"
            src="https://i.ibb.co/pKPzVRF/React-icon-svg.png"
            alt=""
          />
        </h1>
        <h1 className="">Experienced</h1>
        <h1 className="four-point-star absolute -top-10 left-4"></h1>
      </div>
      <div className="flex ml-64 relative">
        <h1 className="four-point-star absolute top-20 right-20"></h1>
        <h1>{"Web Developer"}</h1>
        <h1 className="bg-color2 h-[70px] w-48 rounded-3xl my-auto ml-3 mt-6">
          <img
            className="w-24 mx-auto -mt-7"
            src="https://i.ibb.co/2npQ5LL/394559949-374692381622478-7628019852304827346-n-1-removebg-preview.png"
            alt=""
          />
        </h1>
        <h1>{"}"}</h1>
      </div>
      <hr className="mt-[203px] border-white"></hr>
    </div>
  );
};

export default Banner;
