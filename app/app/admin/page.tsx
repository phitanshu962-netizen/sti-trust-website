"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { addCourse } from "@/lib/courseData";

export default function AdminPortal() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    duration: "",
    shortDescription: "",
    longDescription: "",
    photoUrl: ""
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setMounted(true);
    const auth = localStorage.getItem("adminAuth");
    if (auth !== "true") {
      router.push("/admin-login");
    }
  }, [router]);

  if (!mounted) return null; // Prevent hydration mismatch

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    router.push("/admin-login");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCourse = {
      id: Date.now().toString(),
      ...formData
    };
    addCourse(newCourse);
    setSuccess(true);
    setFormData({
      title: "",
      duration: "",
      shortDescription: "",
      longDescription: "",
      photoUrl: ""
    });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-full rounded-xl shadow-sm border border-gray-100">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 border-b pb-4 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-[#2b4c9b] tracking-tight">Admin Portal</h1>
          <p className="text-gray-500 mt-1">Manage your institute's courses easily</p>
        </div>
        <button 
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-lg font-semibold transition-colors shadow-sm w-full sm:w-auto"
        >
          Logout
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">
            +
          </span>
          Add New Course
        </h2>

        {success && (
          <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 font-medium rounded-r-md flex items-center gap-2">
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            Course added successfully! It is now live on the Courses page.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Course Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b4c9b] focus:border-[#2b4c9b] outline-none transition-all bg-gray-50 focus:bg-white"
                placeholder="e.g. Diploma in Cabin Crew"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Duration</label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b4c9b] focus:border-[#2b4c9b] outline-none transition-all bg-gray-50 focus:bg-white"
                placeholder="e.g. 6 Months"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Photo URL</label>
            <input
              type="url"
              name="photoUrl"
              value={formData.photoUrl}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b4c9b] focus:border-[#2b4c9b] outline-none transition-all bg-gray-50 focus:bg-white"
              placeholder="https://example.com/image.jpg"
              required
            />
            {formData.photoUrl && (
              <div className="mt-3 relative h-40 w-full sm:w-64 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <img 
                  src={formData.photoUrl} 
                  alt="Preview" 
                  className="object-cover w-full h-full" 
                  onError={(e) => (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Invalid+Image'} 
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Short Description</label>
            <textarea
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              rows={2}
              maxLength={150}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b4c9b] focus:border-[#2b4c9b] outline-none transition-all bg-gray-50 focus:bg-white"
              placeholder="Brief overview for the structured course card..."
              required
            />
            <p className="text-xs text-gray-400 mt-1">Keep it short for the card preview.</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Long Description</label>
            <textarea
              name="longDescription"
              value={formData.longDescription}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b4c9b] focus:border-[#2b4c9b] outline-none transition-all bg-gray-50 focus:bg-white"
              placeholder="Detailed information for the dynamic course page..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2b4c9b] hover:bg-[#1a3375] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 mt-4"
          >
            Publish Course to Directory
          </button>
        </form>
      </div>
    </div>
  );
}
