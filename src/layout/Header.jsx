import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail, Menu, Phone } from "lucide-react";
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
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import { useLikes } from "../LikeContext";


export const Header = () => {

  let match = useRouteMatch("/shop");
  const {state} = useLikes();

  return (
    <div>
      <div className="bg-[#252B42] px-[24px] py-[12px] flex justify-between max-sm:hidden">
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
        <div className="flex justify-between gap-[15px] max-sm:hidden">
          <NavLink
            to="/home"
            className="font-bold text-sm leading-[24px]"
            style={(isActive) => ({
              color: isActive ? "#252B42" : "#737373",
            })}
          >
            Home
          </NavLink>
          <div className="relative group">
            <button
              type="button"
              className={`flex items-center gap-2 font-bold text-sm leading-[24px] ${match ? "text-[#252B42]" : "text-[#737373]"}`}
            >
              Shop
              <FaCaretDown className="shrink-0" />
            </button>

            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute bg-white shadow-lg rounded-lg z-50">
              <Link
                className="block px-4 py-2 text-sm text-[#737373] hover:bg-gray-100"
                to="/shop"
              >
                Clothes
              </Link>
              <Link
                className="block px-4 py-2 text-sm text-[#737373] hover:bg-gray-100"
                to="/shop"
              >
                Shoes
              </Link>
              <Link
                className="block px-4 py-2 text-sm text-[#737373] hover:bg-gray-100"
                to="/shop"
              >
                Accessories
              </Link>
              <Link
                className="block px-4 py-2 text-sm text-[#737373] hover:bg-gray-100"
                to="/shop"
              >
                Sport
              </Link>
            </div>
          </div>
          <NavLink
            to="/about"
            className="font-bold text-sm leading-[24px]"
            style={(isActive) => ({
              color: isActive ? "#252B42" : "#737373",
            })}
          >
            About
          </NavLink>
          <NavLink
            to="/blog"
            className="font-bold text-sm leading-[24px]"
            style={(isActive) => ({
              color: isActive ? "#252B42" : "#737373",
            })}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className="font-bold text-sm leading-[24px]"
            style={(isActive) => ({
              color: isActive ? "#252B42" : "#737373",
            })}
          >
            Contact
          </NavLink>
          <NavLink
            to="/pages"
            className="font-bold text-sm leading-[24px]"
            style={(isActive) => ({
              color: isActive ? "#252B42" : "#737373",
            })}
          >
            Pages
          </NavLink>
        </div>
        <div className="flex items-center gap-[15px]">
          <div className="flex items-center gap-[5px] max-sm:hidden">
            <FaUser className="text-[#23A6F0]" />
            <Link
              to="/login"
              className="font-bold text-sm leading-[24px] text-[#23A6F0]"
            >
              Login/Register
            </Link>
          </div>
          <div>
            <Link
              to="/search"
              className="font-bold text-sm leading-[24px] text-[#23A6F0] max-sm:text-[#252B42] max-sm:text-xl"
            >
              <FaSearch />
            </Link>
          </div>
          <div className="flex items-center gap-[5px]">
            <Link
              to="/bag"
              className="font-bold text-sm leading-[24px] text-[#23A6F0] max-sm:text-[#252B42] max-sm:text-xl"
            >
              <FaShoppingCart />
            </Link>{" "}
            <span className="ont-bold text-sm leading-[24px] text-[#23A6F0] max-sm:hidden">
              1
            </span>
          </div>
          <div className="flex items-center gap-[5px] max-sm:hidden">
            <Link
              to="/bag"
              className="font-bold text-sm leading-[24px] text-[#23A6F0]"
            >
              <FaHeart />
            </Link>{" "}
            <span className="ont-bold text-sm leading-[24px] text-[#23A6F0]">
              {state.count}
            </span>
          </div>
          <div className=" hidden flex items-center gap-[5px] max-sm:flex">
            <Link
              to="/menu"
              className="font-bold text-sm leading-[24px] text-[#252B42]"
            >
              <Menu />
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden flex justify-between gap-[15px] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-8 max-sm:my-5">
        <NavLink
          to="/home"
          className="font-bold text-xl leading-[24px]"
          style={(isActive) => ({
              color: isActive ? "#252B42" : "#737373",
            })}
        >
          Home
        </NavLink>
        <NavLink
          to="/product"
          className="font-bold text-xl leading-[24px]"
          style={(isActive) => ({
              color: isActive ? "#252B42" : "#737373",
            })}
        >
          Product
        </NavLink>
        <NavLink
          to="/pricing"
          className="font-bold text-xl leading-[24px]"
          style={(isActive) => ({
              color: isActive ? "#252B42" : "#737373",
            })}
        >
          Pricing
        </NavLink>
        <NavLink
          to="/contact"
          className="font-bold text-xl leading-[24px]"
          style={(isActive) => ({
              color: isActive ? "#252B42" : "#737373",
            })}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};
