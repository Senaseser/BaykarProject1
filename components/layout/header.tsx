import Image from 'next/image'
import React from 'react'

import Location from "../../assets/location.svg";
import Phone from "../../assets/phone.svg";
import Mail from "../../assets/mail.svg";

const Header = () => {
  return (
    <header className=" h-10 w-full bg-purple-700 text-white text-sm py-2 px-6 ">
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
    <Image
          src={Phone}
          alt="phone"
          width={14}
          height={14}
     
        />
       +90123 45 67</div>
    <div className='flex justify-center items-center gap-2'>
    <Image
          src={Mail}
          alt="mail"
          width={14}
          height={14}
     
        />
        mail@mail.com</div>
  </div>
  </div>
  </header>
  )
}

export default Header