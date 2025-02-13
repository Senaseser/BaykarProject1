"use client"
import React from 'react'
import Image from 'next/image'

// Import images
import House1 from "../../assets/image2.svg"
import House2 from "../../assets/image3.svg"
import House3 from "../../assets/image4.svg"
import Octagon from "../../assets/octagon.svg"
import SmartHome from "../../assets/smarthome.svg"
import Ellipse from "../../assets/ellipse3.svg"


const About = () => {
  return (

    <div className="container mx-auto px-24 py-12 relative">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <span className="text-[#3a0ba3] font-medium">WHO ARE WE</span>
          
          <h2 className="text-4xl font-medium leading-tight">
            Assisting individuals in locating the appropriate real estate.
          </h2>
          
          <p className="text-[#808080]">
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-6 bg-white shadow-lg rounded-3xl">
                <Image
                  src={Octagon}
                  alt="home icon"
                  width={40}
                  height={40}
                />

              <div>
                <h3 className="text-lg font-medium text-[#4361ee] mb-2">
                  Lorem ipsum has been the
                </h3>
                <p className="text-[#808080]">
                  when an unknown printer took a galley
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white shadow-lg rounded-3xl">

                <Image
                  src={SmartHome}
                  alt="user icon"
                  width={40}
                  height={40}
                />
      
              <div>
                <h3 className="text-lg font-medium text-[#4361ee] mb-2">
                  Lorem ipsum has been the
                </h3>
                <p className="text-[#808080]">
                  when an unknown printer took a galley
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative grid grid-cols-2 ">
          <div className="col-span-1 mt-16">
            <Image
              src={House1}
              alt="Modern house with pool"
              width={280}
              height={500}
              className="object-cover rounded-2xl"
            />
          </div>
          
          <div className="col-span-1  flex flex-col justify-items-center">
          <div className="aspect-square relative ">
            <Image
              src={House2}
              alt="Bedroom interior"
              className="object-cover rounded-2xl"
            />
          </div>
          
          <div className="aspect-[2/1] relative">
          <Image
        src={Ellipse}
        alt="ellipse"
        width={50}
        height={50}
        className="absolute bottom-0 right-32 z-40"
      />
            <Image
              src={House3}
              alt="Living room"
              className="object-cover rounded-2xl"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About