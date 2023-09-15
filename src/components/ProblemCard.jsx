import React from "react";
// import a from "../assets/logo/ai_ml.png";

export default function ProblemCard(problem) {
  return (
    <div className="flex flex-col sm:w-[calc(20vw)]  justify-center items-center m-5 max-w-sm backdrop-blur-sm bg-black/50  border-gray-200 rounded-lg shadow">
      <img
        className="w-[calc(70vw)] sm:w-[calc(15vw)]"
        src={problem.logo}
        alt={problem.alt}
      />

      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight  text-white">
          {problem.title}
        </h5>

        <p className="mb-3 font-normal text-gray-400">{problem.description}</p>
        <a
          href={problem.link}
          target="_blank"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 duration-150"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
