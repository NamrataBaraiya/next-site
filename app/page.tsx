import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Hero06 from "@/components/hero-06/hero-06";

export default function Home() {
  return (
    <div>
      {/* Hero section & video */}
      <Hero06></Hero06>
      <div className=" mt-[-100px]  pt-2 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="hidden">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              <Image
                src="/assets/Program-badges.jpg"
                alt="logo"
                width="340"
                height="72"
                className="ml-auto mr-auto"
              ></Image>
              Send Cold Emails to inbox<br></br>without Gsuite Accounts.
            </h1>

            <p className="text-lg md:text-xl max-w-2xl mx-auto mt-6 text-[#1a54f2]">
              Fully Managed Email Infrastructure to send<br></br> upto{" "}
              <b>15k emails per domain</b> per month.
            </p>

            <div className="flex gap-x-4 gap-y-4 justify-center mt-12">
              <Link
                className="bg-gradient-to-t from-[#1A54F2] to-[#6E95FF] 
                       text-white font-inter text-[18px] font-light 
                       rounded-[5px] px-5 py-2.5  
                       transition-all duration-200 
                       hover:translate-y-[-4px] hover:shadow-lg"
                href="/contact"
              >
                Start for Free
              </Link>
              <Link
                className="bg-gradient-to-t from-[#1A54F2] to-[#6E95FF] 
                         text-white font-inter text-[18px] font-light 
                         rounded-[5px] px-5 py-2.5 
                         transition-all duration-200 
                         hover:translate-y-[-4px] hover:shadow-lg"
                href="/contact"
              >
                Get Demo & Product Tour
              </Link>
              <Button>Click me</Button>
            </div>

            <div className="flex gap-x-5 justify-center mt-[40px] w-[800px] ml-auto mr-auto">
              <div className="flex-row  gap-x-5 gap-y-4">
                <div className="flex items-start gap-x-5 gap-y-4 mt-2">
                  {" "}
                  <Image
                    src="/assets/check-icon.jpg"
                    alt="logo"
                    width="25"
                    height="25"
                  ></Image>{" "}
                  <h3 className="text-black text-left">
                    Doesn’t require GSuite or Mailbox Purchases
                  </h3>
                </div>
                <div className="flex items-start gap-x-5 gap-y-4 mt-2">
                  {" "}
                  <Image
                    src="/assets/check-icon.jpg"
                    alt="logo"
                    width="25"
                    height="25"
                  ></Image>{" "}
                  <h3 className="text-black text-left">
                    Unlimited Mailbox Creation
                  </h3>
                </div>
                <div className="flex items-start gap-x-5 gap-y-4 mt-2">
                  {" "}
                  <Image
                    src="/assets/check-icon.jpg"
                    alt="logo"
                    width="25"
                    height="25"
                  ></Image>{" "}
                  <h3 className="text-black text-left">
                    Built on Top Inbox Deliverability Techniques with Dedicated
                    IP Pool
                  </h3>
                </div>
              </div>
              <div className="flex-row  gap-x-5 gap-y-4">
                <div className="flex items-start gap-x-5 gap-y-4 mt-2">
                  {" "}
                  <Image
                    src="/assets/check-icon.jpg"
                    alt="logo"
                    width="25"
                    height="25"
                  ></Image>{" "}
                  <h3 className="text-black text-left">
                    Handles All Setup & Auto Scales Infra
                  </h3>
                </div>
                <div className="flex  items-start gap-x-5 gap-y-4 mt-2">
                  {" "}
                  <Image
                    src="/assets/check-icon.jpg"
                    alt="logo"
                    width="25"
                    height="25"
                  ></Image>{" "}
                  <h3 className="text-black text-left">
                    Unlimited Contacts & Campaigns
                  </h3>
                </div>
                <div className="flex items-start gap-x-5 gap-y-4 mt-2">
                  {" "}
                  <Image
                    src="/assets/check-icon.jpg"
                    alt="logo"
                    width="25"
                    height="25"
                  ></Image>{" "}
                  <h3 className="text-black text-left">
                    Beats Instantly & Smartlead on both pricing + performance.
                  </h3>
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
      </div>

      {/* Broken the Rules */}
      <div className="w-[900px] ml-auto mr-auto ">
        <h2 className="text-[55px] font-medium leading-[60px] tracking-[-0.03em] text-center">
          <span className="font-semibold">Impossible right?</span>
          <br></br> Your first thought is <br></br> all the emails would go to
          spam?<br></br>
          <div className="rotate-[-1.82deg] mt-5 mb-8">
            <span className="px-5 mt-8 rotate-[-1.82deg] py-2 rounded-[25px] shadow-[0px_11px_13.4px_0px_#268D4C40,0px_7px_12.3px_0px_#FFFFFF47_inset,-1px_-7px_4px_0px_#741B1B33_inset] bg-[linear-gradient(180.45deg,#93E868_72.49%,#1BA91B_93.05%,#13621B_98.19%,#12502F_108.48%)]">
              <span className="font-bold bg-[linear-gradient(0deg,#2D5B33,#2D5B33),linear-gradient(0deg,rgba(45,91,51,1),rgba(45,91,51,1))] bg-clip-text text-[#0003]">
                we have broken the rules.
              </span>
            </span>
          </div>
        </h2>
      </div>

      {/* Wondering How */}
      <div>
        <h2 className="text-[55px] font-semibold mt-40 leading-[60px] tracking-[-0.03em] text-center">
          Wondering how?
        </h2>

        <div className="w-[900px] ml-auto mr-auto flex flex-col gap-y-10 pt-10 pb-36 ">
          <div>
            <h3 className="text-[35px] font-medium leading-[60px] tracking-[-0.03em] text-[#143796]">
              You add a domain.
            </h3>
            <p className="text-[20px] font-medium leading-[20px] tracking-[-0.03em] text-[#595959]">
              ( tryexample.com )
            </p>
          </div>

          <div>
            <h3 className="text-[35px] font-medium leading-[60px] tracking-[-0.03em] text-[#143796]">
              We create multiple sub-domains for it.
            </h3>
            <p className="text-[20px] font-medium leading-[20px] tracking-[-0.03em] text-[#595959]">
              ( m.tryexample.com / mail.tryexample.com / a.tryexample.com & so
              on )
            </p>
          </div>

          <div>
            <h3 className="text-[35px] font-medium leading-[60px] tracking-[-0.03em] text-[#143796]">
              We create emails accounts on each sub-domain
            </h3>
            <p className="text-[20px] font-medium leading-[20px] tracking-[-0.03em] text-[#595959]">
              ( name@m.tryexample.com / name@mail.tryexample.com /
              name@a.tryexample.com & so on )
            </p>
          </div>

          <div>
            <h3 className="text-[35px] font-medium leading-[60px] tracking-[-0.03em] text-[#143796]">
              Each Email sends email to only 10 contacts.
            </h3>
            <p className="text-[20px] font-medium leading-[20px] tracking-[-0.03em] text-[#595959]">
              ( name@m.tryexample.com / name@mail.tryexample.com /
              name@a.tryexample.com & so on )
            </p>
          </div>
        </div>
      </div>

      {/* Tested & Tried */}
      <div>
        <h2 className="text-[55px] font-semibold leading-[60px] tracking-[-0.03em] text-center text-[#840C0C]">
          You think this won’t work right?
        </h2>
        <h3 className="text-[55px] font-medium leading-[60px] tracking-[-0.03em] text-center">
          Sorry to break your heart. It does.<br></br> We have
          <div className="inline-block bg-[linear-gradient(180.45deg,#D068E8_72.49%,#941BA9_93.05%,#4F0750_98.19%,#DD50AB_108.48%)] rounded-[25px] rotate-[-3deg] shadow-[0px_11px_13.4px_0px_#00000040,0px_7px_12.3px_0px_#FFFFFF47_inset,-1px_-7px_4px_0px_#741B1B33_inset] leading-[51px] text-[45px] px-[22px] py-[10px]">
            <span className="inline-block p-0 bg-[linear-gradient(0deg,#5B2D5A,#5B2D5A),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))] bg-clip-text text-transparent font-bold tracking-[-1px]">
              tested & tried
            </span>
          </div>
          it out.
        </h3>
      </div>

      {/* what’s the catch? */}
      <div className="w-[900px] ml-auto mr-auto mt-40 mb-40  ">
        <h2 className="text-[55px] font-medium leading-[60px] tracking-[-0.03em] text-center">
          <span className="font-semibold">what’s the catch?</span>
          <h3 className="elementor-heading-title elementor-size-default text-[#1A54F2]">
            your <b>user-reported</b> spam<br></br>
            should be
            <div
              className="inline-block bg-[linear-gradient(180.45deg,#E8B968_72.49%,#A95D1B_93.05%,#593B0F_98.19%,#593B0F_108.48%)] 
             shadow-[0px_11px_13.4px_0px_#00000040,0px_7px_12.3px_0px_#FFFFFF47_inset,-1px_-7px_4px_0px_#741B1B33_inset,0.5px_0.5px_0px_0px_#FFFFFF61_inset,1px_1px_1.6px_0px_#00000040_inset] 
             rounded-[25px] px-[22px] py-[10px] pb-[15px] leading-[51px] rotate-[2.41deg]"
            >
              <span
                className="font-geist text-[45px] p-0 font-bold tracking-[-1px] 
             bg-[linear-gradient(0deg,#4E2728,#4E2728),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))] 
             bg-clip-text text-transparent"
              >
                {" "}
                under 0.3%
              </span>
            </div>
          </h3>
        </h2>
        <p className="font-sans mt-7 text-[35px] font-medium leading-[45px] tracking-[-0.03em] text-center">
          What if it goes beyond that?<br></br> Your domain reputation gets hit.
          You<br></br> then add a fresh new domain and<br></br> continue the
          game.
        </p>
      </div>

      {/* Cold Email Campaigns */}
      <div className="bg-[#F1F4FF] pb-40">
        <h3 className="text-[55px] pt-[100px] pb-[20px] font-semibold mt-40 leading-[60px] tracking-[-0.03em] text-center">
          Scale Your Cold Email Campaigns<br></br> Without Limits.
        </h3>

        <div className="flex-col gap-5">
          <div className=" w-[1140px] flex gap-x-5 ml-auto mr-auto">
            <div className="w-[40%] bg-white  rounded-[25px] flex justify-center items-center ">
              <h3 className="font-geist text-[55px] font-bold leading-[60px] tracking-[-0.03em] text-center">
                Unlimited Mailboxes
              </h3>{" "}
            </div>
            <div className="w-[60%] bg-white pt-5 pl-5 pr-5 rounded-[25px]">
              <Image
                className="rounded-t-[15px]"
                src="/assets/Mail-box.jpg"
                alt="logo"
                width="630"
                height="294"
              ></Image>
            </div>
          </div>

          <div className=" w-[1140px] flex gap-x-5 ml-auto mr-auto">
            <div className="w-[60%] bg-white pt-5 pl-5 pr-5 rounded-[25px]">
              <Image
                className="rounded-t-[15px]"
                src="/assets/Unlimited-Contacts.png"
                alt="logo"
                width="630"
                height="294"
              ></Image>
            </div>

            <div className="w-[40%] bg-white rounded-[25px] flex justify-center items-center ">
              <h3 className="font-geist text-[55px] font-bold leading-[60px] tracking-[-0.03em] text-center">
                Unlimited Contacts
              </h3>{" "}
            </div>
          </div>

          <div className=" w-[1140px] flex gap-x-5 ml-auto mr-auto">
            <div className="w-[40%] bg-white rounded-[25px] flex justify-center items-center ">
              <h3 className="font-geist text-[55px] font-bold leading-[60px] tracking-[-0.03em] text-center">
                Unlimited Reputation Builder
              </h3>{" "}
            </div>
            <div className="w-[60%] bg-white pt-5 pl-5 pr-5 rounded-[25px]">
              <Image
                className="rounded-t-[15px]"
                src="/assets/Auto-Dedicated-IP-768x358.png"
                alt="logo"
                width="630"
                height="294"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-6 ">
          <h3 className="text-black text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-xl shadow text-center">
              <div className="text-indigo-600 text-4xl mb-4">⚡</div>
              <h4 className="text-indigo-600 font-semibold text-xl mb-2">
                Super Fast
              </h4>
              <p className="text-black">
                Deliveries that beat industry standards with cutting-edge
                logistics.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow text-center">
              <div className="text-indigo-600 text-4xl mb-4">📦</div>
              <h4 className="text-indigo-600 font-semibold text-xl mb-2">
                Safe Handling
              </h4>
              <p className="text-black">
                Your packages are handled with care, tracked every step of the
                way.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow text-center">
              <div className="text-indigo-600 text-4xl mb-4">🌍</div>
              <h4 className="text-indigo-600 font-semibold text-xl mb-2">
                Unlimited Contacts
              </h4>
              <p className="text-black">
                We cover multiple regions so you can send packages anywhere,
                anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div></div>
          <div>
            <h3 className="text-3xl font-bold mb-6">About Our Service</h3>
            <p className="text-gray-600 mb-4">
              We combine smart logistics with modern tech to make sure your
              deliveries arrive faster and safer.
            </p>
            <p className="text-gray-600">
              Whether you’re a small business or a large enterprise, our
              solutions scale with your needs.
            </p>
          </div>
        </div>
      </div>
      <div className="py-20 bg-indigo-600 text-white text-center">
        <h3 className="text-3xl font-bold mb-6">Ready to get started?</h3>
        <p className="mb-8">
          Sign up today and experience a new level of delivery service.
        </p>
        <a
          href="#contact"
          className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow hover:bg-gray-100"
        >
          Contact Us
        </a>
      </div>
      <div className="py-10 bg-gray-900 text-gray-400 text-center">
        <p>&copy; 2025 YourBrand. All rights reserved.</p>
      </div>
    </div>
  );
}
