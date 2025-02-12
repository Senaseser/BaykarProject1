import About from "@/components/about/page";
import Blogs from "@/components/blogs/page";
import Home from "@/components/home/page";
import  Navbar  from "@/components/layout/Navbar";
import Listings from "@/components/listings/page";
import Services from "@/components/services/page";


export default function Dashboard() {
  return (
    <div className="scroll-smooth">
    <Navbar />
    <section id="home" className="h-[500px] flex items-center justify-center bg-gray-100">
      <Home/>
    </section>
    <section id="about" className="h-[500px] flex items-center justify-center bg-gray-200">
      <About/>
    </section>
    <section id="services" className="h-[500px] flex items-center justify-center bg-gray-300">
      <Listings/>
    </section>
    <section id="contact" className="h-[500px] flex items-center justify-center bg-gray-400">
      <Services/>
    </section>
    <section id="contact" className="h-[500px] flex items-center justify-center bg-gray-400">
      <Blogs/>
    </section>
  </div>
  );
}
