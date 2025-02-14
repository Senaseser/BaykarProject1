import Image from "next/image";

import Rectangle from "../assets/rectangle.svg";
import About from "@/components/about/page";
import Blogs from "@/components/blogs/page";
import Home from "@/components/home/page";
import Listings from "@/components/listings/page";
import Services from "@/components/services/page";


export default function Dashboard() {
  return (
    <div className="scroll-smooth ">
    <section id="home" className="h-auto flex items-center justify-center scroll-m-[70px] relative mb-10">
    <Image 
          src={Rectangle}
          alt="Background shape"
          width={1000}
          height={1000}
          className="absolute -z-10"
        />
      <Home/>
    </section>
    <section id="about" className="h-auto flex items-center justify-center bg-white scroll-m-[70px]">
      <About/>
    </section>
    <section id="listings" className="h-auto flex items-center justify-center bg-white scroll-m-[70px] ">
      <Listings/>
    </section>
    <section id="services" className="h-auto flex items-center justify-center bg-[#3a0ba3] scroll-m-[70px] w-full">
      <Services/>
    </section>
    <section id="blogs" className="h-auto flex items-center justify-center bg-gray-400 scroll-m-[70px]">
      <Blogs/>
    </section>
  </div>
  );
}
