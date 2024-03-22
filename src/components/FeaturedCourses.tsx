import courseData from "../data/music_courses.json";
import Link from "next/link";

function FeaturedCourses() {
  return (
    <div className="py-12 bg-gray-900">
        <div className="border border-red-500 text-center">
            <h2 className="py-2 text-teal-600 text-base font-semibold tracking-wide uppercase">Featured Courses</h2>
            <p className="mt-2 text-3xl sm:text-4xl leading-8 font-bold tracking-tight">Learn with the best</p>
        </div>
        <div className="border border-green-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-yellow-500">1</div>
            <div className="border border-yellow-500">2</div>
            <div className="border border-yellow-500">3</div>
        </div>
        <div className="border border-yellow-500 text-center mt-2">
            <Link href={"/courses"}
            className="border px-2 py-2 border-neutral-600 text-neutral-900 bg-white hover:bg-gray-100 transition duration-200 rounded-md">
                View all courses
            </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses;