import React from "react";

// Scroll button 


function Button() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <button id="Button_1"
        className="fixed bottom-10 right-10 p-4 rounded-full bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 text-white hover:from-blue-500 hover:via-blue-600 hover:to-blue-800 focus:outline-none focus:bg-blue-500 transition-all duration-400 ease-in-out"
        onClick={handleScrollToTop}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}

export default Button;