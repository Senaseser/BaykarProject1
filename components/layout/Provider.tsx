import React from 'react'

import  Navbar  from "@/components/layout/Navbar";

import Footer from './Footer'
import Header from './header';



const Provider = (
    { children }: Readonly<{ children: React.ReactNode }>
) => {
  return (
    <>
  <Header/>
    <div className="relative min-h-screen flex-1 w-full mb-10">
    <Navbar />
    {children}
  </div>
 <Footer/>
  </>
  )
}

export default Provider