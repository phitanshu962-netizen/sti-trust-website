export interface Course {
  id: string;
  title: string;
  duration: string;
  shortDescription: string;
  longDescription: string;
  photoUrl: string;
}

export const initialCourses: Course[] = [
  {
    id: "1",
    title: "Diploma in Aviation Technology",
    duration: "1 Year",
    shortDescription: "Learn the fundamentals of aviation technology and maintenance.",
    longDescription: "This comprehensive 1-year diploma covers all core aspects of aviation technology, aircraft maintenance, and operations. Perfect for students looking to start a career in the aerospace industry. Practical training is included.",
    photoUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Certificate in Cabin Crew Training",
    duration: "6 Months",
    shortDescription: "Intensive training for aspiring cabin crew professionals.",
    longDescription: "A focused 6-month program designed to prepare you for a successful career as a flight attendant. Includes rigorous safety procedures, customer service excellence, and emergency response training.",
    photoUrl: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=600&auto=format&fit=crop"
  }
];

export const getCourses = (): Course[] => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("sti_courses");
    if (saved) return JSON.parse(saved);
    localStorage.setItem("sti_courses", JSON.stringify(initialCourses));
  }
  return initialCourses;
};

export const addCourse = (course: Course) => {
  if (typeof window !== "undefined") {
    const courses = getCourses();
    const newCourses = [...courses, course];
    localStorage.setItem("sti_courses", JSON.stringify(newCourses));
  }
};
