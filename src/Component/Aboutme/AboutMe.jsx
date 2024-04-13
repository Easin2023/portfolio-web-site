import React, { useEffect } from "react";
import "./AboutMe.css";

const AboutMe = () => {
  useEffect(() => {
    const animateButton = function (e) {
      e.preventDefault();
      // reset animation
      e.target.classList.remove("animate");
      e.target.classList.add("animate");
      setTimeout(function () {
        e.target.classList.remove("animate");
      }, 700);
    };

    const bubblyButtons = document.getElementsByClassName("bubbly-button");

    for (let i = 0; i < bubblyButtons.length; i++) {
      bubblyButtons[i].addEventListener("click", animateButton, false);
    }

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      for (let i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].removeEventListener("click", animateButton);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  return (
    <div className="flex justify-between items-center mx-32 pt-12">
      <div className="text-white relative">
        <h1 className="four-point-star2 absolute -top-10 -right-80"></h1>
        <p>
          Hello! I'm an experienced web developer and
          <br />
          trainer specialized in angular and javaScript
          <br />
          based in Australia
        </p>
        <h1 className="four-point-star2 absolute -left-7 -top-4"></h1>
      </div>
      <div>
        <a download href="https://drive.google.com/file/d/1XZVEc_nPJaeMM90QG60wjnn2UJbbTiDv/view?usp=sharing" className="btn bubbly-button btn-sm w-20 border-0 rounded-full text-white bg-gradient-to-r from-orange-400 to-blue-600"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
