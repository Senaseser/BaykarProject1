"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import House from "../../assets/house.svg";
import Profile from "../../assets/profilee.svg";
import MenuIcon from "../../assets/menu.svg";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  
  return (
    <nav className="sticky top-0 left-0 w-full bg-white py-4 px-6 h-[70px] z-50">
        <div className="max-w-7xl mx-auto justify-between items-center hidden md:flex">
    <ul className="flex justify-center space-x-6">
    {["Home", "About", "Listings", "Services", "Blogs"].map((item) => (
            <li key={item} className="text-center md:text-left">
              <Link
                href={`/#${item.toLowerCase()}`}
                className="block text-[#2B2B2B] hover:bg-[#4361EE] hover:bg-opacity-30 px-3 py-2 rounded-[30px]"
              >
                {item}
              </Link>
            </li>
          ))}
    </ul>
    <div className="flex items-center space-x-2">
      <div     className="w-10 h-10 bg-[#3a0ba3] text-white flex items-center justify-center rounded-full">
    <Image
            src={House}
            alt="home"
            width={20}
            height={20}
       
          />
</div>
    <span className="font-semibold text-xl">Logo</span>
  </div>
  <div className=" items-center space-x-4 hidden lg:flex">
    <a href="#" className="flex items-center gap-2">
    <Image
            src={Profile}
            alt="home"
            width={18}
            height={18}
       
          /> Login/Register
    </a>
    <button className="bg-[#3a0ba3] text-white px-4 py-2 rounded-full flex items-center gap-2">
    <Image
            src={House}
            alt="home"
            width={18}
            height={18}
       
          /> Add Listing
    </button>
  </div>
  </div>



  <div className="flex justify-between items-center md:hidden">
  <div className="flex items-center space-x-4">
      <div     className="w-10 h-10 bg-[#3a0ba3] text-white flex items-center justify-center rounded-full">
    <Image
            src={House}
            alt="home"
            width={20}
            height={20}
       
          />
</div>
    <span className="font-semibold text-xl">Logo</span>
  </div>
  <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <Image src={MenuIcon} alt="Menu" width={24} height={24} />
        </button>
    <ul className={`absolute md:static top-16 left-0 w-full  bg-white  p-4 transition-all duration-600 ${
            menuOpen ? "block" : "hidden"
          }`}
>
    {["Home", "About", "Listings", "Services", "Blogs"].map((item) => (
            <li key={item} className="text-center">
              <Link
                href={`/#${item.toLowerCase()}`}
                className="block text-[#2B2B2B] hover:bg-[#4361EE] hover:bg-opacity-30 px-3 py-2 rounded-[30px]"
                onClick={closeMenu}
              >
                {item}
              </Link>
            </li>
          ))}
    </ul>
  </div>
  </nav>
  )
}

export default Navbar


