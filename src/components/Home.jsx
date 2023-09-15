import React from "react";

import zyro from "../assets/logo/zyro_vector_white.png";
import milkyway_desktop from "../assets/background/milkyway_desktop.mp4";
import creonimus from "../assets/sponsors/3d_creonimus.jpg";
import system76 from "../assets/sponsors/System76_logo.png";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-white">
      <video
        autoPlay
        loop
        muted
        className="-z-50 w-screen h-screen object-cover fixed"
      >
        <source src={milkyway_desktop} type="video/mp4" />
      </video>
      {/* <h1 className="text-8xl -top-16 m-2">ZYRO</h1> */}
      <img className="w-96 mt-28 px-4 sm:px-0 filter" src={zyro} alt="ZYRO" />
      <br />
      <br />
      <h3 className="m-3 text-xl drop-shadow-2xl shadow-black">
        Presented By KGEC - Robotics Society
      </h3>
      <button className="backdrop-blur-sm bg-black/50  rounded-md p-3 m-3 hover:bg-black/80 hover:text-blue-300 hover:drop-shadow-white-2xl duration-150">
        <a href="https://unstop.com/o/IsE0lWg?lb=duop7eA" target="_blank">
          Register Now
        </a>
      </button>
      <h3 className="m-3 text-xl">Sponsors</h3>
      <a href="https://unstop.com/" target="_blank" className="my-4">
        <img
          className="w-44 filter"
          src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo-white.svg"
          alt="unstop logo"
        />
      </a>
      <div className="flex justify-center items-center space-x-8 sm:space-x-12 mx-2 my-4 sm:mx-0">
        <a href="#" className="my-0">
          <img
            className="w-20 rounded-md filter"
            src={creonimus}
            alt="3D Creonimus logo"
          />
        </a>
        <a href="https://system76.com/" target="_blank" className="my-0">
          <img className="w-40 filter" src={system76} alt="3D Creonimus logo" />
        </a>
      </div>
    </div>
  );
}
