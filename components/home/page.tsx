"use client"
import Image from 'next/image'
import React,{useState} from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image1 from "../../assets/image1.svg" 
import Building from "../../assets/listings.svg" 
import Customers from "../../assets/customers.svg" 
import Vector from "../../assets/vector.svg"
import Search from "../../assets/search.svg"
import Settings from "../../assets/settings.svg"
import Ellipse1 from "../../assets/ellipse1.svg"
import Ellipse2 from "../../assets/ellipse2.svg"
import Down from "../../assets/down.svg"


const Home = () => {
  const [activeTab, setActiveTab] = useState('sale');

  return (
    <div className="container mx-auto px-24  w-full h-full relative ">
      <div className="my-4 mt-12 ">
      <Image
                src={Ellipse2}
                alt="ellipse"
               width={90}
               height={90}
               className='absolute -bottom-10 -left-12 z-100'
              />
        <span className="text-[#3a0ba3] font-medium">REAL ESTATE</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className='relative'>
          <h1 className="text-5xl font-medium mb-4 leading-tight">Find a perfect<br />home you love..!</h1>
          <p className="text-[#808080] mb-8 text-base">
            Lorem ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley
          </p>

          <div className="relative overflow-visible">
          <Image
                src={Ellipse1}
                alt="ellipse"
               width={50}
               height={50}
               className='absolute -top-7 right-4 z-100'
              />
        <Swiper
          modules={[Pagination, Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + ' bg-[#3a0ba3]"></span>';
            },
          }}
          className="h-full rounded-2xl pb-10 "
          >
        <SwiperSlide className="aspect-[16/9]">
        <div className=" w-full h-0 pb-[56.25%]">
              <Image
                src={Image1}
                alt="Luxury Room"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-2xl "
              />
              </div>
            </SwiperSlide>
            <SwiperSlide className="aspect-[16/9]">
            <div className=" w-full h-0 pb-[56.25%]">
              <Image
                src={Image1}
                alt="Luxury Room"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-2xl "
              />
              </div>
            </SwiperSlide>
            <SwiperSlide className="aspect-[16/9]">
            <div className=" w-full h-0 pb-[56.25%]">
              <Image
                src={Image1}
                alt="Luxury Room"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-2xl "
              />
              </div>
            </SwiperSlide>
            <SwiperSlide className="aspect-[16/9]">
            <div className=" w-full h-0 pb-[56.25%]">
              <Image
                src={Image1}
                alt="Luxury Room"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-2xl "
              />
              </div>
            </SwiperSlide>
            
            <button className="swiper-button-prev absolute !left-0 !top-[45%] bg-white p-2 rounded-full shadow-lg !z-30">
            <Image
       src={Vector}
              alt="vector"
              width={10}
              height={10}
              className='rotate-180'
            />
            </button>
            <button className="swiper-button-next absolute !right-4 !top-[45%] bg-white p-2 rounded-full shadow-lg z-30">
            <Image
              src={Vector}
              alt="vector"
              width={10}
              height={10}
            />
            </button>
            
            <div className="swiper-pagination absolute -bottom-12 left-0 w-full z-30 flex justify-center gap-3"></div>
          </Swiper>
          </div> </div>

        <div className="w-full bg-white p-6 rounded-2xl shadow-lg h-[500px]">
        {/* border-[#3a0ba3] */}
        <div className="flex justify-between items-center mb-[24px] border-b scale-x-110 border-[#D4D4D4]">
            <div className="tab-pagination flex justify-between items-center gap-12 "></div>
          </div>
          <Swiper
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{
            el: '.tab-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              const texts = ['For Sale', 'For Rent'];
              return `<button class="${className} ${
                index ===  (activeTab === 'sale' ? 0 : 1)  ? 'text-[#3a0ba3] relative flex justify-between items-center leading-tight' : 'text-[#D4D4D4] leading-tight'
              }  px-4">${texts[index]}</button>`;
            },
          }}
          onSlideChange={(swiper) => setActiveTab(swiper.activeIndex === 0 ? 'sale' : 'rent')}
        >
             <SwiperSlide>
            <div className="space-y-6 mt-6">
              <input
                type="text"
                placeholder="New York, San Francisco, etc"
                className="w-[95%] mx-1 p-3 border rounded-full bg-[#D4D4D4] bg-opacity-20 border-none text-[#6D6A75] text-opacity-50"
              />
              
              <select className="w-[95%] mx-1 p-3 border rounded-full bg-[#D4D4D4] bg-opacity-20 border-none text-[#6D6A75] text-opacity-50 appearance-none relative">
                <option>Select Property Type</option>
 
              </select>
              <Image
    src={Down}
    alt="dropdown"
    width={12}
    height={12}
    className="absolute right-9 top-[29%] transform -translate-y-1/2"
  />

              <select className="w-[95%] mx-1 p-3  border rounded-full bg-[#D4D4D4] bg-opacity-20 border-none text-[#6D6A75] text-opacity-50 appearance-none relative">
                <option>Price Range</option>
              </select>
              <Image
    src={Down}
    alt="dropdown"
    width={12}
    height={12}
    className="absolute right-9 top-[51%] transform -translate-y-1/2"
  />

              <button className="flex items-center gap-2 text-[#3a0ba3] text-sm">
            <Image
              src={Settings}
              alt="settings"
              width={15}
              height={15}
            />
              <span>Advance Search</span>
            </button>
