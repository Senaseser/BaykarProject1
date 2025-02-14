"use client"
import React, { useState } from 'react'
import Image from 'next/image'

import Avatar2 from "../../assets/person.svg"
import Quotation from "../../assets/quotatio.svg"
import Ellipse from "../../assets/ellipse3.svg"

const Blogs = () => {
  const testimonials = [
    {
      id: 1,
      name: "Barbara D. Smith",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
      avatar: Avatar2,
      rating: 4
    },
    {
      id: 2,
      name: "John K. Miller",
      text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      avatar: Avatar2,
      rating: 5
    },
    {
      id: 3,
      name: "Sarah Johnson",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
      avatar: Avatar2,
      rating: 4
    }
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const handlePrev = () => {
    setCurrentTestimonial(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentTestimonial(prev => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <div className="container mx-auto px-24  w-full h-full relative my-14">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">

        <div className="md:w-1/2">
          <h3 className="text-[#4361EE] text-sm md:text-base font-medium mb-4">
            TESTIMONIALS
          </h3>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Look What Our<br />Customers Say!
          </h2>
          <p className="text-[#2B2B2B] mb-8">
            Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.
          </p>
          <div className="flex gap-6">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-[#4361EE] flex items-center justify-center text-[#4361EE] hover:bg-[#4361EE] hover:text-white transition-colors"
            >
              ←
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#4361EE] flex items-center justify-center text-[#4361EE] hover:bg-[#4361EE] hover:text-white transition-colors"
            >
              →
            </button>
          </div>
        </div>

        <div className="md:w-1/2 relative min-h-[282px]">
          <Image
            src={Ellipse}
            alt="ellipse"
            width={60}
            height={60}
            className="absolute -top-7 -left-5 z-30 -rotate-90"
          />
          <div className='flex justify-items-center gap-3 '>
          <div className="bg-white rounded-[30px] p-8 shadow-lg relative z-40">
            <div className="text-6xl text-[#2B2B2B] font-serif absolute top-6 left-4">
              <Image 
                src={Quotation}
                alt="quotation"
                width={48}
                height={48}
              />
            </div>
            <p className="text-[#2B2B2B] mb-8 relative z-10 mt-10">
              {testimonials[currentTestimonial].text}
            </p>

            <div className="flex justify-between items-center mb-[24px] border-b border-[#D4D4D4]"></div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image 
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-medium">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className="text-yellow-400">
                        {index < testimonials[currentTestimonial].rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
        
            </div>
          </div>
      
                <div className="flex flex-col gap-2 h-full justify-items-center">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-[#4361EE] w-4' 
                        : 'bg-[#D4D4D4]'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs