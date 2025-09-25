import Navbar from "./components/Navbar"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Hero06 from "@/components/hero-06/hero-06"

export default function Home() {
  return (
    <div>
    <Hero06></Hero06>
    <div className=" mt-[-100px]  pt-2 pb-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="hidden">
                   <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            <Image src="/assets/Program-badges.jpg" alt="logo" width="340" height="72" className="ml-auto mr-auto"></Image>
            Send Cold Emails to inbox<br></br>
                       without Gsuite Accounts.</h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-[#1a54f2]">
                       Fully Managed Email Infrastructure to send<br></br> upto <b>15k emails per domain</b> per month.
                    </p>
          
                    <div className="flex gap-x-4 gap-y-4 justify-center">
               <Link className='bg-gradient-to-t from-[#1A54F2] to-[#6E95FF] 
                       text-white font-inter text-[18px] font-light 
                       rounded-[5px] px-5 py-2.5 
                       transition-all duration-200 
                       hover:translate-y-[-4px] hover:shadow-lg' href='/contact'>Start for Free</Link>
                 <Link className='bg-gradient-to-t from-[#1A54F2] to-[#6E95FF] 
                         text-white font-inter text-[18px] font-light 
                         rounded-[5px] px-5 py-2.5 
                         transition-all duration-200 
                         hover:translate-y-[-4px] hover:shadow-lg' href='/contact'>Get Demo & Product Tour</Link>
            <Button>Click me</Button>
                    </div>
          

          <div className="flex gap-x-5 justify-center mt-[40px] w-[800px] ml-auto mr-auto">
            <div className="flex-row  gap-x-5 gap-y-4">
              <div className="flex items-start gap-x-5 gap-y-4 mt-2"> <Image src="/assets/check-icon.jpg" alt="logo" width="25" height="25" ></Image> <h3 className="text-black text-left">Doesn’t require GSuite or Mailbox Purchases</h3>
              </div>
              <div className="flex items-start gap-x-5 gap-y-4 mt-2"> <Image src="/assets/check-icon.jpg" alt="logo" width="25" height="25" ></Image> <h3 className="text-black text-left">Unlimited Mailbox Creation</h3>
              </div>
              <div className="flex items-start gap-x-5 gap-y-4 mt-2"> <Image src="/assets/check-icon.jpg" alt="logo" width="25" height="25" ></Image> <h3 className="text-black text-left">Built on Top Inbox Deliverability Techniques with Dedicated IP Pool</h3>
              </div>
            </div>
            <div className="flex-row  gap-x-5 gap-y-4">
              <div className="flex items-start gap-x-5 gap-y-4 mt-2"> <Image src="/assets/check-icon.jpg" alt="logo" width="25" height="25" ></Image> <h3 className="text-black text-left">Handles All Setup & Auto Scales Infra</h3>
              </div>
              <div className="flex  items-start gap-x-5 gap-y-4 mt-2"> <Image src="/assets/check-icon.jpg" alt="logo" width="25" height="25" ></Image> <h3 className="text-black text-left">Unlimited Contacts & Campaigns</h3>
              </div>
              <div className="flex items-start gap-x-5 gap-y-4 mt-2"> <Image src="/assets/check-icon.jpg" alt="logo" width="25" height="25" ></Image> <h3 className="text-black text-left">Beats Instantly & Smartlead on both pricing + performance.</h3>
              </div>
            </div>
            </div>
            </div>

          <div>
            <video
  className="h-full w-full rounded-lg relative z-40"
  autoPlay
  muted
  loop
  playsInline
>
  <source src="/assets/Optimized-Video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

            </div>

        
      </div>
      </div><div className="py-20 bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-6 ">
          <h3 className="text-black text-3xl font-bold text-center mb-12">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-xl shadow text-center">
              <div className="text-indigo-600 text-4xl mb-4">⚡</div>
              <h4 className="text-indigo-600 font-semibold text-xl mb-2">Super Fast</h4>
              <p className="text-black" >Deliveries that beat industry standards with cutting-edge logistics.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow text-center">
              <div className="text-indigo-600 text-4xl mb-4">📦</div>
              <h4 className="text-indigo-600 font-semibold text-xl mb-2">Safe Handling</h4>
              <p className="text-black">Your packages are handled with care, tracked every step of the way.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow text-center">
              <div className="text-indigo-600 text-4xl mb-4">🌍</div>
              <h4 className="text-indigo-600 font-semibold text-xl mb-2">Unlimited Contacts</h4>
              <p className="text-black">We cover multiple regions so you can send packages anywhere, anytime.</p>
            </div>
          </div>
        </div>
      </div><div className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            
            </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">About Our Service</h3>
            <p className="text-gray-600 mb-4">
              We combine smart logistics with modern tech to make sure your deliveries arrive faster and safer.
            </p>
            <p className="text-gray-600">
              Whether you’re a small business or a large enterprise, our solutions scale with your needs.
            </p>
          </div>
        </div>
      </div><div className="py-20 bg-indigo-600 text-white text-center">
        <h3 className="text-3xl font-bold mb-6">Ready to get started?</h3>
        <p className="mb-8">Sign up today and experience a new level of delivery service.</p>
        <a href="#contact" className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow hover:bg-gray-100">
          Contact Us
        </a>
      </div><div className="py-10 bg-gray-900 text-gray-400 text-center">
        <p>&copy; 2025 YourBrand. All rights reserved.</p>
      
      </div>
    </div>
  );
}