<div className='w-full'>
            <button className="flex justify-center items-center w-full gap-3 bg-[#3a0ba3] text-white py-3 rounded-full">
            <Image
              src={Search}
              alt="search"
              width={22}
              height={22}
            />
              Search
            </button>
            </div> 
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="space-y-6 mt-6">
              <input
                type="text"
                placeholder="New York, San Francisco, etc"
                className="w-[95%] mx-1 p-3 border rounded-full bg-[#D4D4D4] bg-opacity-20 border-none text-[#6D6A75] text-opacity-50"
              />
              
              <select className="w-[95%] mx-1 p-3 border rounded-full bg-[#D4D4D4] bg-opacity-20 border-none text-[#6D6A75] text-opacity-50 appearance-none relative">
                <option>Select Property Type</option>
 
              </select>
              <Image
    src={Down}
    alt="dropdown"
    width={12}
    height={12}
    className="absolute right-9 top-[29%] transform -translate-y-1/2"
  />

              <select className="w-[95%] mx-1 p-3  border rounded-full bg-[#D4D4D4] bg-opacity-20 border-none text-[#6D6A75] text-opacity-50 appearance-none relative">
                <option>Price Range</option>
              </select>
              <Image
    src={Down}
    alt="dropdown"
    width={12}
    height={12}
    className="absolute right-9 top-[51%] transform -translate-y-1/2"
  />

              <button className="flex items-center gap-2 text-[#3a0ba3] text-sm">
            <Image
              src={Settings}
              alt="settings"
              width={15}
              height={15}
            />
              <span>Advance Search</span>
            </button>
<div className='w-full'>
            <button className="flex justify-center items-center w-full gap-3 bg-[#3a0ba3] text-white py-3 rounded-full">
            <Image
              src={Search}
              alt="search"
              width={22}
              height={22}
            />
              Search
            </button>
            </div> 
            </div>
          </SwiperSlide>
        </Swiper>
        </div> 
      </div>

      <div className="flex justify-center gap-8 mt-8 flex-col md:flex-row">
        <div className="flex  items-center md:gap-2 gap-6 bg-white border-none rounded-full py-4 px-5 shadow-lg">
          <div className="flex -space-x-2">
            <Image
              src={Customers}
              alt="Customer Avatars"
              width={150}
              height={60}
            />
          </div>
          <div>
            <p >72k+ Happy</p>
            <p>Customers</p>
          </div>
        </div>

        <div className="flex  gap-6 items-center md:gap-2 bg-white border-white rounded-full py-4 px-5 shadow-lg">
          <Image
            src={Building}
            alt="Building Icon"
            width={50}
            height={50}
          />
          <div>
            <p >200+ New</p>
            <p>Listings Everyday!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home