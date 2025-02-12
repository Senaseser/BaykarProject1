import Image from "next/image";
import Link from "next/link";
import House from "../../assets/house.svg";
import Profile from "../../assets/profilee.svg";


const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto  flex justify-between items-center">
    <ul className="flex justify-center space-x-6">
      <li>
        <Link href="/#home" className="text-black hover:bg-[#4361EE] px-3 hover:opacity-30 hover:px-3 hover:py-2 hover:rounded-[30px]">
          Home
        </Link>
      </li>
      <li>
        <Link href="/#about" className="text-black hover:bg-[#4361EE] px-3 hover:opacity-30 hover:px-3 hover:py-2 hover:rounded-[30px]">
          About
        </Link>
      </li>
      <li>
      <Link href="/#listings" className="text-black hover:bg-[#4361EE] px-3 hover:bg-opacity-30 hover:px-3 hover:py-2 hover:rounded-[30px]">
          Listings
        </Link>
        </li>
      <li>
        <Link href="/#services" className="text-black hover:bg-[#4361EE] px-3 hover:bg-opacity-30 hover:px-3 hover:py-2 hover:rounded-[30px]">
          Services
        </Link>
      </li>
      <li>
      <Link href="/#blogs" className="text-black hover:bg-[#4361EE] px-3 hover:bg-opacity-30 hover:px-3 hover:py-2 hover:rounded-[30px]">
      Blogs
        </Link>
      </li>
    </ul>
    <div className="flex items-center space-x-2">
      <div     className="w-10 h-10 bg-purple-700 text-white flex items-center justify-center rounded-full">
    <Image
            src={House}
            alt="home"
            width={20}
            height={20}
       
          />
</div>
    <span className="font-bold text-xl">Logo</span>
  </div>
  <div className="flex items-center space-x-4">
    <a href="#" className="flex items-center gap-2">
    <Image
            src={Profile}
            alt="home"
            width={18}
            height={18}
       
          /> Login/Register
    </a>
    <button className="bg-purple-700 text-white px-4 py-2 rounded-full flex items-center gap-2">
    <Image
            src={House}
            alt="home"
            width={18}
            height={18}
       
          /> Add Listing
    </button>
  </div>
  </div>
  </nav>
  )
}

export default Navbar


