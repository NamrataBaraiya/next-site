import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



 const Navbar = () => {
  return (
    <>
          <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
              <div>       
                  <Link href="/"> <Image src="/assets/logo.svg" alt="bike" width="100" height="40"></Image> </Link>
                </div>
              
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3'>
                  <Link href="/" className='text-grey'>Home</Link>
                  <Link href="/about" className='text-grey'>About</Link>
                  <Link href="/education" className='text-grey'>Education</Link>
                  <Link href="/contact" className='text-grey'>Contact</Link>
              </ul>

              <div>
                  <Link href='/contact'>Contact</Link>
              </div>

          </nav>
    </>
  )
}

export default Navbar
