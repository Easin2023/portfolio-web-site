import React from "react";
import "./Home.css";
import Navbar from "../../Component/Navbar";
import Banner from "../../Component/Banner/Banner";
import AboutMe from "../../Component/Aboutme/AboutMe";
import BestDeveloper from "../../Component/BestDeveloper/BestDeveloper";
import Upwork from "../../Component/Upwork/Upwork";

const Home = () => {
  return (
    <div className=" font-font-family-orbitron">
      <div className="background-color">
        <Navbar />
        <Banner />
      </div>
      <div className="relative">
        <div className="background-color2">
          <AboutMe />
        </div>

        <div className="absolute top-40 left-[590px] z-10 ">
          <div className="bg-[#fbd8d8] mx-auto -rotate-12 w-24 h-20 rounded-md relative">
            <img
              className="w-14 absolute -top-10  left-6 rotate-6"
              src="https://i.ibb.co/vk41Nf9/3d-verification.png"
              alt=""
            />
            <p className="text-xs font-bold flex justify-center items-center h-full">
              Best Developer
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="background-color3">
            <BestDeveloper />
          </div>
          <div className="absolute top-[310px] flex items-center">
            <div className="flex bg-[#ccdffa] rounded-lg h-10 justify-center items-center gap-2 font-bold py-6 px-4 -mt-[40px] ml-[120px] -rotate-6 ">
              <h1 className="text-3xl">1+</h1>
              <p className="text-xs">
                year of
                <br />
                Experience
              </p>
            </div>
            <div className=" bg-[#fbd8d8] rounded-lg p-3 ml-[750px] -mt-[35px] rotate-12">
              <div className="flex">
                <img
                  className="w-8 mx-auto"
                  src="https://i.ibb.co/2kGnbmW/Git-Hub-Logo-wine.png"
                  alt=""
                />
                <img
                  className="w-12 mx-auto"
                  src="https://i.ibb.co/VxxSXRr/gratis-png-logotipo-de-la-marca-registrada-venado-avatar-removebg-preview.png"
                  alt=""
                />
              </div>
              <p className="text-xs font-bold mt-2">
                10+ Happy <br /> Clients
              </p>
            </div>
          </div>
          <div className="background-color4">
            <Upwork />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
