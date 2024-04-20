import React from "react";
import { Link } from "react-router-dom";

// Navbar Components 

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full z-50">
      <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700 bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
            <img
              id="image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu47n15LqU6_faeiISIhNcMJSOUf_TfvgN4wt5_ZTilOxkT4eAp26B83ewPmNPxUf209I&usqp=CAU"

              alt="Your Logo"
              className="h-8 w-auto"
            />
            <div>
              <span className="text-blue-700 font-semibold text-3xl tracking-tight ml-2">WeatherWave</span>
            </div>
          </div>
          <div className="block lg:hidden">
            <button

              className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div

          className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8"
        >
          <div
            id="madia" className="text-md font-bold text-blue-700 lg:flex-grow mr-48">

            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Home
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Weather
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Weather News
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Climate and environment
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              About us
            </a>
          </div>
          <div className="flex"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
