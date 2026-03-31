"use client";
import React, { useState, useEffect } from "react";

export default function InstituteLogin() {
  const [isLogin, setIsLogin] = useState(true);
  
  // Login State
  const [loginId, setLoginId] = useState(""); // Username
  const [loginPassword, setLoginPassword] = useState("");
  
  // Sign Up State
  const [instituteName, setInstituteName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  // UI State
  const [message, setMessage] = useState({ text: "", type: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentInstitute, setCurrentInstitute] = useState<any>(null);

  useEffect(() => {
    // Check if user is already logged in
    const activeInstituteUser = localStorage.getItem("institute_active_user");
    if (activeInstituteUser) {
      setCurrentInstitute(JSON.parse(activeInstituteUser));
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });
    
    if (!loginId || !loginPassword) {
       setMessage({ text: "Please enter both username and password.", type: "error" });
       return;
    }

    // Fetch institutes from local storage
    const institutes = JSON.parse(localStorage.getItem("institutes_data") || "[]");
    
    // Check credentials
    const institute = institutes.find(
       (inst: any) => inst.username === loginId && inst.password === loginPassword
    );

    if (institute) {
       setMessage({ text: "Login successful!", type: "success" });
       localStorage.setItem("institute_active_user", JSON.stringify(institute));
       setCurrentInstitute(institute);
       setIsAuthenticated(true);
    } else {
       setMessage({ text: "Invalid credentials. Please try again.", type: "error" });
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });
    
    if (!instituteName || !emailId || !contactNumber || !address || !username || !password) {
       setMessage({ text: "Please fill in all the required fields.", type: "error" });
       return;
    }

    const institutes = JSON.parse(localStorage.getItem("institutes_data") || "[]");
    
    // Check if institute username or email already exists
    const exists = institutes.some((inst: any) => inst.username === username || inst.emailId === emailId);
    if (exists) {
        setMessage({ text: "Username or Email already registered. Please log in.", type: "error" });
        return;
    }

    // Save new institute
    const newInstitute = { 
        instituteName, 
        emailId, 
        contactNumber, 
        address, 
        username, 
        password 
    };
    
    institutes.push(newInstitute);
    localStorage.setItem("institutes_data", JSON.stringify(institutes));
    
    setMessage({ text: "Institute registered successfully! You can now log in.", type: "success" });
    setIsLogin(true); // Switch to login view
    setLoginId(username);
    setLoginPassword("");
    
    // Clear form
    setInstituteName("");
    setEmailId("");
    setContactNumber("");
    setAddress("");
    setUsername("");
    setPassword("");
  };

  const handleLogout = () => {
    localStorage.removeItem("institute_active_user");
    setIsAuthenticated(false);
    setCurrentInstitute(null);
    setLoginId("");
    setLoginPassword("");
  };

  if (isAuthenticated && currentInstitute) {
     return (
       <div className="flex flex-col w-full bg-white p-6 md:p-10 shadow-sm border border-gray-200 min-h-[500px]">
         <div className="border-b-2 border-blue-900 pb-4 mb-6">
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#244186] font-serif uppercase tracking-wider">
              Institute Dashboard
            </h1>
         </div>
         <div className="max-w-xl w-full mx-auto text-center space-y-6 bg-gray-50 border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#2b4c9b] font-serif uppercase tracking-wide">
              Welcome, {currentInstitute.instituteName}
            </h2>
            <div className="text-left bg-white p-5 border border-gray-100 shadow-sm text-gray-700 font-medium space-y-2 mt-4">
               <p><strong>Username:</strong> {currentInstitute.username}</p>
               <p><strong>Email ID:</strong> {currentInstitute.emailId}</p>
               <p><strong>Contact:</strong> {currentInstitute.contactNumber}</p>
               <p><strong>Address:</strong> {currentInstitute.address}</p>
            </div>
            <p className="text-gray-600 font-medium mt-4">
               You are securely logged into the Institute Partner Portal.
            </p>
            <button 
               onClick={handleLogout}
               className="bg-[#2b4c9b] hover:bg-[#3d63bd] text-white font-bold py-3 px-8 shadow-md transition-colors w-full uppercase mt-6"
            >
               Secure Logout
            </button>
         </div>
       </div>
     );
  }

  return (
    <div className="flex flex-col w-full bg-white p-6 md:p-10 shadow-sm border border-gray-200 min-h-[500px]">
      <div className="border-b-2 border-blue-900 pb-4 mb-8">
         <h1 className="text-2xl md:text-3xl font-extrabold text-[#244186] font-serif uppercase tracking-wider">
           Partner / Institute Portal {isLogin ? "Login" : "Registration"}
         </h1>
      </div>
      
      <div className="max-w-2xl w-full mx-auto bg-gray-50 border border-gray-200 p-8 shadow-sm">
        
        {message.text && (
          <div className={`mb-6 p-4 text-sm font-bold border-l-4 ${message.type === 'error' ? 'bg-red-50 text-red-700 border-red-700' : 'bg-green-50 text-green-700 border-green-700'}`}>
            {message.text}
          </div>
        )}

        {isLogin ? (
          <div className="max-w-md mx-auto">
             <form onSubmit={handleLogin} className="space-y-5">
               <div>
                 <label className="block text-[#2b4c9b] font-bold text-sm mb-2 uppercase">Username</label>
                 <input 
                   type="text" 
                   value={loginId}
                   onChange={(e) => setLoginId(e.target.value)}
                   className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#2b4c9b] focus:ring-1 focus:ring-[#2b4c9b]"
                   placeholder="Enter Institute Username"
                 />
               </div>
               <div>
                 <label className="block text-[#2b4c9b] font-bold text-sm mb-2 uppercase">Password</label>
                 <input 
                   type="password" 
                   value={loginPassword}
                   onChange={(e) => setLoginPassword(e.target.value)}
                   className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#2b4c9b] focus:ring-1 focus:ring-[#2b4c9b]"
                   placeholder="••••••••"
                 />
               </div>
               <button type="submit" className="w-full bg-[#2b4c9b] hover:bg-[#3d63bd] text-white font-bold py-3 px-4 shadow-md transition-colors uppercase mt-4">
                 Login Securely
               </button>
               <div className="text-center mt-6 text-sm pb-2 border-b border-gray-200">
                 <span className="text-gray-600">New Institute Partner? </span>
               </div>
               <button 
                  type="button" 
                  onClick={() => { setIsLogin(false); setMessage({text: "", type:""}); }} 
                  className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-4 shadow-md transition-colors uppercase mt-4"
               >
                 Register Institute
               </button>
             </form>
          </div>
        ) : (
          <form onSubmit={handleRegister} className="space-y-5">
            <h3 className="text-[#2b4c9b] font-bold uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
               Institute Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
               <div className="md:col-span-2">
                 <label className="block text-gray-700 font-bold text-sm mb-2 uppercase text-xs">Institute Name <span className="text-red-500">*</span></label>
                 <input 
                   type="text" 
                   value={instituteName}
                   onChange={(e) => setInstituteName(e.target.value)}
                   className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#2b4c9b] focus:ring-1 focus:ring-[#2b4c9b]"
                   placeholder="Full registered name"
                 />
               </div>
               <div>
                 <label className="block text-gray-700 font-bold text-sm mb-2 uppercase text-xs">Email ID <span className="text-red-500">*</span></label>
                 <input 
                   type="email" 
                   value={emailId}
                   onChange={(e) => setEmailId(e.target.value)}
                   className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#2b4c9b] focus:ring-1 focus:ring-[#2b4c9b]"
                   placeholder="Official email address"
                 />
               </div>
               <div>
                 <label className="block text-gray-700 font-bold text-sm mb-2 uppercase text-xs">Contact Number <span className="text-red-500">*</span></label>
                 <input 
                   type="tel" 
                   value={contactNumber}
                   onChange={(e) => setContactNumber(e.target.value)}
                   className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#2b4c9b] focus:ring-1 focus:ring-[#2b4c9b]"
                   placeholder="10-digit mobile or landline"
                 />
               </div>
               <div className="md:col-span-2">
                 <label className="block text-gray-700 font-bold text-sm mb-2 uppercase text-xs">Full Address <span className="text-red-500">*</span></label>
                 <textarea 
                   rows={3}
                   value={address}
                   onChange={(e) => setAddress(e.target.value)}
                   className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#2b4c9b] focus:ring-1 focus:ring-[#2b4c9b]"
                   placeholder="Complete postal address with state and PIN code"
                 ></textarea>
               </div>
            </div>

            <h3 className="text-[#2b4c9b] font-bold uppercase tracking-wider mb-4 border-b border-gray-200 pb-2 mt-8">
               Authentication Credentials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
               <div>
                 <label className="block text-gray-700 font-bold text-sm mb-2 uppercase text-xs">Choose Username <span className="text-red-500">*</span></label>
                 <input 
                   type="text" 
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
                   className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#2b4c9b] focus:ring-1 focus:ring-[#2b4c9b]"
                   placeholder="Unique username for login"
                 />
               </div>
               <div>
                 <label className="block text-gray-700 font-bold text-sm mb-2 uppercase text-xs">Create Password <span className="text-red-500">*</span></label>
                 <input 
                   type="password" 
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#2b4c9b] focus:ring-1 focus:ring-[#2b4c9b]"
                   placeholder="Strong password"
                 />
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-4">
               <button type="submit" className="flex-1 bg-[#2b4c9b] hover:bg-[#3d63bd] text-white font-bold py-3 px-4 shadow-md transition-colors uppercase">
                 Submit Details & Register
               </button>
               <button 
                  type="button" 
                  onClick={() => { setIsLogin(true); setMessage({text: "", type:""}); }} 
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 shadow-md transition-colors uppercase"
               >
                 Cancel / Go to Login
               </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
