import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const TeamCard = ({ team }) => {
  return (
    <div className="flex flex-col gap-5 w-[329px] justify-center items-center">
      <img src={team.img} alt="" />
      <p className="font-bold tracking-[0.1px] leading-[24px] text-[#252B42]">
        {team.username}
      </p>
      <p className="font-bold tracking-[0.2px] leading-[24px] text-[#737373] text-sm">
        {team.profession}
      </p>
      <div className="flex gap-[15px]">
        <FaFacebook className="text-[#23A6F0]" />
        <FaInstagram className="text-[#23A6F0]" />
        <FaTwitter className="text-[#23A6F0]" />
      </div>
    </div>
  );
};
