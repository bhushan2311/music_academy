'use client'        // tells it is client side component
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Courses{
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
}

function FeaturedCourses() {

    // const featuredCourses: {
    //     id: number,
    //     title: string,
    //     slug: string,
    //     description: string,
    //     price: number,
    //     instructor: string,
    //     isFeatured: boolean,
    //   } []= courseData.courses.filter(course=> course.isFeatured);
    const featuredCourses: Courses[] = courseData.courses.filter((course:Courses)=> course.isFeatured);     // featuredCourses could be empty thats why defined type ':Courses[]' 

  return (
    <div className="py-12 bg-gray-900">
        <div className="text-center">
            <h2 className="py-2 text-teal-600 text-base font-semibold tracking-wide uppercase">Featured Courses</h2>
            <p className="mt-2 text-3xl sm:text-4xl leading-8 font-bold tracking-tight">Learn with the best</p>
        </div>
        <div className="p-5 my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map(course=>(
            <div className="flex justify-center" key={course.id}>
                <BackgroundGradient className="flex flex-col rounded-[22px] dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                    <div className="p-4 sm:p-6 flex flex-col flex-grow justify-center items-center text-center">
                        <p className="text-lg sm:text-xl dark:text-neutral-200 mt-4 mb-2">{course.title}</p>
                        <p className="text-sm dark:text-neutral-400 flex-grow">{course.description}</p>
                        <Link href={`/courses/${course.slug}`}>
                            Learn more
                        </Link>
                    </div>
                </BackgroundGradient>
                </div>

            ))}
        </div>
        <div className="text-center mt-2">
            <Link href={"/courses"}
            className="border px-2 py-2 border-neutral-600 text-neutral-900 bg-white hover:bg-gray-100 transition duration-200 rounded-md">
                View all courses
            </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses;