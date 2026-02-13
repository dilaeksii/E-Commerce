import { ArrowRight, Mail, Menu, Phone } from "lucide-react";
import Gravatar from "react-gravatar";
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
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import { CardItems } from "../../public/components/CardItems";
import { useEffect } from "react";
import { fetchProducts } from "../features/products/productSlice";

export const Header = () => {
  const shop = useRouteMatch("/shop");
  const home = useRouteMatch("/home");
  const product = useRouteMatch("/product/:imageId");
  const teams = useRouteMatch("/team");
  const contact = useRouteMatch("/contact");
  const about = useRouteMatch("/about");
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.likes.value);
  const auth = useSelector((state) => state.auth.user);
  const user = useSelector((state) => state.user.user);
  const items = useSelector((state) => state.categories.items);
  const women = items.filter((item) => item.gender === "k");
  const men = items.filter((item) => item.gender === "e");
  const cardItems = useSelector((state) => state.card.totalCard);
  console.log(cardItems);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {!teams && !contact && !about && (
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
      )}
      <div
        className={`py-[20px] px-[38px] flex justify-between ${contact ? "max-sm:bg-[#F6F6F6]" : ""}`}
      >
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
            <NavLink
              to="/shop"
              className={`flex items-center gap-2 font-bold text-sm leading-[24px] ${shop ? "text-[#252B42]" : "text-[#737373]"}`}
            >
              Shop
              <FaCaretDown className="shrink-0" />
            </NavLink>

            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute bg-white shadow-lg rounded-lg z-50 flex py-5 px-10 justify-center gap-10">
              <div>
                <h4 className="font-bold text-[#252B42]">Kadın</h4>
                {women.map((item) => {
                  const gender = "Kadın";
                  const categoryName = item.code.split(":")[1];
                  return (
                    <NavLink
                      key={item.id}
                      to={`/shop/${gender}/${categoryName}/${item.id}`}
                      className="block text-[#737373] hover:text-black"
                    >
                      {item.title}
                    </NavLink>
                  );
                })}
              </div>

              <div>
                <h4 className="font-bold text-[#252B42]">Erkek</h4>
                {men.map((item) => {
                  const gender = "Erkek";
                  const categoryName = item.code.split(":")[1];
                  return (
                    <NavLink
                      key={item.id}
                      to={`/shop/${gender}/${categoryName}/${item.id}`}
                      className="block text-[#737373] hover:text-black"
                    >
                      {item.title}
                    </NavLink>
                  );
                })}
              </div>
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
            to="/team"
            className="font-bold text-sm leading-[24px]"
            style={(isActive) => ({
              color: isActive ? "#252B42" : "#737373",
            })}
          >
            Team
          </NavLink>
          <NavLink
            to="/pricing"
            className="font-bold text-sm leading-[24px]"
            style={(isActive) => ({
              color: isActive ? "#252B42" : "#737373",
            })}
          >
            Pricing
          </NavLink>
        </div>
        {!teams && !contact && !about && (
          <div className="flex items-center gap-[15px]">
            {!auth.email && !user.email && (
              <div className="flex items-center gap-[5px] max-sm:hidden">
                <FaUser className="text-[#23A6F0]" />
                <Link
                  to="/signup"
                  className="font-bold text-sm leading-[24px] text-[#23A6F0]"
                >
                  Login/Register
                </Link>
              </div>
            )}
            <div>
              <Link
                to="/search"
                className={`font-bold text-sm leading-[24px] text-[#23A6F0] max-sm:text-[#252B42] max-sm:${home || teams ? "text-xl" : "hidden"}`}
              >
                <FaSearch />
              </Link>
            </div>
            <div className="relative group">
              <div className="flex items-center gap-[5px]">
                <div
                  className={`font-bold text-sm leading-[24px] text-[#23A6F0] max-sm:text-[#252B42] max-sm:${home || teams ? "text-xl" : "hidden"}`}
                >
                  <FaShoppingCart />
                </div>{" "}
                <span className="ont-bold text-sm leading-[24px] text-[#23A6F0] max-sm:hidden">
                  {cardItems}
                </span>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 top-full mt-2 bg-white shadow-xl rounded-lg z-50 flex flex-col py-5 px-6 gap-4 min-w-[260px] transition-all duration-200">
                  <p>Sepetinizde {cardItems} ürün bulunmaktadır.</p>
                  <CardItems />

                  <div className="flex gap-4 mt-6">
                    <NavLink
                      to="/cart"
                      className="w-40 text-center border border-gray-300 text-gray-700 font-medium py-2 px-6 rounded-lg hover:bg-gray-100 transition"
                    >
                      Sepete Git
                    </NavLink>
                    <NavLink
                      to="/checkout"
                      className="w-48 text-center bg-[#23A6F0] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#1e90d2] transition"
                    >
                      Siparişi Tamamla
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-[5px] max-sm:hidden">
              <div className="font-bold text-sm leading-[24px] text-[#23A6F0]">
                <FaHeart />
              </div>{" "}
              <span className="ont-bold text-sm leading-[24px] text-[#23A6F0]">
                {likes}
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
            {(user.email || auth.email) && (
              <div className="flex items-center gap-2">
                <Gravatar
                  email={user.email || auth.email}
                  size={40}
                  default="identicon"
                  className="rounded-full"
                />
                <span>{user.name}</span>
              </div>
            )}
          </div>
        )}
        {(teams || contact || about) && !user.email && !auth.email && (
          <div className="flex gap-10 items-center max-sm:hidden">
            <Link
              to="/login"
              className="text-[#23A6F0] font-bold text-sm leading-[22px] tracking-[0.2px]"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-[#23A6F0] rounded-md text-[#FFFFFF] w-[214px] flex items-center justify-around py-1 px-[20px]"
            >
              Become a Member
              <ArrowRight className="text-[#FFFFFF]" />
            </Link>
          </div>
        )}
        {(teams || contact || about) && (
          <div className="flex items-center gap-2">
            <Gravatar
              email={user.email || auth.email}
              size={40}
              default="identicon"
              className="rounded-full"
            />
            <span>{user.name}</span>
          </div>
        )}
        {(teams || contact || about) && (
          <div className="hidden max-sm:flex max-sm:items-center max-sm:gap-[15px]">
            <div>
              <Link
                to="/search"
                className={`font-bold text-sm leading-[24px] text-[#23A6F0] max-sm:text-[#252B42] max-sm:${home || teams || contact || about ? "text-xl" : "hidden"}`}
              >
                <FaSearch />
              </Link>
            </div>
            <div className="flex items-center gap-[5px]">
              <div
                className={`font-bold text-sm leading-[24px] text-[#23A6F0] max-sm:text-[#252B42] max-sm:${home || teams || contact || about ? "text-xl" : "hidden"}`}
              >
                <FaShoppingCart />
              </div>
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
        )}
      </div>
      {home && (
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
      )}{" "}
      {/**Home Page Menus */}
      {(shop || product || teams || contact || about) && (
        <div
          className={`hidden max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-5 max-sm:py-5 ${contact || about ? "max-sm:bg-[#F6F6F6]" : ""}`}
        >
          <NavLink
            to="/home"
            className="font-bold text-sm leading-[24px]"
            style={(isActive) => ({
              color: isActive ? "#252B42" : "#737373",
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className="font-bold text-sm leading-[24px]"
            style={(isActive) => ({
              color: isActive ? "#252B42" : "#737373",
            })}
          >
            Shop
          </NavLink>

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
            to="/pricing"
            className="font-bold text-sm leading-[24px]"
            style={(isActive) => ({
              color: isActive ? "#252B42" : "#737373",
            })}
          >
            Pricing
          </NavLink>
        </div>
      )}{" "}
      {/**Shop Page Menus */}
      {(shop || product) && (
        <div className="hidden max-sm:flex max-sm:flex-col max-sm:gap-3 max-sm:py-5 max-sm:items-center">
          <div className="flex items-center gap-[5px]">
            <FaUser className="text-[#23A6F0]" />
            <Link
              to="/signup"
              className="font-bold text-sm leading-[24px] text-[#23A6F0]"
            >
              Login/Register
            </Link>
          </div>
          <div>
            <Link
              to="/search"
              className="font-bold text-sm leading-[24px] text-[#23A6F0]"
            >
              <FaSearch />
            </Link>
          </div>
          <div className="flex items-center gap-[5px]">
            <div
              className="font-bold text-sm leading-[24px] text-[#23A6F0]"
            >
              <FaShoppingCart />
            </div>{" "}
            <span className="ont-bold text-sm leading-[24px] text-[#23A6F0]">
              1
            </span>
          </div>
          <div className="flex items-center gap-[5px]">
            <div className="font-bold text-sm leading-[24px] text-[#23A6F0]">
              <FaHeart />
            </div>{" "}
            <span className="ont-bold text-sm leading-[24px] text-[#23A6F0]">
              1
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
