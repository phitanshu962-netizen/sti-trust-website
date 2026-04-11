import React from 'react';

export default function AttestationPage() {
  const title = 'ATTESTATION';

  return (
    <div className="flex flex-col w-full bg-white p-6 md:p-10 shadow-sm border border-gray-200 min-h-[500px]">
      <div className="border-b-2 border-blue-900 pb-4 mb-6">
         <h1 className="text-2xl md:text-3xl font-extrabold text-[#244186] font-serif uppercase tracking-wider">
           {title}
         </h1>
      </div>
      
      <div className="text-gray-700 leading-relaxed font-medium space-y-5 text-justify">
        <p>
          Welcome to the <strong>{title}</strong> section. This page has been created as a separate file to allow for easy content updates.
        </p>
        
        <p>
          Once the official documents, textual content, lists, or procedures are finalized, they will be updated in this section.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-900 p-4 mt-6">
          <p className="text-sm text-blue-900 font-bold uppercase tracking-wide mb-2">Note for Administrator:</p>
          <p className="text-sm">
            Please update this file directly to add the real content for the "{title}" category.
          </p>
        </div>
      </div>
    </div>
  );
}
