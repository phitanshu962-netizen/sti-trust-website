import Link from 'next/link';
import React from 'react';

export default function SidebarRight() {
  const procedures = [
    { name: 'APPROVAL PROCEDURE', href: '/approval-procedure' },
    { name: 'APPLY ONLINE', href: '/apply-online' },
    { name: 'SAMPLE CERTIFICATE', href: '/sample-certificate' },
    { name: 'ATTESTATION', href: '/attestation' },
    { name: 'DOWNLOADS', href: '/downloads' },
    { name: 'ATC FORM', href: '/atc-form' },
    { name: 'SPO FORM', href: '/spo-form' },
    { name: 'INSTITUTE LOGIN', href: '/institute-login' },
  ];

  return (
    <div className="flex flex-col font-serif uppercase tracking-tight gap-4 mt-8 lg:mt-0 w-full">
      {/* ONLINE DEGREE PROGRAMME BUTTON */}
      <div className="border border-gray-200 bg-white p-1 pb-4 shadow-sm">
        <div className="bg-[#2b4c9b] text-white p-3 md:p-4 hover:bg-[#3d63bd] cursor-pointer transition-colors border shadow-inner text-center w-[95%] ml-auto">
          <h3 className="font-bold text-sm md:text-[15px] flex flex-col items-center justify-center gap-1">
             <span className="text-yellow-400 text-[10px] bg-red-600 px-2 py-0.5 rounded-full inline-block animate-pulse mb-1">NEW</span>
             ONLINE DEGREE PROGRAMME
          </h3>
        </div>
      </div>

      {/* PROCEDURES SECTION */}
      <div className="border border-gray-200 bg-white shadow-sm flex flex-col">
        <div className="bg-[#2b4c9b] text-white p-3 border-b border-blue-900 shadow-inner w-[95%] ml-auto">
           <h3 className="font-bold text-center text-sm md:text-base tracking-wide">
              PROCEDURES
           </h3>
        </div>
        
        <ul className="flex flex-col px-3 py-3 w-full">
          {procedures.map((link) => (
            <li key={link.name} className="border-b border-dotted border-gray-300 last:border-b-0 py-2">
              <Link 
                href={link.href} 
                className="flex items-center text-[13px] md:text-[14px] font-bold text-gray-800 hover:text-[#2b4c9b] hover:pl-2 transition-all duration-200"
              >
                <span className="text-red-500 mr-2 text-[10px]">▶</span>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
