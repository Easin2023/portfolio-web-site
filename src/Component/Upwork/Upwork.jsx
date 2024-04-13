import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

const Upwork = () => {
  return (
    <div className="text-white flex justify-around">
      <div>
        <h1 className="text-4xl">
          Hi!. I'm a Freelance <br /> Web Developer
        </h1>
      </div>
      <div>
        <p className="flex items-center gap-3">
          <MdOutlineMailOutline />
          <span>mdeasinarafat016456@gmail.com</span>
        </p>
        <p className="flex items-center gap-3">
          <MdOutlineLocalPhone />
          <span>{"(+880)"}1645650504</span>
        </p>
        <p>Barisal, Bangladesh</p>
      </div>
      <div>
        <a className="btn btn-sm border-0 rounded-full text-white bg-gradient-to-r from-orange-400 to-blue-600">
          Hire me
        </a>
      </div>
    </div>
  );
};

export default Upwork;
