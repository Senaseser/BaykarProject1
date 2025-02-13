import About from "@/components/about/page";
import Blogs from "@/components/blogs/page";
import Home from "@/components/home/page";
import Listings from "@/components/listings/page";
import Services from "@/components/services/page";


export default function Dashboard() {
  return (
    <div className="scroll-smooth ">
    <section id="home" className="h-[500px] flex items-center justify-center bg-gray-100 scroll-m-[70px] ">
      <Home/>
    </section>
    <section id="about" className="h-[500px] flex items-center justify-center bg-gray-200 scroll-m-[70px]">
      <About/>
    </section>
    <section id="listings" className="h-[500px] flex items-center justify-center bg-gray-300 scroll-m-[70px] ">
      <Listings/>
    </section>
    <section id="services" className="h-[500px] flex items-center justify-center bg-gray-400 scroll-m-[70px]">
      <Services/>
    </section>
    <section id="blogs" className="h-[500px] flex items-center justify-center bg-gray-400 scroll-m-[70px]">
      <Blogs/>
    </section>
  </div>
  );
}
