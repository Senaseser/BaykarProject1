"use client"
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


import Blog1 from "../../assets/service1.svg"
import Blog2 from "../../assets/service2.svg"
import Blog3 from "../../assets/service3.svg"

const Services = () => {
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
    },
    {
      id: 4,
      image: Blog2,
      date: { day: "08", weekday: "Mon" },
      title: "How to Stage Your Home for a Quick Sale",
      description: "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc."
    },
    {
      id: 5,
      image: Blog3,
      date: { day: "26", weekday: "Wed" },
      title: "5 Tips for First-Time Home Sellers",
      description: "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus."
    }
  ]

  return (
    <div className="container mx-auto px-24  w-full h-full relative my-14 z-40">
      <div className="container mx-auto px-4 md:px-24">

        <div className="text-center mb-12 text-white">
          <span className="text-sm md:text-base font-medium mb-4 block">WHATS TRENDING</span>
          <h2 className="text-3xl md:text-4xl font-medium">Latest Blogs & Posts</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="relative"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className=" overflow-hidden max-w-[350px]">

                <div className="relative aspect-[4/3] max-w-[350px]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover flex justify-items-center"
                  />
  
                  <div className="absolute top-4 left-12 bg-white rounded-b-2xl p-1 text-center min-w-[60px]">
                    <div className="text-md text-[#2B2B2B] font-semibold">{blog.date.day}</div>
                    <div className="text-sm font-extralight text-[#2B2B2B]">{blog.date.weekday}</div>
                  </div>
                </div>
                

                <div className="p-2">
                  <h3 className="text-white text-xl font-medium mb-3">{blog.title}</h3>
                  <p className="text-white text-sm">{blog.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg z-10">
            <span className="sr-only">Previous</span>
            ←
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg z-10">
            <span className="sr-only">Next</span>
            →
          </button>

          <div className="swiper-pagination flex justify-center gap-2 mt-9"></div>
        </Swiper>
      </div>
    </div>
  )
}

export default Services