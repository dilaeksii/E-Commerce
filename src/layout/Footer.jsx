import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useRouteMatch, useParams } from "react-router-dom";



export const Footer = () => {
  const {imageId} = useParams();
  const product = useRouteMatch();
  return (
    <>
      <div className={`${product ? "" : "bg-[#FAFAFA]"} h-[142px] w-full`}>
        <div className="py-[40px] flex justify-around items-center max-sm:flex-col max-sm:items-start max-sm:gap-5 max-sm:ml-10">
          <p className="text-[#252B42] font-bold text-2xl leading-[32px]">
            Bandage
          </p>
          <div className="flex gap-[15px]">
            <FaFacebook className="text-[#23A6F0]" />
            <FaInstagram className="text-[#23A6F0]" />
            <FaTwitter className="text-[#23A6F0]" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex py-[40px] justify-around max-sm:flex-col max-sm:ml-10 max-sm:gap-10">
          <div>
            <p className="text-base text-[#252B42] font-bold leading-[24px] py-[10px]">
              Company Info
            </p>
            <div className="flex flex-col">
              <a
                href="/about"
                className="font-bold text-sm leading-[24px] text-[#737373]"
              >
                About Us
              </a>
              <a
                href="/carrier"
                className="font-bold text-sm leading-[24px] text-[#737373]"
              >
                Carrier
              </a>
              <a
                href="/hiring"
                className="font-bold text-sm leading-[24px] text-[#737373]"
              >
                We Are Hiring
              </a>
              <a
                href="/blog"
                className="font-bold text-sm leading-[24px] text-[#737373]"
              >
                Blog
              </a>
            </div>
          </div>
          <div>
            <p className="text-base text-[#252B42] font-bold leading-[24px] py-[10px]">
              Legal
            </p>
            <div className="flex flex-col">
              <a
                href="/about"
                className="font-bold text-sm leading-[24px] text-[#737373]"
              >
                About Us
              </a>
              <a
                href="/carrier"
                className="font-bold text-sm leading-[24px] text-[#737373]"
              >
                Carrier
              </a>
              <a
                href="/hiring"
                className="font-bold text-sm leading-[24px] text-[#737373]"
              >
                We Are Hiring
              </a>
              <a
                href="/blog"
                className="font-bold text-sm leading-[24px] text-[#737373]"
              >
                Blog
              </a>
            </div>
          </div>
          <div>
            <p className="text-base text-[#252B42] font-bold leading-[24px] py-[10px]">
              Features
            </p>
            <div className="flex flex-col">
              <a
                href="/marketing"
                className="font-bold text-sm leading-[24px] text-[#737373]"
              >
                Business Marketing
              </a>
              <a
                href="/analytic"
                className="font-bold text-sm leading-[24px] text-[#737373]"
              >
                User Analytic
              </a>
              <a
                href="/chat"
                className="font-bold text-sm leading-[24px] text-[#737373]"
              >
                Live Chat
              </a>
              <a
                href="/support"
                className="font-bold text-sm leading-[24px] text-[#737373]"
              >
                Unlimited Support
              </a>
            </div>
          </div>
          <div>
            <p className="text-base text-[#252B42] font-bold leading-[24px] py-[10px]">
              Resources
            </p>
            <div className="flex flex-col">
              <a
                href="#"
                className="font-bold text-sm leading-[24px] text-[#737373]"
              >
                IOS & Android
              </a>
              <a
                href="#"
                className="font-bold text-sm leading-[24px] text-[#737373]"
              >
                Watch a Demo
              </a>
              <a
                href="#"
                className="font-bold text-sm leading-[24px] text-[#737373]"
              >
                Customers
              </a>
              <a
                href="#"
                className="font-bold text-sm leading-[24px] text-[#737373]"
              >
                API
              </a>
            </div>
          </div>
          <div>
            <p className="text-base text-[#252B42] font-bold leading-[24px] py-[10px]">
              Get in Touch
            </p>
            <div className="flex border border-[#F9F9F9]">
              <form className="flex m-0 p-0">
                <input type="text" placeholder="Your Email" className="bg-[#F9F9F9] py-[25px] px-[20px] m-0 border-0 outline-none"/>
                <button className="text-[#FFFFFF] text-sm font-normal bg-[#23A6F0] py-[25px] px-[20px] h-full m-0 border-0">Subscribe</button>
              </form>
            </div>
            <p className="text-xs font-normal text-[#737373] leading-[28px] pt-1">Lore imp sum dolor Amit</p>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] w-full ">
          <p className="text-[#737373] font-bold text-sm leading-[24px] py-[25px] pl-[70px] max-sm:text-center max-sm:w-[300px] max-sm:text-wrap">
            Made With Love By Finland All Right Reserved 
          </p>
      </div>
    </>
  );
};
