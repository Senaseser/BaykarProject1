import Image from 'next/image'
import React from 'react'

import House from "../../assets/house.svg";

import MailIcon from '@/assets/mail';
import Facebook from "../../assets/facebook.svg";
import Linkedln from "../../assets/linkedln.svg";
import Instagram from "../../assets/insta.svg";
import PhoneIcon from '@/assets/phone';


const Footer = () => {
  return (
    <footer className="bg-[#4361EE] bg-opacity-10 text-[#2B2B2B]">
    <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-6 gap-10  ">
      <div className='col-span-2 justify-items-center'>
        <div className="flex items-center space-x-2">
          <div className="bg-[#3a0ba3] text-white p-3 rounded-full">
          <Image
            src={House}
            alt="home"
            width={20}
            height={20}
       
          />
          </div>
          <h2 className="text-xl font-semibold text-[#0B090A] hidden md:flex">Rezilla</h2>
          <h2 className="text-xl font-semibold text-[#0B090A] flex md:hidden">Logo</h2>
        </div>
        <p className="mt-4 text-sm font-normal text-[#808080] md:text-[#2B2B2B] ">
          Lorem ipsum has been the industry standard dummy text.
        </p>
        <div className="mt-4 space-y-2 text-[#808080] md:text-[#2B2B2B]">
          <div className="flex items-center space-x-2">
            <div className='hidden md:block'>    <PhoneIcon color='#3a0ba3'/> </div> <div className='block md:hidden'>   <PhoneIcon color='#808080'/></div>
      
            <span>+90123 45 67</span>
          </div>
          <div className="flex items-center space-x-2 text-[#808080] md:text-[#2B2B2B]">
          <div className='hidden md:block'>    <MailIcon color='#3a0ba3'/> </div> <div className='block md:hidden'>   <PhoneIcon color='#808080'/></div>
            <span>mail@mail.com</span>
          </div>
        </div>
      </div>
      
      <div className='hidden md:block col-span-1 '>
        <h3 className="text-lg font-medium text-[#0B090A]">Quick Links</h3>
        <ul className="mt-4 space-y-2 ">
        <li className='text-[#2B2B2B] font-normal text-sm'>Home</li>
        <li className='text-[#2B2B2B] font-normal text-sm'>About</li>
        <li className='text-[#2B2B2B] font-normal text-sm'>Listings</li>
        <li className='text-[#2B2B2B] font-normal text-sm'>Services</li>
        <li className='text-[#2B2B2B] font-normal text-sm'>Blogs</li>
        <li className='text-[#2B2B2B] font-normal text-sm'>Become an Agent</li>
        </ul>
      </div>
      
      <div className='hidden md:block col-span-1'>
        <h3 className="text-lg font-medium text-[#0B090A]">Discovery</h3>
        <ul className="mt-4 space-y-2 ">
          <li className='text-[#2B2B2B] font-normal text-sm'>Canada</li>
          <li className='text-[#2B2B2B] font-normal text-sm'>United States</li>
          <li className='text-[#2B2B2B] font-normal text-sm'>Germany</li>
          <li className='text-[#2B2B2B] font-normal text-sm'>Africa</li>
          <li className='text-[#2B2B2B] font-normal text-sm'>India</li>
        </ul>
      </div>

      <div className='col-span-2 justify-items-center'>
        <h3 className="text-lg font-medium text-[#0B090A]">Subscribe to our Newsletter!</h3>
        <div className="mt-4 flex items-center relative min-w-72">
          <input
            type="email"
            placeholder="Email Address"
            className="px-3 py-5 flex-1 border text-sm rounded-full focus:outline-none "
            
          ></input>
          <button className="bg-[#3a0ba3] text-white py-3 px-4 rounded-full absolute top-2 right-2">
            ➜
          </button>
        </div>
        <h3 className="text-lg font-medium text-[#0B090A] mt-6">Follow Us on</h3>
        <div className="flex space-x-4 mt-2">
        <Image
            src={Linkedln}
            alt="linkedln"
            width={16}
            height={16}
       
          />
  <Image
            src={Facebook}
            alt="facebook"
            width={12}
            height={12}
       
          />
  <Image
            src={Instagram}
            alt="instagram"
            width={16}
            height={16}
       
          />
        </div>
      </div>
    </div>
    
    <div className="bg-[#0B090A] text-[#AAAAAA] text-center h-10 w-full text-xs flex justify-around items-center">
      <p>&copy; Company – All rights reserved</p>
      <div className=" justify-center space-x-6 hidden md:flex">
        <span>Terms and Conditions</span>
        <span>Privacy Policy</span>
        <span>Disclaimer</span>
      </div>
    </div>
  </footer>
  )
}

export default Footer