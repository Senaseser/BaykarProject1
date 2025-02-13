import React from 'react'

import  Navbar  from "@/components/layout/Navbar";

import Footer from './Footer'
import Header from './header';



const Provider = (
    { children }: Readonly<{ children: React.ReactNode }>
) => {
  return (
    <>
    <div className='hidden md:block w-full'>
  <Header/>
  </div>
    <div className="relative min-h-screen flex-1 w-full">
    <Navbar />
    {children}
  </div>
 <Footer/>
  </>
  )
}

export default Provider