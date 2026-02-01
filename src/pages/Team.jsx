import { useLocation, Link, NavLink } from "react-router-dom";
import { userTeam } from "../data/UserTeam";
import { TeamCard } from "../../public/components/TeamCard";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Team = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/").filter(Boolean);
  return (
    <div>
      <div className="py-10 max-sm:px-5">
        <p className="font-bold leading-[24px] tracking-[0.1px] text-[#737373] text-center">
          What We Do
        </p>
        <p className="font-bold leading-[80px] tracking-[0.2px] text-[#252B42] text-[58px] text-center max-sm:text-5xl max-sm:leading-[55px] max-sm:py-5">
          Innovation tailored for you
        </p>
        <div className="flex items-center justify-center">
          <Link to="/home">Home</Link>

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
      </div>
      <div className="grid grid-cols-2 gap-1 h-[530px] px-10 py-5 max-sm:grid-cols-1 max-sm:px-1">
        <div className="bg-[url(/images/team1.jpg)] bg-no-repeat bg-cover bg-top"></div>
        <div className="grid grid-cols-2 grid-rows-2 gap-1">
          <div className="bg-[url(/images/teams2.jpg)] bg-no-repeat bg-cover bg-top"></div>
          <div className="bg-[url(/images/team3.jpg)] bg-no-repeat bg-cover bg-top"></div>
          <div className="bg-[url(/images/team4.jpg)] bg-no-repeat bg-cover bg-top"></div>
          <div className="bg-[url(/images/team5.jpg)] bg-no-repeat bg-cover bg-top"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-[#252B42] text-[40px] tracking-[0.2px] leading-[50px] py-10">
          Meet Our Team
        </p>
        <div className="grid grid-cols-3 grid-row-3 gap-x-5 gap-y-20 py-10 max-sm:grid-cols-1">
          {userTeam.map((team, index) => (
            <TeamCard key={index} team={team} />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 py-20">
        <p className="font-bold text-[#252B42] text-[40px] tracking-[0.2px] leading-[50px] text-center max-sm:w-[332px]">
          Start your 14 days free trial
        </p>
        <p className="font-bold text-[#737373] text-sm tracking-[0.2px] leading-[20px] w-[411px] text-center max-sm:w-[321px]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="bg-[#23A6F0] py-2 px-[40px] rounded-md font-bold text-[#FFFFFF] text-sm tracking-[0.2px] leading-[22px]">
          Try it for free
        </button>
        <div className="flex gap-[15px]">
          <FaFacebook className="text-[#23A6F0]" />
          <FaInstagram className="text-[#23A6F0]" />
          <FaTwitter className="text-[#23A6F0]" />
          <FaLinkedin className="text-[#23A6F0]" />
        </div>
      </div>
    </div>
  );
};
