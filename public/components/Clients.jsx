import {
  FaAmazon,
  FaHooli,
  FaLeaf,
  FaLyft,
  FaRedditAlien,
  FaStripe,
} from "react-icons/fa";

export const Clients = () => {
  return (
    <div className="w-full py-2 flex items-center justify-around my-5">
      <div className="flex items-center gap-20 text-[60px] text-[#737373] max-sm:flex-col max-sm:gap-5">
        <FaHooli />
        <FaLyft />
        <FaLeaf />
        <FaStripe />
        <FaAmazon />
        <FaRedditAlien />
      </div>
    </div>
  );
};
