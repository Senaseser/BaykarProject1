import Link from "next/link";

{/* <div class="sticky top-0 w-full bg-white shadow-md z-50">
<div class="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
  <!-- Sol Menü -->
  <div class="flex items-center space-x-6">
    <button class="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold">Home</button>
    <a href="#" class="hover:text-purple-700">About</a>
    <a href="#" class="hover:text-purple-700">Listings</a>
    <a href="#" class="hover:text-purple-700">Services</a>
    <a href="#" class="hover:text-purple-700">Blogs</a>
  </div>

  <!-- Logo -->
  <div class="flex items-center space-x-2">
    <div class="w-10 h-10 bg-purple-700 text-white flex items-center justify-center rounded-full">
      🏡
    </div>
    <span class="font-bold text-xl">Logo</span>
  </div>

  <!-- Sağ Menü -->
  <div class="flex items-center space-x-4">
    <a href="#" class="flex items-center gap-2">
      ⚫ Login/Register
    </a>
    <button class="bg-purple-700 text-white px-4 py-2 rounded-full flex items-center gap-2">
      🏡 Add Listing
    </button>
  </div>
</div>
</div> */}

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
    <ul className="flex justify-center space-x-6">
      <li>
        <Link href="/#home" className="text-blue-600 hover:text-blue-800">
          Home
        </Link>
      </li>
      <li>
        <Link href="/#about" className="text-blue-600 hover:text-blue-800">
          About
        </Link>
      </li>
      <li>
      <Link href="/#listings" className="text-blue-600 hover:text-blue-800">
          Listings
        </Link>
        </li>
      <li>
        <Link href="/#services" className="text-blue-600 hover:text-blue-800">
          Services
        </Link>
      </li>
      <li>
      <Link href="/#blogs" className="text-blue-600 hover:text-blue-800">
      Blogs
        </Link>
      </li>
    </ul>
    <div className="flex items-center space-x-2">
    <div className="w-10 h-10 bg-purple-700 text-white flex items-center justify-center rounded-full">
      🏡
    </div>
    <span className="font-bold text-xl">Logo</span>
  </div>
  <div className="flex items-center space-x-4">
    <a href="#" className="flex items-center gap-2">
      ⚫ Login/Register
    </a>
    <button className="bg-purple-700 text-white px-4 py-2 rounded-full flex items-center gap-2">
      🏡 Add Listing
    </button>
  </div>
  </div>
  </nav>
  )
}

export default Navbar


