import React from "react";

export default function Prize() {
  return (
    <div
      id="prize_section"
      className="flex flex-col sm:h-screen h-[calc(100vh)] justify-center items-center text-white"
    >
      <h2 className="text-4xl font-bold my-16 sm:mt-24 mb-8">Prizes</h2>
      <div className="flex flex-col md:flex-row justify-center items-center m-5 lg:mx-64 p-3 backdrop-blur-sm bg-black/50 rounded-xl">
        {/* <p>Coming soon...</p> */}
        <div className="p-8">
          <p className="">
            IT IS AN AMAZING OPPORTUNITY FOR ENTHUSIASTS TO PARTICIPATE AND
            ENHANCE THEIR LEARNINGS.
          </p>
        </div>
        {/* <img
          src="https://kgec-robotics-society.github.io/hackathon/static/assets/goodies.png"
          alt="Prizes and goodies image"
          className="h-[calc(40vh)] mb-8 md:my-8"
        /> */}
        <div className="p-8 text-lg">
          <p className="m-3">
            <span className="font-semibold text-blue-600">1st: </span> T-shirt,
            Sipper, one 3d printed material (with logo of our club and Creonimus
            Technology Solutions)
          </p>
          <p className="m-3">
            <span className="font-semibold text-blue-600">2nd: </span> Sipper,
            Notebook, Pen
          </p>
          <p className="m-3">
            <span className="font-semibold text-blue-600">3rd:</span> Mug,
            Notebook, Pen
          </p>
          <p>
            And for{" "}
            <span className="font-semibold text-blue-600">Innovative Idea</span>{" "}
            submission event 3 mementos for 3 best idea submitters
          </p>
        </div>
      </div>
    </div>
  );
}
