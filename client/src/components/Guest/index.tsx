import React from "react";

const Guest = ({ children }) => {
  return (
    <div className="flex w-full">
      {/* Left Container */}
      <div className="fixed p-4 h-screen w-full bg-[#97C2EC] bg-cover bg-center md:w-1/2 md:px-8" />

      {/* Right Container */}
      <div className="fixed top-0 left-0 w-full h-screen p-8 bg-white bg-cover bg-center z-10 md:w-1/2 md:left-auto md:right-0">
        {children}
      </div>
    </div>
  );
};

export default Guest;
