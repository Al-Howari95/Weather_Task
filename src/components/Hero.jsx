import React from 'react';

// HeroSection Components 

const HeroSection = () => {
  return (
    <section id="Text" className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white text-blue-600">
           Now The Best Site In The World For Weather Conditions. <span id='WELCOM'> Welcome</span> 
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Browse now for the weather conditions in various regions of the Kingdom
          </p>

          <a
            href="#"

            className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"            >
            Click Now
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://media.citizen.co.za/wp-content/uploads/2023/11/weather-update-08-november-2023.jpg"
            alt="mockup"
            className="rounded-lg md:rounded-xl lg:rounded-2xl"

          />

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
