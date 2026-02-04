
import { useRef, useState } from "react";
import { TeamCard } from "../../public/components/TeamCard";
import { userTeam } from "../data/UserTeam";
import { Clients } from "../../public/components/Clients";

export const About = () => {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  const playVid = () => {
    videoRef.current.play();
    setPlay(true);
  };
  return (
    <>
      <div className="grid place-items-center my-10 max-sm:hidden">
        <div
          className="relative rounded-2xl h-[619px] w-[1292px] max-sm:w-[338px] max-sm:h-[905px]"
          style={{
            background: `radial-gradient(circle at 50% 10%, #FFE9EA 0 40px, transparent 41px), radial-gradient(circle at 75% 43%, #FFE9EA 0 250px, transparent 251px)`,
          }}
        >
          <div className="absolute left-16 top-1/2 -translate-y-1/2 max-w-md">
            <p className="text-[#252B42] font-bold text-base leading-[24px] tracking-[0.1px] py-5">
              ABOUT COMPANY
            </p>
            <p className="text-[#252B42] font-bold text-[58px] leading-[80px] tracking-[0.2px] py-1">
              ABOUT US
            </p>
            <p className="text-[#737373] font-normal text-xl leading-[30px] tracking-[0.2px] w-3/4">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="py-[15px] px-[40px] bg-[#23A6F0] text-[#FFFFFF] rounded-md my-10">
              Get Quote Now
            </button>
          </div>
          <img
            src="/images/aboutimage.png"
            alt=""
            className="absolute right-[-150px] top-1/2 -translate-y-1/2 h-[620px] object-contain z-10 max-sm:static max-sm:translate-y-7/9"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-20">
          <span className="absolute right-[70px] top-[45%] w-[31px] h-[31px] bg-[#FFE9EA] rounded-full" />
          <span className="absolute right-[30px] top-[35%] w-[15px] h-[15px] bg-[#977DF4] rounded-full" />
          <span className="absolute left-[53%] top-[65%] w-[15px] h-[15px] bg-[#977DF4] rounded-full" />
        </div>
      </div>
      <div className="hidden grid place-items-center  max-sm:grid">
        <div
          className="relative rounded-2xl h-[619px] w-[1292px] max-sm:w-[338px] max-sm:h-[905px]"
          style={{
            background: `radial-gradient(circle at 5% 75%, #FFE9EA 0 16px, transparent 17px), radial-gradient(circle at 50% 85%, #FFE9EA 0 120px, transparent 121px)`,
          }}
        >
          <div className="absolute top-1/2 -translate-y-5/6 max-w-md">
            <p className="text-[#252B42] font-bold text-[58px] leading-[80px] py-1 text-center">
              ABOUT US
            </p>
            <p className="text-[#737373] font-normal text-xl leading-[30px] tracking-[0.2] w-3/4 text-center mx-10">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="py-[8px] px-[40px] bg-[#23A6F0] text-[#FFFFFF] rounded-md my-10 mx-18">
              Get Quote Now
            </button>
          </div>
          <img
            src="/images/aboutimage.png"
            alt=""
            className="absolute right-[-150px] top-1/2 -translate-y-1/2 h-[620px] object-contain z-10 max-sm:static max-sm:translate-y-7/9"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-20">
          <span className="absolute left-[90%] top-[180%] w-[17px] h-[17px] bg-[#FFE9EA] rounded-full" />
          <span className="absolute left-[88%] top-[162%] w-[9px] h-[9px] bg-[#977DF4] rounded-full" />
          <span className="absolute left-[15%] top-[172%] w-[9px] h-[9px] bg-[#977DF4] rounded-full" />
        </div>
      </div>
      <div className="flex justify-around items-center max-sm:flex-col max-sm:justify-center max-sm:py-10">
        <div className="w-[394px] py-10 px-8 flex flex-col gap-3 max-sm:w-[381px]">
          <p className="text-[#E74040] text-sm leading-[20px] tracking-[0.2px] max-sm:text-center">
            Problems Trying
          </p>
          <p className="text-[#252B42] font-bold text-[24px] leading-[32px] tracking-[0.1px] max-sm:text-center">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
        </div>
        <div className="w-[545px] max-sm:w-[381px] max-sm:px-5">
          <p className="text-[#737373] text-sm leading-[20px] tracking-[0.2px] max-sm:text-left">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>
      <div className="w-[1049px] flex justify-between py-20 mx-50 max-sm:w-[414px] max-sm:flex-col max-sm:mx-0 max-sm:px-30 max-sm:gap-8">
        <div className="flex flex-col gap-1">
          <p className="text-[#252B42] font-bold text-[58px] leading-[80px] tracking-[0.2px]">
            15K
          </p>
          <p className="text-[#737373] font-bold text-base leading-[24px] tracking-[0.1px]">
            Happy Customers
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#252B42] font-bold text-[58px] leading-[80px] tracking-[0.2px]">
            150K
          </p>
          <p className="text-[#737373] font-bold text-base leading-[24px] tracking-[0.1px]">
            Monthly Visitors
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#252B42] font-bold text-[58px] leading-[80px] tracking-[0.2px]">
            15
          </p>
          <p className="text-[#737373] font-bold text-base leading-[24px] tracking-[0.1px]">
            Countries Worldwide
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#252B42] font-bold text-[58px] leading-[80px] tracking-[0.2px]">
            100+
          </p>
          <p className="text-[#737373] font-bold text-base leading-[24px] tracking-[0.1px]">
            Top Partners
          </p>
        </div>
      </div>
      <div className="relative px-80 py-20 max-sm:px-5 max-sm:py-10">
        <video
          src="/videos/ecommercevideo.mp4"
          className="rounded-md"
          ref={videoRef}
        ></video>
        <div
          className={`absolute left-[48%] top-[40%] max-sm:left-[38%] max-sm:top-[38%] ${play ? "hidden" : ""} `}
        >
          <button onClick={playVid}>
            <img src="/images/play.png" alt="" />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-20 gap-10">
        <div className="w-[607px] flex flex-col justify-center items-center max-sm:w-[361px] max-sm:gap-5">
          <p className="font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42] text-center">
            Meet Our Team
          </p>
          <p className="w-[469px] text-sm leading-[20px] tracking-[0.2px] text-[#737373] text-center max-sm:px-20">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1 max-sm:gap-5">
          {userTeam.slice(0,3).map((team, index) => (
            <TeamCard key={index} team={team} />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-20 gap-10 bg-[#FAFAFA]">
        <div className="w-[607px] flex flex-col justify-center items-center max-sm:w-[361px] max-sm:gap-5">
          <p className="font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42] text-center max-sm:px-10">
            Big Companies Are Here
          </p>
          <p className="w-[469px] text-sm leading-[20px] tracking-[0.2px] text-[#737373] text-center max-sm:px-20">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <Clients />
      </div>
      <div className="flex max-sm:flex-col">
        <div className="bg-[#2A7CC7] flex flex-col gap-5 w-2/3 justify-center items-start pl-60 max-sm:pl-0 max-sm:w-full max-sm:items-center max-sm:py-20  ">
          <p className="text-[#FFFFFF] font-bold text-base leading-[24px] tracking-[0.1px]">WORK WITH US</p>
          <p className="text-[#FFFFFF] font-bold text-[40px] leading-[50px] tracking-[0.2px] max-sm:px-20 max-sm:text-center">Now Let’s grow Yours</p>
          <p className="text-[#FFFFFF] text-sm leading-[20px] tracking-[0.2px] max-w-[430px] max-sm:w-[257px] max-sm:text-center">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
          <button className="text-[#FFFFFF] border border-[#FFFFFF] py-2 px-4 rounded-md">Submit Form</button>
        </div>
        <div className="w-1/3 max-sm:hidden">
      <img
        src="/images/clothes3.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
      </div>
    </>
  );
};
