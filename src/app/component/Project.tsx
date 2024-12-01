import React from "react";
import Image from "next/image";
import Img1 from "@/public/assests/project1.png";
import Img2 from "@/public/assests/project2.png";
import Img3 from "@/public/assests/project3.png";

const Project = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-slate-300">
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 -m-4">
            <div className="p-4  lg:w-1/1">
              <div className="h-full bg-gray-100 bg-opacity-75 px-5 pt-16 pb-24  rounded-lg overflow-hidden text-center relative">
                <Image src={Img1} alt="Project Img" className="w-full rounded-lg" />
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                Project
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                 Solar Solution
                </h1>
                <p className="leading-relaxed mb-3">
                A html and css based app for responsive website your task efficiently
                </p>             
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    1.2K
                  </span>
                  
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/1">
              <div className="h-full bg-gray-100 bg-opacity-75 px-5 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <Image src={Img2} alt="Project Img" className="w-full rounded-lg" />
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                Project
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Static Interactive Resume
                </h1>
                <p className="leading-relaxed mb-3">
                A Typescript-based interactive resume built with Html and Css, allowing users to showcase their skills dynamically
                </p>     
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    
                </div>
              </div>
            </div>
            <div className="p-4  lg:w-1/1">
              <div className="h-full bg-gray-100 bg-opacity-75 px-5 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <Image src={Img3} alt="Project Img" className="w-full rounded-lg" />
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                 Project
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Dynamic Resume Builder
                </h1>
                <p className="leading-relaxed mb-3">
         A Typescript-basedDynamic Resume Builder  with Html and Css, allowing users to showcase their skills dynamically
                  
                </p>
                
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                 
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Project;