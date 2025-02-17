"use client"
import React, { useState } from 'react'
import Image from 'next/image'

import House1 from "../../assets/list4.svg"
import House2 from "../../assets/list3.svg"
import House3 from "../../assets/list2.svg"
import House4 from "../../assets/res.jpeg"
import BedIcon from "../../assets/bed.svg"
import BathIcon from "../../assets/bathroom.svg"
import Fire from "../../assets/fire.svg"
import Dolar from "../../assets/dolar.svg"
import Home from "../../assets/home.png"

const ListingsMobile = () => {
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
      tagIcon: Fire,
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
      tagIcon: Home,
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
      tagIcon: Dolar,
    },
    {
      id: 4,
      image: House4,
      price: "2,389",
      tag: "Popular",
      tagColor: "bg-red-100 text-red-500",
      title: "Grand Estate on the Hilltop",
      address: "103 Wright Court, WA 98168",
      beds: 4,
      baths: 3,
      tagIcon: Fire,
    }
  ]

  return (
    <div className="container mx-auto px-8 md:px-12  w-full h-full relative my-5">
        <div className="space-y-4 mb-6 md:mb-0">
          <span className="text-[#3a0ba3] font-medium">CHECKOUT OUR NEW</span>
          <h2 className="text-4xl font-medium">Latest Listed Properties</h2>
          <p className="text-[#808080]">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.
          </p>
        </div>

      <div className="flex gap-2 my-6 justify-center items-center">
        <button 
          onClick={() => setActiveFilter('all')}
          className={`px-6 py-2 rounded-full text-sm border ${
            activeFilter === 'all' 
              ? 'bg-[#3a0ba3] text-white border-[#3a0ba3]' 
              : 'border-[#3a0ba3] text-[#3a0ba3]'
          }`}
        >
          All
        </button>
        <button 
          onClick={() => setActiveFilter('sell')}
          className={`px-6 py-2 rounded-full text-sm border ${
            activeFilter === 'sell' 
              ? 'bg-[#3a0ba3] text-white border-[#3a0ba3]' 
              : 'border-[#3a0ba3] text-[#3a0ba3]'
          }`}
        >
          Sell
        </button>
        <button 
          onClick={() => setActiveFilter('rent')}
          className={`px-6 py-2 rounded-full text-sm border ${
            activeFilter === 'rent' 
              ? 'bg-[#3a0ba3] text-white border-[#3a0ba3]' 
              : 'border-[#3a0ba3] text-[#3a0ba3]'
          }`}
        >
          Rent
        </button>
      </div>

      <div className="space-y-8 w-[80%] mx-auto">
        {listings.map((listing) => (
          <div key={listing.id} className="space-y-2">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="aspect-[672/440] relative max-h-[440px]">
                <Image
                  src={listing.image}
                  alt={listing.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className={`absolute bottom-4 left-4 flex items-center gap-1 ${listing.tagColor} px-3 py-1 rounded-full`}>
                <Image
                  src={listing.tagIcon}
                  alt=""
                  width={12}
                  height={12}
                  className="w-3 h-3"
                />
                <span className="text-xs">{listing.tag}</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold">$</span>
                <span className="text-lg font-semibold">{listing.price}</span>
              </div>
              <h3 className="font-medium">{listing.title}</h3>
              <p className="text-[#808080] text-xs">{listing.address}</p>
              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <Image src={BedIcon} alt="bed" width={16} height={16} className="w-4 h-4"/>
                  <span className="text-sm">{listing.beds} Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={BathIcon} alt="bath" width={16} height={16} className="w-4 h-4"/>
                  <span className="text-sm">{listing.baths} Bath</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-[50%] flex justify-center  items-center mx-auto mt-6 py-2.5 text-[#3a0ba3] text-sm font-medium border border-[#3a0ba3] rounded-full">
        View more properties
      </button>
    </div>
  )
}

export default ListingsMobile