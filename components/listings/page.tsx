"use client"
import React, { useState } from 'react'
import Image from 'next/image'

import House1 from "../../assets/list4.svg"
import House2 from "../../assets/list3.svg"
import House3 from "../../assets/list2.svg"
import House4 from "../../assets/res.jpeg"
import BedIcon from "../../assets/bed.svg"
import BathIcon from "../../assets/bathroom.svg"
import Ellipse from "../../assets/ellipse3.svg"
import Fire from "../../assets/fire.svg"
import Dolar from "../../assets/dolar.svg"
import Home from "../../assets/home.png"


const Listings = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const listings = [
    {
      id: 1,
      image: House1,
      price: "5,970",
      tag: "Popular",
      tagColor: "bg-red-100 text-red-500",
      title: "Tranquil Haven in the Woods",
      address: "103 Wright CourtBurien, WA 98168",
      beds: 4,
      baths: 3,
      tagIcon:Fire,
    },
    {
      id: 2,
      image: House2,
      price: "1,970",
      tag: "New Listing",
      tagColor: "bg-blue-100 text-blue-500",
      title: "Serene Retreat by the Lake",
      address: "1964 Jehovah Drive, VA 22408",
      beds: 3,
      baths: 2,
      tagIcon:Home,
    },
    {
      id: 3,
      image: House3,
      price: "3,450",
      tag: "Discounted Price",
      tagColor: "bg-green-100 text-green-500",
      title: "Charming Cottage in the Meadow",
      address: "1508 Centennial Farm RoadHarlan, 51537",
      beds: 4,
      baths: 4,
      tagIcon:Dolar,

    },
    {
      id: 4,
      image: House4,
      price: "2,389",
      tag: "Popular",
      tagColor: "bg-red-100 text-red-500",
      title: "Grand Estate Manor",
      address: "103 Wright Court, NY 12401",
      beds: 4,
      baths: 3,
      tagIcon:Fire,
    }
  ]

  return (
 
    <div className="container mx-auto px-24  w-full h-full relative my-5">
      <Image
        src={Ellipse}
        alt="ellipse"
        width={100}
        height={100}
        className="absolute -bottom-32 right-36 -z-10"
      />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div className="space-y-4 mb-6 md:mb-0">
          <span className="text-[#3a0ba3] font-medium">CHECKOUT OUR NEW</span>
          <h2 className="text-4xl font-medium">Latest Listed Properties</h2>
          <p className="text-[#808080]">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.
          </p>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <button 
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2 rounded-full ${
              activeFilter === 'all' 
                ? 'bg-[#3a0ba3] text-white' 
                : 'border border-[#3a0ba3] text-[#3a0ba3]'
            }`}
          >
            All
          </button>
          <button 
            onClick={() => setActiveFilter('sell')}
            className={`px-6 py-2 rounded-full ${
              activeFilter === 'sell' 
                ? 'bg-[#3a0ba3] text-white' 
                : 'border border-[#3a0ba3] text-[#3a0ba3]'
            }`}
          >
            Sell
          </button>
          <button 
            onClick={() => setActiveFilter('rent')}
            className={`px-6 py-2 rounded-full ${
              activeFilter === 'rent' 
                ? 'bg-[#3a0ba3] text-white' 
                : 'border border-[#3a0ba3] text-[#3a0ba3]'
            }`}
          >
            Rent
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {listings.map((listing) => (
          <div key={listing.id} className="bg-white overflow-hidden ">
            <div className="relative aspect-square rounded-[30px] overflow-hidden md:p-0 p-5 max-w-[400px] max-h-[400px]">
              <Image
                src={listing.image}
                alt={listing.title}
                fill
                className="object-cover max-w-[400px] max-h-[400px]"
              />
              <div className={`flex items-center gap-2 absolute bottom-4 left-4 ${listing.tagColor} px-4 py-1 rounded-full text-xs md:text-sm`}>
              <Image
                src={listing.tagIcon}
                alt=''
                width={12}
                height={12}
               className="w-3 h-3 md:w-4 md:h-4"
              />{listing.tag}
              </div>
            </div>

            <div className="p-4 md:p-6 space-y-3 md:space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-medium">$</span>
                <span className="text-xl font-medium">{listing.price}</span>
              </div>

              <h3 className="text-lg md:text-xl font-medium">{listing.title}</h3>
              <p className="text-[#808080] text-xs md:text-sm">{listing.address}</p>

              <div className="flex items-center gap-4 pt-3 md:pt-4 border-t max-w-[400px] max-h-[400px]">
                <div className="flex items-center gap-2">
                  <Image src={BedIcon} alt="bed" width={20} height={20}  className="w-4 h-4 md:w-5 md:h-5"/>
                  <span className="text-sm md:text-base">{listing.beds} Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={BathIcon} alt="bath" width={20} height={20}  className="w-4 h-4 md:w-5 md:h-5"/>
                  <span className="text-sm md:text-base">{listing.baths} Bath</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Listings