import Link from 'next/link';
import React from 'react';

export default function SidebarLeft() {
  const profileLinks = [
    { name: 'ABOUT US', href: '/about-us' },
    { name: 'COURSES', href: '/courses' },
    { name: 'TERMS & CONDITIONS', href: '/terms-and-conditions' },
    { name: 'ENQUIRY', href: '/enquiry' },
    { name: 'ATC LOGIN', href: '/atc-login' },
    { name: 'COLLEGE LIST', href: '/college-list' },
    { name: 'INSTITUTION LIST', href: '/institution-list' },
  ];
  
  const skillVars = [
    { name: 'SKILL COURSES', href: '/skill-courses' },
    { name: 'NCVTE SKILL', href: '/ncvte-skill' },
  ];

  return (
    <div className="flex flex-col border border-gray-200 bg-[#fbfbfb] shadow-sm rounded-sm overflow-hidden mb-6 lg:mb-0 w-full font-serif uppercase tracking-tight">
      {/* PROFILE SECTION */}
      <div className="bg-[#2b4c9b] text-white p-3 border-b border-blue-900 shadow-inner w-[95%]">
         <h3 className="font-bold text-center text-sm md:text-base tracking-wide">
            PROFILE
         </h3>
      </div>
      
      <ul className="flex flex-col px-2 py-3 bg-white w-full">
        {profileLinks.map((link) => (
          <li key={link.name} className="border-b border-gray-100 last:border-b-0 pb-1 mb-2">
            <Link 
              href={link.href} 
              className="block px-3 py-2 text-[13px] md:text-sm font-bold text-gray-800 hover:text-[#2b4c9b] hover:bg-gray-50 transition-colors w-full uppercase"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* SKILL PROGRAMS SECTION */}
      <div className="bg-[#2b4c9b] text-white p-3 border-b border-blue-900 shadow-inner w-[95%] mt-4">
         <h3 className="font-bold text-center text-sm md:text-base tracking-wide">
            SKILL PROGRAMS
         </h3>
      </div>
      
      <ul className="flex flex-col px-2 py-3 bg-white w-full">
        {skillVars.map((link) => (
          <li key={link.name} className="border-b border-gray-100 last:border-b-0 pb-1 mb-2">
            <Link 
              href={link.href} 
              className="block px-3 py-2 text-[13px] md:text-sm font-bold text-gray-800 hover:text-[#2b4c9b] hover:bg-gray-50 transition-colors w-full uppercase"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
