"use client";
import React, { useState, useEffect } from "react";

export default function ATCLogin() {
  const [isLogin, setIsLogin] = useState(true);
  
  // Login State
  const [loginId, setLoginId] = useState(""); // Username or Email
  const [loginPassword, setLoginPassword] = useState("");
  
  // Sign Up State
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  
  // UI State
  const [message, setMessage] = useState({ text: "", type: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useEffect(() => {
    // Check if user is already logged in
    const activeUser = localStorage.getItem("atc_active_user");
    if (activeUser) {
      setCurrentUser(activeUser);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });
    
    if (!loginId || !loginPassword) {
       setMessage({ text: "Please enter both ID and password.", type: "error" });
       return;
    }

    // Fetch users from local storage
    const users = JSON.parse(localStorage.getItem("atc_users") || "[]");
    
    // Check to see if user exists with matching username or email, and password
    const user = users.find(
       (u: any) => (u.username === loginId || u.email === loginId) && u.password === loginPassword
    );

    if (user) {
       setMessage({ text: "Login successful!", type: "success" });
       localStorage.setItem("atc_active_user", user.username);
       setCurrentUser(user.username);
       setIsAuthenticated(true);
    } else {
       setMessage({ text: "Invalid credentials. Please try again.", type: "error" });
    }
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });
    
    if (!signUpUsername || !signUpEmail || !signUpPassword) {
       setMessage({ text: "Please fill in all fields.", type: "error" });
       return;
    }

    const users = JSON.parse(localStorage.getItem("atc_users") || "[]");
    
    // Check if user already exists
    const userExists = users.some((u: any) => u.username === signUpUsername || u.email === signUpEmail);
    if (userExists) {
        setMessage({ text: "Username or Email already exists. Please log in.", type: "error" });
        return;
    }

    // Save new user
    const newUser = { username: signUpUsername, email: signUpEmail, password: signUpPassword };
    users.push(newUser);
    localStorage.setItem("atc_users", JSON.stringify(users));
    
    setMessage({ text: "Sign Up successful! You can now log in.", type: "success" });
    setIsLogin(true); // Switch to login view
    setLoginId(signUpUsername);
    setLoginPassword("");
    setSignUpUsername("");
    setSignUpEmail("");
    setSignUpPassword("");
  };

  const handleLogout = () => {
    localStorage.removeItem("atc_active_user");
    setIsAuthenticated(false);
    setCurrentUser(null);
    setLoginId("");
    setLoginPassword("");
  };

  if (isAuthenticated) {
     return (
       <div className="flex flex-col w-full bg-white p-6 md:p-10 shadow-sm border border-gray-200 min-h-[500px] items-center justify-center">
         <div className="max-w-md w-full text-center space-y-6">
            <h1 className="text-3xl font-extrabold text-[#244186] font-serif uppercase tracking-wider mb-4 border-b-2 border-blue-900 pb-4">
              Welcome, {currentUser}
            </h1>
            <p className="text-gray-700 font-medium">
               You have successfully logged into the ATC Portal. This is a secure area for Authorized Training Centers.
            </p>
            <button 
               onClick={handleLogout}
               className="bg-[#2b4c9b] hover:bg-[#3d63bd] text-white font-bold py-3 px-8 rounded transition-colors shadow-md w-full uppercase mt-6"
            >
               Logout
            </button>
         </div>
       </div>
     );
  }

  return (
    <div className="flex flex-col w-full bg-white p-6 md:p-10 shadow-sm border border-gray-200 min-h-[500px]">
      <div className="border-b-2 border-blue-900 pb-4 mb-8">
         <h1 className="text-2xl md:text-3xl font-extrabold text-[#244186] font-serif uppercase tracking-wider">
           ATC Portal {isLogin ? "Login" : "Sign Up"}
         </h1>
      </div>
      
      <div className="max-w-md w-full mx-auto bg-gray-50 border border-gray-200 p-8 shadow-sm">
        
        {message.text && (
          <div className={`mb-6 p-3 text-sm font-bold border-l-4 ${message.type === 'error' ? 'bg-red-50 text-red-700 border-red-700' : 'bg-green-50 text-green-700 border-green-700'}`}>
            {message.text}
          </div>
        )}

        {isLogin ? (
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-[#2b4c9b] font-bold text-sm mb-2 uppercase">Username or Email</label>
              <input 
                type="text" 
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#2b4c9b] focus:ring-1 focus:ring-[#2b4c9b]"
                placeholder="Enter Username or Email"
              />
            </div>
            <div>
              <label className="block text-[#2b4c9b] font-bold text-sm mb-2 uppercase">Password</label>
              <input 
                type="password" 
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#2b4c9b] focus:ring-1 focus:ring-[#2b4c9b]"
                placeholder="••••••••"
              />
            </div>
            <button type="submit" className="w-full bg-[#2b4c9b] hover:bg-[#3d63bd] text-white font-bold py-3 px-4 shadow-md transition-colors uppercase mt-4">
              Login to ATC
            </button>
            <div className="text-center mt-6 text-sm">
              <span className="text-gray-600">New ATC? </span>
              <button type="button" onClick={() => { setIsLogin(false); setMessage({text: "", type:""}); }} className="text-[#2b4c9b] font-bold hover:underline">
                Register Here
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="block text-[#2b4c9b] font-bold text-sm mb-2 uppercase">Username</label>
              <input 
                type="text" 
                value={signUpUsername}
                onChange={(e) => setSignUpUsername(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#2b4c9b] focus:ring-1 focus:ring-[#2b4c9b]"
                placeholder="Choose a username"
              />
            </div>
            <div>
              <label className="block text-[#2b4c9b] font-bold text-sm mb-2 uppercase">Email ID</label>
              <input 
                type="email" 
                value={signUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#2b4c9b] focus:ring-1 focus:ring-[#2b4c9b]"
                placeholder="Enter valid email"
              />
            </div>
            <div>
              <label className="block text-[#2b4c9b] font-bold text-sm mb-2 uppercase">Create Password</label>
              <input 
                type="password" 
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#2b4c9b] focus:ring-1 focus:ring-[#2b4c9b]"
                placeholder="Minimum 6 characters"
              />
            </div>
            <button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-4 shadow-md transition-colors uppercase mt-6">
              Create Account
            </button>
            <div className="text-center mt-6 text-sm">
              <span className="text-gray-600">Already registered? </span>
              <button type="button" onClick={() => { setIsLogin(true); setMessage({text: "", type:""}); }} className="text-[#2b4c9b] font-bold hover:underline">
                Login Here
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
