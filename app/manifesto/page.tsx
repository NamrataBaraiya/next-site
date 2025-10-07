
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen px-6 py-12 flex flex-col items-center">
      <div className="max-w-6xl space-y-8 font-[Inter] text-[25px] font-normal leading-[48px] tracking-[-0.03em] text-black 
        max-md:text-[16px] max-md:leading-[1.2em] max-sm:text-[16px] max-sm:leading-[1.2em]">

        {/* Header Section */}
        <section className="space-y-4 mt-34 max-md:mt-14 max-sm:mt-14">
          <h1 className="pt-[30px] pb-[60px] text-center font-[Geist] text-[45px]  leading-[51px] font-semibold tracking-[-0.03em] text-black 
            max-md:text-[34px] pb-[20px] max-sm:text-[34px] pb-[20px]">
            Spending hours writing the perfect email… <br /> that never gets seen.
          </h1>

          <p>
            cold email <i>should</i> be <span className="text-[#1A54F2]">simple.</span>
          </p>
          <br />

          <p>
            write a great offer. <br />
            send it to the right people. <br />
            get replies. grow revenue.
          </p>

          <p className="pt-8 leading-[48px] max-md:leading-[1.3em] max-sm:leading-[1.3em]">
            but that’s not how it works today. <br /> <br />
            old way is broken. <br />
            founders & marketers have been forced to: <br />
            – buy tons of mailboxes. <br />
            – pay $$$ for G Suite / Microsoft inboxes. <br />
            – spend hours configuring SPF, DKIM, DMARC. <br />
            – figure out the correct warm up schedule. <br />
            – manage: rotate senders, throttle volume, dodge spam traps. <br />
            – pray Gmail doesn’t blacklist you overnight. <br />
            – constantly checking blacklists. <br />
            – decide whether to spend more to buy dedicated IP. <br />
            – still be stuck sending around 20–100 cold emails per day. <br /> <br />
            you’re not building pipeline. <br />
            you’re building plumbing. <br />
            you’re spending money, time, & energy{" "}
            <b>on infrastructure instead of on the offer.</b> <br /> <br />
            that’s insane. <br /> <br />
            And that’s exactly why we built DeliverymanAI. <br /> <br />
            we built the entire email infrastructure, so you don’t have to. <br /> <br />
            <span className="text-[#1A54F2]">here’s what we do differently</span> <br /> <br />
            You bring one domain. <br />
            We handle everything else. <br /> <br />
            with just one domain you can send up to 15k cold emails per month. <br />
            15k cold emails that don’t land in spam. <br /> <br />
            All of this is automated for you: <br />
            – we create inboxes for you at no cost.{" "}
            <span className="text-[#1A54F2]">(fully automated)</span> <br />
            – we set up SPF, DKIM, DMARC & other DNS setup.{" "}
            <span className="text-[#1A54F2]">(fully automated)</span> <br />
            – we use dedicated IP pools at no cost.{" "}
            <span className="text-[#1A54F2]">(fully automated)</span> <br />
            – we build your sender reputation before you send.{" "}
            <span className="text-[#1A54F2]">(fully automated)</span> <br />
            – we manage your sending thresholds.{" "}
            <span className="text-[#1A54F2]">(fully automated)</span> <br />
            – we monitor deliverability & blacklists behind the scenes.{" "}
            <span className="text-[#1A54F2]">(fully automated)</span> <br />
            – we route all your lead replies to your preferred email.{" "}
            <span className="text-[#1A54F2]">(fully automated)</span> <br />
            – we manage unsubscribes, auto-classify replies, & keep you compliant.{" "}
            <span className="text-[#1A54F2]">(fully automated)</span> <br />
            – we remove bounced emails & negative replied leads from your list.{" "}
            <span className="text-[#1A54F2]">(fully automated)</span> <br />
            – we let you send at scale, without fear, without hacks, without chaos.{" "}
            <span className="text-[#1A54F2]">(fully automated)</span> <br /> <br />
            you don’t need to buy inboxes. <br />
            you don’t need to hire a deliverability consultant. <br />
            you don’t need to duct-tape five SaaS tools together. <br /> <br />
            we’ve already done it. <br />
            we are the infrastructure. <br /> <br />
            what this means for you: <br />
            – no more tech overwhelm. <br />
            – focus on writing irresistible offers, not configuring DNS records. <br />
            – faster time to revenue. <br />
            – lower costs, higher ROI. <br /> <br />
            this isn’t just another tool. <br />
            this is the last cold email platform you’ll ever need. <br />
            we’re building DeliverymanAI like a product we wish we had. <br /> <br />
            because cold email works. <br />
            but only if your email lands in the inbox. <br />
            only if your systems scale with your ambition. <br />
            only if your ideas get delivered. <br /> <br />
            This is Our Promise<br /> <br />
            If you’re tired of duct tape & deliverability roulette, welcome. <br /> <br />
            You’re one of us. <br /> <br />
            Let’s deliver.
          </p>
        </section>

        {/* Image Section */}
        <section className="space-y-4 px-6 py-12 text-center flex flex-col items-center">
          <div className="my-6 flex justify-center items-center gap-[60px] max-md:gap-[40px] my-4 max-sm:gap-[20px] my-4 flex-wrap">
            <img
              src="/assets/Amin-1.webp"
              alt="Amin"
              className="h-auto w-[300px] max-md:w-[100px] h-auto max-sm:w-[100px] h-auto"
            />
            <img
              src="/assets/Deliveryman-logo.png"
              alt="Deliveryman Logo"
              className="w-[27px] h-[38px] max-sm:w-[20px] h-auto"
            />
            <img
              src="/assets/Junaid.webp"
              alt="Junaid"
              className="h-auto w-[300px] max-md:w-[100px] h-auto max-sm:w-[100px] h-auto"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
=======
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-3 max-w-3xl">
        <h1 className="text-5xl font-semibol text-black">manifesto page</h1>
        <p className="text-gray-400">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
         </p>
        </div>
    </div>
  )
}

export default page
