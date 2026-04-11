"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getCourses, Course } from "@/lib/courseData";

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setCourses(getCourses());
    setMounted(true);
  }, []);

  if (!mounted) return (
    <div className="flex justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2b4c9b]"></div>
    </div>
  );

  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl text-[#1a4b8f] uppercase font-semibold">COURSES</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 px-2 md:px-10">
        {courses.map((course) => (
          <Link href={`/courses/${course.id}`} key={course.id} className="group block">
            <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] flex flex-col pt-2 px-2 pb-0">
              <div className="relative h-48 md:h-52 w-full overflow-hidden border border-gray-100">
                <img 
                  src={course.photoUrl} 
                  alt={course.title} 
                  className="w-full h-full object-fill md:object-cover"
                  onError={(e) => (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop'}
                />
              </div>
              <div className="py-4 md:py-6 flex-grow flex items-center justify-center bg-white">
                <h3 className="text-[17px] md:text-[19px] font-black text-black uppercase text-center tracking-wide leading-tight">
                  {course.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {courses.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl">No courses available at the moment.</p>
        </div>
      )}
    </div>
  );
}
