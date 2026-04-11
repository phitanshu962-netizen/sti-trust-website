"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "phitanshu962@gmail.com" && password === "heth@123") {
      localStorage.setItem("adminAuth", "true");
      router.push("/admin");
    } else {
      setError("Invalid admin credentials");
    }
  };

  return (
    <div className="flex justify-center items-center py-20 bg-gray-50 min-h-full">
      <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-w-md border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#2b4c9b] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
            A
          </div>
          <h2 className="text-3xl font-extrabold text-[#2b4c9b] mb-2 tracking-tight">Admin Login</h2>
          <p className="text-gray-500 text-sm">Sign in to access the admin portal</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-medium rounded-r-md animate-pulse">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b4c9b] focus:border-[#2b4c9b] transition-all outline-none bg-gray-50 focus:bg-white"
              placeholder="admin@example.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b4c9b] focus:border-[#2b4c9b] transition-all outline-none bg-gray-50 focus:bg-white"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2b4c9b] hover:bg-[#1a3375] text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg flex justify-center items-center gap-2 group"
          >
            Sign In
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </form>
      </div>
    </div>
  );
}
