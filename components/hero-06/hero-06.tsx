import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import { BackgroundPattern } from "./background-pattern";
import Link from "next/link";
import Image from "next/image";

const Hero06 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-5xl">
        <Image
          src="/assets/Program-badges.jpg"
          alt="logo"
          width="340"
          height="72"
          className="ml-auto mr-auto rounded-full"
        ></Image>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-6xl md:leading-[1] font-semibold tracking-[-0.03em] ">
          Send Cold Emails to inbox<br></br>
          without Gsuite Accounts.
        </h1>
        <p className="text-[26px] mx-auto mt-6 text-[#1a54f2]">
          Fully Managed Email Infrastructure to send<br></br> upto{" "}
          <b>15k emails per domain</b> per month.
        </p>
        <div className="mt-12 flex-col items-center justify-center gap-4">
          <div className="flex gap-x-4 gap-y-4 justify-center">
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
          </div>

          <div className="flex gap-x-5 justify-center w-[800px] mt-[40px] ml-auto mr-auto">
            <div className="flex-row  gap-x-5 gap-y-4">
              <div className="flex items-start gap-x-5 gap-y-4 mt-2">
                <Image
                  className="rounded-full"
                  src="/assets/check-icon.jpg"
                  alt="logo"
                  width="25"
                  height="25"
                ></Image>
                <h3 className=" text-left text-7">
                  Doesn’t require GSuite or Mailbox Purchases
                </h3>
              </div>
              <div className="flex items-start gap-x-5 gap-y-4 mt-2">
                <Image
                  className="rounded-full"
                  src="/assets/check-icon.jpg"
                  alt="logo"
                  width="25"
                  height="25"
                ></Image>
                <h3 className=" text-left text-7">
                  Unlimited Mailbox Creation
                </h3>
              </div>
              <div className="flex items-start gap-x-5 gap-y-4 mt-2">
                <Image
                  className="rounded-full"
                  src="/assets/check-icon.jpg"
                  alt="logo"
                  width="25"
                  height="25"
                ></Image>{" "}
                <h3 className=" text-left text-7">
                  Built on Top Inbox Deliverability Techniques with Dedicated IP
                  Pool
                </h3>
              </div>
            </div>
            <div className="flex-row  gap-x-5 gap-y-4">
              <div className="flex items-start gap-x-5 gap-y-4 mt-2">
                <Image
                  className="rounded-full"
                  src="/assets/check-icon.jpg"
                  alt="logo"
                  width="25"
                  height="25"
                ></Image>
                <h3 className="text-left text-7">
                  Handles All Setup & Auto Scales Infra
                </h3>
              </div>
              <div className="flex  items-start gap-x-5 gap-y-4 mt-2">
                <Image
                  className="rounded-full"
                  src="/assets/check-icon.jpg"
                  alt="logo"
                  width="25"
                  height="25"
                ></Image>
                <h3 className="text-left text-7">
                  Unlimited Contacts & Campaigns
                </h3>
              </div>
              <div className="flex items-start gap-x-5 gap-y-4 mt-2">
                <Image
                  className="rounded-full"
                  src="/assets/check-icon.jpg"
                  alt="logo"
                  width="25"
                  height="25"
                ></Image>
                <h3 className="text-left text-7">
                  Beats Instantly & Smartlead on both pricing + performance.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero06;
