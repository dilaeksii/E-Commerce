import { Download, Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { useLikes } from "../../src/LikeContext";

export const SaleBlog = ({ card }) => {
  const {state, likePro} = useLikes();
  return (
    <div className="w-[501px] h-[404px] max-sm:w-[330px] max-sm:h-[606px] max-sm:mx-4">
      <div className="grid grid-cols-2 max-sm:grid-cols-1">
        <div
          className="bg-no-repeat w-[209px] h-[404px] bg-center bg-cover grid grid-rows-2 content-between max-sm:hidden max-sm:w-[330px] max-sm:h-[300px]"
          style={{ backgroundImage: `url(${card.img})` }}
        >
          <p className="text-[#FFFFFF] font-bold text-sm leading-[24px] tracking-[0.2px] text-center bg-[#E74040] border rounded-md border-[#E74040] h-[24px] w-[52px] px-[10px] mt-[10px] ml-[10px]">
            Sale
          </p>
          
          <div className="flex justify-around place-items-end pb-2 max-sm:hidden">
            <button className="bg-[#FFFFFF] rounded-full w-[40px] h-[40px] text-[#252B42] flex items-center justify-center">
              <Heart className={`${state.liked ? "text-red-500" : ""} w-[17] h-[16]`}/>
            </button>
            <button className="bg-[#FFFFFF] rounded-full w-[40px] h-[40px] text-[#252B42] flex items-center justify-center">
              <ShoppingCart className="w-[17] h-[16]" />
            </button>
            <button className="bg-[#FFFFFF] rounded-full w-[40px] h-[40px] text-[#252B42] flex items-center justify-center">
              <Eye className="w-[17] h-[16]" />
            </button>
          </div>
        </div>
        <div className="py-10 flex flex-col gap-4 max-sm:hidden">
          <div className="flex items-center justify-between">
            <p className="text-[#23A6F0] font-bold text-sm tracking-[0.2px] leading-[24px]">
              English Department
            </p>

            <div className="bg-[#252B42] rounded-[20px] px-3 h-[26px] flex items-center gap-2 text-white">
              <FaStar className="text-[#FFCE31]" />
              <span className="text-sm">4.9</span>
            </div>
          </div>

          <p className="font-bold text-base leading-[24px] tracking-[0.2px] text-[#252B42] whitespace-nowrap">
            Graphic Design
          </p>

          <p className="text-[#737373] text-sm leading-[20px] tracking-[0.2px]">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>

          <div className="flex items-center gap-3 text-[#737373]">
            <Download className="w-5 h-5" />
            <span className="font-bold">15 Sales</span>
          </div>
          <p>
            <span className="text-[#BDBDBD] font-bold text-base leading-[24px]">
              $16.48
            </span>{" "}
            <span className="text-[#23856D] font-bold text-base leading-[24px]">
              $6.48
            </span>
          </p>
          <div className="flex gap-1">
            <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
            <div className="w-[16px] h-[16px] bg-[#23856D] rounded-full"></div>
            <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-full"></div>
            <div className="w-[16px] h-[16px] bg-[#252B42] rounded-full"></div>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-1">
              <img src="/images/icon cool-icon-1.svg" alt="" />
              <p className="text-[#737373] text-xs leading-[16px] tracking-[0.2px]">
                22h...
              </p>
            </div>
            <div className="flex gap-1">
              <img src="/images/Vector.svg" alt="" />
              <p className="text-[#737373] text-xs leading-[16px] tracking-[0.2px]">
                64 Lessons
              </p>
            </div>
            <div className="flex gap-1">
              <img src="/images/Vector2.svg" alt="" />
              <p className="text-[#737373] text-xs leading-[16px] tracking-[0.2px]">
                Progress
              </p>
            </div>
          </div>
          <div className="flex justify-around border border-[#23A6F0] rounded-[37px] w-[142px] h-[44px]">
            <button className="text-[#23A6F0]">Learn More</button>
            <img src="/images/Vector3.svg" alt="" />
          </div>
        </div>
        <div
          className=" hidden bg-no-repeat w-[330px] h-[300px] bg-center bg-cover grid grid-rows-2 content-between max-sm:inline-block"
          style={{ backgroundImage: `url(${card.mobil})` }}
        >
          <p className="text-[#FFFFFF] font-bold text-sm leading-[24px] tracking-[0.2px] text-center bg-[#E74040] border rounded-md border-[#E74040] h-[24px] w-[52px] px-[10px] mt-[10px] ml-[10px] max-sm:inline-block">
            New
          </p>
        </div>
        <div className="hidden py-10 flex flex-col gap-4 max-sm:flex">
          <div className="flex justify-between w-[159px]">
            <a
              href="#"
              className="text-xs tracking-[0.2px] text-[#737373] leading-[16px]"
            >
              Google
            </a>
            <a
              href="#"
              className="text-xs tracking-[0.2px] text-[#737373] leading-[16px]"
            >
              Trending
            </a>
            <a
              href="#"
              className="text-xs tracking-[0.2px] text-[#737373] leading-[16px]"
            >
              New
            </a>
          </div>
          <p className="w-[247px] text-[#252B42] text-xl font-base tracking-[0.2px] leading-[30px]">
            Loudest à la Madison #1 (L'integral)
          </p>
          <p className="w-[280px] text-[#737373] text-sm font-base tracking-[0.2px] leading-[20px] h-[60px]">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <div className="flex justify-between w-[280px]">
            <div className="flex gap-1">
              <img src="/images/icon cool-icon-1.svg" alt="" />
              <p className="text-[#737373] text-xs leading-[16px] tracking-[0.2px]">
                22h...
              </p>
            </div>
            <div className="flex gap-1">
              <img src="/images/Vector2.svg" alt="" />
              <p className="text-[#737373] text-xs leading-[16px] tracking-[0.2px]">
                Progress
              </p>
            </div>
          </div>
          <div className="flex justify-between  w-[142px] h-[44px]">
            <button className="text-[#23A6F0]">Learn More</button>
            <img src="/images/Vector3.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
