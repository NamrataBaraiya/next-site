import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


 const Navbar = () => {
  return (
    <>
          <nav className=' max-w-[1140px] ml-auto mr-auto py-4 flex items-center justify-between z-50'>
              <div>       
                  <Link href="/"> <Image src="/assets/deliverymanAI logo.png" alt="logo" width="265" height="42"></Image> </Link>
                </div>
              
                <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 text-black '>
                  <Link href="/pricing" className='text-grey'>Pricing</Link>
                  <Link href="/faq" className='text-grey'>FAQ</Link>
                  <Link href="/manifesto" className='text-grey'>Manifesto</Link>
                  <Link href="/our-todo-list" className='text-grey'>Our Todo List</Link>
                  <Link href="/" className='text-grey'>Demo</Link>
                  <Link href="/" className='text-grey'>Login</Link>
                </ul>

                <div>
                  <Link className='bg-gradient-to-t from-[#1A54F2] to-[#6E95FF] 
         text-white font-inter text-[18px] font-light 
         rounded-[5px] px-5 py-2.5 
         transition-all duration-200 
         hover:translate-y-[-4px] hover:shadow-lg' href='/contact'>Start for Free</Link>
              </div>

          </nav>
    </>
  )
}

export default Navbar
