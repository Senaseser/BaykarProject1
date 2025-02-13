import Image from 'next/image'
import React from 'react'

import Location from "../../assets/location.svg";
import MailIcon from '@/assets/mail';
import PhoneIcon from '@/assets/phone';

const Header = () => {
  return (
    <header className=" h-10 w-full bg-[#3a0ba3] text-white text-xs py-2 px-6 ">
    <div className='max-w-7xl mx-auto flex justify-between items-center '>
  <div className="flex justify-center items-center gap-2 ">
  <Image
          src={Location}
          alt="location"
          width={14}
          height={14}
     
        />
    <p>Lorem Ipsum has been the industrys standard dummy</p>
  </div>
  <div className="flex items-center gap-4">
  <div className='flex justify-center items-center gap-2'>
  <PhoneIcon color='white'/>
       +90123 45 67</div>
    <div className='flex justify-center items-center gap-2'>
      <MailIcon color='white'/>
   
        mail@mail.com</div>
  </div>
  </div>
  </header>
  )
}

export default Header