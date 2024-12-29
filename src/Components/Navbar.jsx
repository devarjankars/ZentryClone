import React, { useRef } from 'react'

function Navbar() {
    const NavRef= useRef(null)
  return (
    <div 
    ref={NavRef}
    className=' fixed  inset-x-0 top-4 z-50 
    h-16 border-none transition-all duration-700
    sm:inset-x-6'>
   <header className=' absolute top-1/2 w-full translate-y-1/2'>
   <nav className='flex items-center size-full justify-between p-4'></nav>
   </header>
    </div>
  )
}

export default Navbar