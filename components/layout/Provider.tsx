import React from 'react'

const Provider = (
    { children }: Readonly<{ children: React.ReactNode }>
) => {
  return (
    <>
    <header className=" h-10 w-full bg-purple-700 text-white text-sm py-2 px-6 flex justify-between items-center">
    <div className="flex items-center gap-2">
      <span>📍</span>
      <p>Lorem Ipsum has been the industrys standard dummy</p>
    </div>
    <div className="flex items-center gap-4">
      <span>📞 +90123 45 67</span>
      <span>✉️ mail@mail.com</span>
    </div>
    </header>
    <div className="relative min-h-screen flex-1 w-full mb-10">
    {children}
  </div>
  <footer className='h-10 bg-[#3A0CA3] text-white'>Burası footer olacak</footer>
  </>
  )
}

export default Provider