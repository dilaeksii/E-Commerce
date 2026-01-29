import { useState } from "react";
import { useParams, useLocation, Link, NavLink } from "react-router-dom";

export const ProductDetail = () => {
  const { imageId } = useParams();
  const { pathname } = useLocation();

  const reg1 = Math.floor(Math.random() * 7) + 1;
  const reg2 = Math.floor(Math.random() * 7) + 1;

  const images = [
    `/images/clothes${imageId}.jpg`,
    `/images/clothes1.jpg`,
    `/images/clothes2.jpg`,
  ];

  const path = pathname.split("/").filter(Boolean); // ["", "shop"] => filter => ["shop"] (array)

  const [currentSlide, setCurrentSlide] = useState(0);

  const plusSlides = (n) => {
    let slide = currentSlide + n;
    if(slide < 0) {
        setCurrentSlide(0);
    } else if(slide > images.length) {
        setCurrentSlide(images.length-1);
    } else {
        setCurrentSlide(slide)
    }
    
  }

  return (
    <div>
      <div className="bg-[#FAFAFA] py-5">
        <div>
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
        <div className="relative w-[506px]">
          {" "}
          {/*Slider container*/}
          <div className="">
            <img
              src={images[currentSlide]}
              alt=""
              className="w-full"
            />
          </div>
          <a
            className="cursor-pointer absolute p-1 select-none font-bold text-[20px] bottom-[50%] hover:text-[#23A6F0]"
            onClick={() => plusSlides(-1)}
          >
            ❮
          </a>
          <a
            className="cursor-pointer absolute p-1 select-none font-bold text-[20px] right-0 bottom-[50%] hover:text-[#23A6F0]"
            onClick={() => plusSlides(1)}
          >
            ❯
          </a>
        </div>
        <div className="after:content-none after:table after:clear-both">
          <div className="flex w-[300px] h-[75px] gap-2">
            {images.map((img, index) => (<div className="opacity-75">
              <img
                src={img}
                alt=""
                onClick={() => setCurrentSlide(index)}
              />
            </div>))}
          </div>
        </div>
      </div>
    </div>
  );
};
