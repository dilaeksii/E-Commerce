import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail, Phone } from "lucide-react";
import {
  FaCaretDown,
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaSearch,
  FaShoppingCart,
  FaTwitter,
  FaUser,
  FaYoutube,
} from "react-icons/fa";

export const Header = () => {
  return (
    <div>
      <div className="bg-[#252B42] px-[24px] py-[12px] flex justify-between">
        <div className="flex gap-[10px]">
          <div className="flex gap-[5px] h-[44px] w-[145px]">
            <Phone className="text-[#FFFFFF]" />
            <a
              href="tel:+902255550118"
              className="text-[#FFFFFF] font-bold text-sm leading-[24px]"
            >
              (225) 555-0118
            </a>
          </div>
          <div className="flex gap-[5px] h-[44px] w-[145px]">
            <Mail className="text-[#FFFFFF] shrink-0" />
            <a
              href="mailto:michelle.rivera@example.com"
              className="text-[#FFFFFF] font-bold text-sm leading-[24px]"
            >
              michelle.rivera@example.com
            </a>
          </div>
        </div>
        <p className="text-[#FFFFFF] font-bold text-sm leading-[24px]">
          Follow Us and get a chance to win 80% off
        </p>
        <div className="flex justify-between h-[26px] items-center gap-[10px]">
          <p className="text-[#FFFFFF] font-bold text-sm leading-[24px]">
            Follow Us :
          </p>
          <div className="flex gap-[15px]">
            <FaInstagram className="text-[#FFFFFF]" />
            <FaYoutube className="text-[#FFFFFF]" />
            <FaFacebook className="text-[#FFFFFF]" />
            <FaTwitter className="text-[#FFFFFF]" />
          </div>
        </div>
      </div>
      <div className="py-[20px] px-[38px] flex justify-between">
        <p className="text-[#252B42] font-bold text-2xl leading-[32px]">
          Bandage
        </p>
        <div className="flex justify-between gap-[15px]">
          <a
            href="/"
            className="font-bold text-sm leading-[24px] text-[#737373]"
          >
            Home
          </a>
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-2 font-bold text-sm leading-[24px] text-[#737373]"
            >
              Shop
              <FaCaretDown className="shrink-0" />
            </button>

            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute bg-white shadow-lg rounded-lg">
              <a
                className="block px-4 py-2 text-sm text-[#737373] hover:bg-gray-100"
                href="/shop"
              >
                Clothes
              </a>
              <a
                className="block px-4 py-2 text-sm text-[#737373] hover:bg-gray-100"
                href="/shop"
              >
                Shoes
              </a>
              <a
                className="block px-4 py-2 text-sm text-[#737373] hover:bg-gray-100"
                href="/shop"
              >
                Accessories
              </a>
              <a
                className="block px-4 py-2 text-sm text-[#737373] hover:bg-gray-100"
                href="/shop"
              >
                Sport
              </a>
            </div>
          </div>
          <a
            href="/about"
            className="font-bold text-sm leading-[24px] text-[#737373]"
          >
            About
          </a>
          <a
            href="/blog"
            className="font-bold text-sm leading-[24px] text-[#737373]"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="font-bold text-sm leading-[24px] text-[#737373]"
          >
            Contact
          </a>
          <a
            href="/pages"
            className="font-bold text-sm leading-[24px] text-[#737373]"
          >
            Pages
          </a>
        </div>
        <div className="flex items-center gap-[15px]">
          <div className="flex items-center gap-[5px]">
            <FaUser className="text-[#23A6F0]"/>
            <a
              href="/login"
              className="font-bold text-sm leading-[24px] text-[#23A6F0]"
            >
              Login/Register
            </a>
          </div>
          <a
              href="/search"
              className="font-bold text-sm leading-[24px] text-[#23A6F0]"
            >
              <FaSearch />
            </a>
            <div className="flex items-center gap-[5px]">
              <a
              href="/bag"
              className="font-bold text-sm leading-[24px] text-[#23A6F0]"
            >
              <FaShoppingCart /> 
            </a> <span className="ont-bold text-sm leading-[24px] text-[#23A6F0]">1</span>
            </div>
            <div className="flex items-center gap-[5px]">
              <a
              href="/bag"
              className="font-bold text-sm leading-[24px] text-[#23A6F0]"
            >
              <FaHeart /> 
            </a> <span className="ont-bold text-sm leading-[24px] text-[#23A6F0]">1</span>
            </div>
        </div>
      </div>
    </div>
  );
};
