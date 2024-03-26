import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import { title } from 'process';
import Link from "next/link";

function UpcomingWebinar() {
    const featuredWebinars = [
        {
          title: 'Understanding Music Theory',
          description:
            'Dive deep into the fundamentals of music theory and enhance your musical skills.',
          slug: 'understanding-music-theory',
          isFeatured: true,
        },
        {
          title: 'The Art of Songwriting',
          description:
            'Learn the craft of songwriting from experienced musicians and songwriters.',
          slug: 'the-art-of-songwriting',
          isFeatured: true,
        },
        {
          title: 'Mastering Your Instrument',
          description:
            'Advanced techniques to master your musical instrument of choice.',
          slug: 'mastering-your-instrument',
          isFeatured: true,
        },
        {
          title: 'Music Production Essentials',
          description:
            'Get started with music production with this comprehensive overview.',
          slug: 'music-production-essentials',
          isFeatured: true,
        },
        // Added two more webinars
        {
          title: 'Live Performance Techniques',
          description:
            'Enhance your live performance skills with expert tips and strategies.',
          slug: 'live-performance-techniques',
          isFeatured: true,
        },
        {
          title: 'Digital Music Marketing',
          description:
            'Learn how to promote your music effectively in the digital age.',
          slug: 'digital-music-marketing',
          isFeatured: true,
        },
      ];

  return (
  <div className='flex flex-col justify-center items-center py-12 px-8 bg-gray-900'>
    <div>
        <h2 className="py-2 text-teal-600 text-base font-semibold tracking-wide uppercase text-center">Featured Webinar</h2>
        <p className="text-center mt-2 text-3xl sm:text-4xl leading-8 font-bold tracking-tight">Enhance Your Musical Journey</p>
    </div>
    <div className="text-center px-2 sm:px-20">
        <HoverEffect items={featuredWebinars.map(webinar =>( {
            title:webinar.title,
            description:webinar.description,
            link:'/'
        }))} />
    </div>
    <div className="text-center mt-2">
            <Link href={"/courses"}
            className="border px-2 py-2 border-neutral-600 text-neutral-900 bg-white hover:bg-gray-100 transition duration-200 rounded-md">
                View all Webinars
            </Link>
        </div>
  </div>
  )
}

export default UpcomingWebinar