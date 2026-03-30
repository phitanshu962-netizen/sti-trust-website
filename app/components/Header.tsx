import React from "react";

export default function Header() {
  return (
    <div className="bg-white py-4 px-4 md:px-6 flex flex-col items-center border-b border-gray-100 shadow-sm">
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Logo */}
        <img 
          src="https://i.postimg.cc/FzvwbhS3/Untitled-1.png" 
          alt="Kaushal Education Logo" 
          className="h-20 sm:h-24 md:h-28 object-contain"
        />
        
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#244186] tracking-tight text-center md:text-left">
            Kaushal Education Vocational Skill Training Council
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2 text-center md:text-left">
            Banglow No A95 near B.M.C School, Kamgar Nagar, Kurla East 400024
          </p>
        </div>
      </div>
    </div>
  );
}
