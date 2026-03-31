import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home", // This will become "Home | STI Trust Institute" due to the layout template
  description: "Welcome to STI Trust Institute. Providing top-tier Aviation Education, Skill Programs, and Degree courses. Enroll now to secure your future!",
};

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-white gap-4 w-full max-w-full overflow-hidden">
      {/* Marquee Section */}
      <div className="w-full bg-[#2b4c9b] text-white flex items-center overflow-hidden border border-blue-800 h-10 shadow-sm relative pr-4">
        <div className="bg-[#2b4c9b] z-10 h-full flex items-center px-4 font-bold whitespace-nowrap border-r border-blue-900 shadow-md">
           <span className="text-yellow-400 mr-2 animate-pulse">NEW</span> For Enquiry
        </div>
        <div className="whitespace-nowrap overflow-hidden w-full flex-1">
          <p className="animate-marquee inline-block px-4 text-sm font-medium tracking-wide">
            Admissions are open for the upcoming session. Contact us for Aviation Education, Skill Programs, and Degree courses. Enroll now to secure your future!
          </p>
        </div>
      </div>

      {/* Hero Image Section placeholder */}
      <div className="w-full aspect-video md:aspect-[21/9] bg-gradient-to-r from-blue-900 to-purple-800 relative rounded-sm overflow-hidden flex items-center justify-center shadow-md border-[3px] border-white ring-1 ring-gray-200">
         <div className="absolute inset-0 bg-black/40 z-0"></div>
         <div className="relative z-10 flex flex-col items-center gap-4 p-6 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-widest drop-shadow-md border-y-2 border-white/50 py-3 uppercase">
               Aviation Education
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
               {/* Hexagon image placeholders to mimic the design */}
               <div className="w-16 h-16 md:w-24 md:h-24 bg-red-600 rotate-45 flex-shrink-0 border-2 border-white shadow-lg overflow-hidden flex items-center justify-center">
                 <div className="-rotate-45 text-white font-bold text-xs uppercase">Crew</div>
               </div>
               <div className="w-16 h-16 md:w-24 md:h-24 bg-yellow-500 rotate-45 flex-shrink-0 border-2 border-white shadow-lg overflow-hidden flex items-center justify-center">
                 <div className="-rotate-45 text-white font-bold text-xs uppercase">Flight</div>
               </div>
               <div className="w-16 h-16 md:w-24 md:h-24 bg-blue-600 rotate-45 flex-shrink-0 border-2 border-white shadow-lg overflow-hidden flex items-center justify-center">
                 <div className="-rotate-45 text-white font-bold text-[10px] md:text-xs uppercase text-center">Tech</div>
               </div>
               <div className="w-16 h-16 md:w-24 md:h-24 bg-green-600 rotate-45 flex-shrink-0 border-2 border-white shadow-lg overflow-hidden flex items-center justify-center">
                 <div className="-rotate-45 text-white font-bold text-[10px] md:text-xs uppercase text-center focus">Ground</div>
               </div>
            </div>
         </div>
      </div>

      {/* Main Content Paragraphs */}
      <div className="text-gray-800 text-[14px] leading-relaxed font-medium md:text-[15px] space-y-4 px-2 py-4 text-justify">
        <p>
          <span className="font-bold text-blue-900 text-lg">A</span> National Centre for Vocational and Technical Educational is a one of the legal status of the growing body of under Development Entrepreneurship in India. The Constitution of India and Incorporated under the legislation Public in Government of India. And Indian Education Commission (Vocational Education Council training) An Autonomous Body Executive Council. It aims to promote VOCATIONAL & TECHNICAL EDUCATION.
        </p>
        <p>
          We provide various skill development courses, aviation education programs, and online degree programs to empower the youth. Our institution works closely with National Skill Development Corporation (NSDC) and Telecom Sector Skill Council to ensure industry-relevant training standards are met.
        </p>
        <p>
          For more detailed information regarding admissions, course syllabus, and fee structures, please proceed to our Enquiry section or apply online through the procedures listed. Student career counseling is highly emphasized for a bright and successful future.
        </p>
      </div>
    </div>
  );
}
