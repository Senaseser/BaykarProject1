"use client"
import React from 'react'
import Image from 'next/image'

import Blog1 from "../../assets/service1.svg"
import Blog2 from "../../assets/service2.svg"
import Blog3 from "../../assets/service3.svg"

const ServicesMobile = () => {
  const blogs = [
    {
      id: 1,
      image: Blog1,
      date: { day: "28", weekday: "Tue" },
      title: "Top 10 Home Buying Mistakes to Avoid",
      description: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"
    },
    {
      id: 2,
      image: Blog2,
      date: { day: "08", weekday: "Mon" },
      title: "How to Stage Your Home for a Quick Sale",
      description: "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc."
    },
    {
      id: 3,
      image: Blog3,
      date: { day: "26", weekday: "Wed" },
      title: "5 Tips for First-Time Home Sellers",
      description: "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus."
    }
  ]

  return (
    <div className="container mx-auto px-4 w-full h-full relative my-14 z-40">
      <div className="text-center mb-8 text-white">
        <span className="text-sm font-medium mb-2 block">WHATS TRENDING</span>
        <h2 className="text-2xl font-medium">Latest Blogs & Posts</h2>
      </div>

      <div className="flex flex-col lg:gap-6 gap-3">
        {blogs.map((blog) => (
          <div key={blog.id} className="overflow-hidden w-full rounded-2xl">
            <div className="relative aspect-[3/2] w-full max-w-[600px]">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover rounded-2xl"
              />

              <div className="absolute top-[4px] lg:top-[10px] xl:top-[14px] left-24 bg-white rounded-b-2xl p-1 text-center min-w-[60px]">
                <div className="text-md text-[#2B2B2B] font-semibold">{blog.date.day}</div>
                <div className="text-sm font-extralight text-[#2B2B2B]">{blog.date.weekday}</div>
              </div>
            </div>

            <div className="py-4 px-9 lg:px-0">
              <h3 className="text-white text-xl font-medium mb-2">{blog.title}</h3>
              <p className="text-white text-sm opacity-80">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="flex justify-start items-start bg-white text-[#3a0ba3] font-medium py-3 px-12 rounded-full mt-8 mx-9">
        View more blogs
      </button>
    </div>
  )
}

export default ServicesMobile