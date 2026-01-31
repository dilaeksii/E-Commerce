import { Eye, Heart, ShoppingCart } from "lucide-react";
import { useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams, useLocation, Link, NavLink } from "react-router-dom";
import { productDetail } from "../data/ProductDetail";
import { ProductCard } from "../../public/components/ProductCard";
import { Clients } from "../../public/components/Clients";

export const ProductDetail = () => {
  const { imageId } = useParams();
  const { pathname } = useLocation();

  const images = productDetail[0][`${imageId}`];

  const path = pathname.split("/").filter(Boolean); // ["", "shop"] => filter => ["shop"] (array)

  const [currentSlide, setCurrentSlide] = useState(0);

  const plusSlides = (n) => {
    let slide = currentSlide + n;
    if (slide < 0) {
      setCurrentSlide(images.length - 1);
    } else if (slide > images.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(slide);
    }
    console.log(slide);
  };

  const createPro = () =>
    Array.from({ length: 8 }, () => ({
      imageId: Math.floor(Math.random() * 7) + 1,
      title: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
    }));

    const items = useMemo(() => createPro(), []);

  return (
    <div>
      <div className="bg-[#FAFAFA] py-10 px-[38px]">
        <div className="pt-3 pb-10">
          <Link to="/home">Home</Link> {" > "}
          <Link to="/shop">Shop</Link>
          {path.map((p, i) => {
            const to = "/" + path.slice(0, i + 1).join("/");
            const label = p.charAt(0).toUpperCase() + p.slice(1);

            return (
              <span key={i}>
                {" > "}
                {i === path.length - 1 ? (
                  <NavLink
                    to={to}
                    style={(isActive) => ({
                      color: isActive ? "#252B42" : "#737373",
                      fontWeight: isActive ? "bold" : "",
                    })}
                  >
                    {label}
                  </NavLink>
                ) : (
                  <Link to={to}>{label}</Link>
                )}
              </span>
            );
          })}
        </div>
        <div className="grid grid-cols-2 w-[1050px] gap-10">
          <div>
            <div className="relative w-[506px]">
              {" "}
              {/*Slider container*/}
              <div className="">
                <img src={images[currentSlide]} alt="" className="w-full" />
              </div>
              <a
                className="cursor-pointer absolute p-1 select-none font-bold text-[20px] bottom-[50%] hover:text-[#23A6F0] text-[#FFFFFF]"
                onClick={() => plusSlides(-1)}
              >
                ❮
              </a>
              <a
                className="cursor-pointer absolute p-1 select-none font-bold text-[20px] right-0 bottom-[50%] hover:text-[#23A6F0] text-[#FFFFFF]"
                onClick={() => plusSlides(1)}
              >
                ❯
              </a>
            </div>
            <div className="after:content-none after:table after:clear-both">
              <div className="flex w-[219px] h-[75px] gap-3 py-5">
                {images.map((img, index) => (
                  <div className="opacity-75">
                    <img
                      key={index}
                      src={img}
                      alt=""
                      onClick={() => setCurrentSlide(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 py-5">
            <p className="text-xl leading-[30px] tracking-[0.2px] text-[#252B42]">
              Floating Phone
            </p>
            <div className="flex gap-5  items-center">
              <div className="flex gap-2">
                <FaStar className="text-[#F3CD03]" />
                <FaStar className="text-[#F3CD03]" />
                <FaStar className="text-[#F3CD03]" />
                <FaStar className="text-[#F3CD03]" />
                <FaStar className="text-[#F3CD03]" />
                <FaStar className="text-[#F3CD03]" />
              </div>
              <p className="text-[#737373] text-sm font-bold leading-[24px] tracking-[0.2px]">
                10 Reviews
              </p>
            </div>
            <p className="text-[#252B42] font-bold text-2xl leading-[32px] tracking-[0.1px]">
              $1,139.33
            </p>
            <div className="flex gap-3 items-center">
              <p className="text-[#737373] text-sm font-bold leading-[24px] tracking-[0.2px]">
                Availability :
              </p>
              <p className="text-[#23A6F0] text-sm font-bold leading-[24px] tracking-[0.2px]">
                In Stock
              </p>
            </div>
            <p className="text-[#858585] text-sm font-base leading-[20px] tracking-[0.2px] w-[445px] border-b pb-10">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <div className="flex gap-3 py-5">
              <div className="w-[30px] h-[30px] bg-[#23A6F0] rounded-full"></div>
              <div className="w-[30px] h-[30px] bg-[#2DC071] rounded-full"></div>
              <div className="w-[30px] h-[30px] bg-[#E77C40] rounded-full"></div>
              <div className="w-[30px] h-[30px] bg-[#252B42] rounded-full"></div>
            </div>
            <div className="flex gap-5 items-center py-5">
              <button className="bg-[#23A6F0] px-[20px] py-[10px] rounded-md text-[#FFFFFF] font-bold text-sm leading-[24px] tracking-[0.2px]">
                Select Options
              </button>
              <div className="flex gap-3">
                <button className="bg-[#E8E8E8] border-[#E8E8E8] rounded-full w-[40px] h-[40px] text-[#252B42] flex items-center justify-center">
                  <Heart className="w-[17] h-[16]" />
                </button>
                <button className="bg-[#E8E8E8] border-[#E8E8E8] rounded-full w-[40px] h-[40px] text-[#252B42] flex items-center justify-center">
                  <ShoppingCart className="w-[17] h-[16]" />
                </button>
                <button className="bg-[#E8E8E8] border-[#E8E8E8] rounded-full w-[40px] h-[40px] text-[#252B42] flex items-center justify-center">
                  <Eye className="w-[17] h-[16]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 px-[38px] flex flex-col items-center">
        <div className="flex justify-around border-b w-[1051px] border-[#737373]">
          <a
            href="#"
            className="text-[#737373] font-bold text-sm leading-[24px] tracking-[0.2px]"
          >
            Description
          </a>
          <a
            href="#"
            className="text-[#737373] font-bold text-sm leading-[24px] tracking-[0.2px]"
          >
            Additional Information
          </a>
          <a
            href="#"
            className="text-[#737373] font-bold text-sm leading-[24px] tracking-[0.2px]"
          >
            Reviews <span className="text-[#23856D]">(0)</span>
          </a>
        </div>
        <div className="grid grid-cols-3 gap-10 py-10">
          <div className="bg-[url(/images/detail1.jpg)] bg-no-repeat bg-cover bg-center w-[332px] h-[392px] shadow-xl"></div>
          <div className="w-[332px] h-[392px]">
            <p className="text-[#252B42] text-2xl leading-[24px] tracking-[0.2px] font-bold py-5">
              the quick fox jumps over
            </p>
            <p className="text-[#737373] text-sm leading-[20px] tracking-[0.2px] py-8">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
              <br />
              <br />
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
              <br />
              <br />
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className="grid grid-rows-2">
            <div>
              <p className="text-[#252B42] text-2xl leading-[24px] tracking-[0.2px] font-bold py-5">
                the quick fox jumps over
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <img src="/images/righticon.png" />
                  <span className="text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold">
                    the quick fox jumps over the lazy dog
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/images/righticon.png" />
                  <span className="text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold">
                    the quick fox jumps over the lazy dog
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/images/righticon.png" />
                  <span className="text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold">
                    the quick fox jumps over the lazy dog
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/images/righticon.png" />
                  <span className="text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold">
                    the quick fox jumps over the lazy dog
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[#252B42] text-2xl leading-[24px] tracking-[0.2px] font-bold py-5">
                the quick fox jumps over
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <img src="/images/righticon.png" />
                  <span className="text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold">
                    the quick fox jumps over the lazy dog
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/images/righticon.png" />
                  <span className="text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold">
                    the quick fox jumps over the lazy dog
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/images/righticon.png" />
                  <span className="text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold">
                    the quick fox jumps over the lazy dog
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="py-8 px-[38px] flex flex-col items-center">
          <div className="border-b w-[1051px] border-[#737373] py-5">
                <p className="text-[#252B42] font-bold text-2xl tracking-[0.1px] leading-[32px]">BESTSELLER PRODUCTS</p>
          </div>
          <div className="grid grid-cols-4 grid-rows-2 gap-5 py-10 w-[1049px]">
                {items.map((product,index) => (
                  <ProductCard key={index} product={product} />
                ))}
          </div>
          <Clients className="py-5"/>
        </div>
      </div>
    </div>
  );
};
