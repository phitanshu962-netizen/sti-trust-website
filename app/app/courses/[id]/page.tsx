"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getCourses, Course } from "@/lib/courseData";

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [course, setCourse] = useState<Course | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = params.id as string;
    const allCourses = getCourses();
    const found = allCourses.find(c => c.id === id);
    if (found) {
      setCourse(found);
    }
    setMounted(true);
  }, [params.id]);

  if (!mounted) return (
    <div className="flex justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2b4c9b]"></div>
    </div>
  );

  if (!course) {
    return (
      <div className="py-20 text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Course Not Found</h2>
        <p className="text-gray-600 mb-8">The course you're looking for doesn't exist or has been removed.</p>
        <button onClick={() => router.push('/courses')} className="bg-[#2b4c9b] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#1a3375] transition-colors">
          Browse All Courses
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex mb-8 text-sm text-gray-500 font-medium space-x-2">
        <Link href="/" className="hover:text-[#2b4c9b] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/courses" className="hover:text-[#2b4c9b] transition-colors">Courses</Link>
        <span>/</span>
        <span className="text-gray-900 truncate max-w-[200px] sm:max-w-xs">{course.title}</span>
      </nav>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Banner area */}
        <div className="relative h-64 md:h-80 w-full bg-[#1a3375]">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={course.photoUrl} 
            alt={course.title} 
            className="w-full h-full object-cover"
            onError={(e) => (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop'}
          />
          <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-gray-900 to-transparent">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-yellow-400 text-blue-900 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                {course.duration}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {course.title}
            </h1>
          </div>
        </div>

        {/* Content area */}
        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Course Overview</h2>
                <div className="prose prose-lg text-gray-600 whitespace-pre-line leading-relaxed">
                  {course.longDescription}
                </div>
              </section>
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 sticky top-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Key Details</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm text-[#2b4c9b]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Duration</p>
                      <p className="text-lg font-bold text-gray-900">{course.duration}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm text-[#2b4c9b]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Delivery</p>
                      <p className="text-lg font-bold text-gray-900">Institute Campus</p>
                    </div>
                  </li>
                </ul>
                <button className="w-full mt-8 bg-[#2b4c9b] hover:bg-[#1a3375] text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
