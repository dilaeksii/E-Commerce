import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export const LinkedCards = ({ card }) => {
  const categoryName = card.code.split(":")[1];

  return (
    <div
      className="bg-cover bg-no-repeat w-[205px] h-[223px] bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${card.img})` }}
    >
      <div className="flex flex-col items-center text-center">
        <Link
          to={`/shop/${card.gender === "k" ? "Kadın" : "Erkek"}/${categoryName}/${card.id}`}
          className="text-[#FFFFFF] font-bold text-base tracking-[0.2px] leading-[24px]"
        >
          {card.gender === "k" ? "Kadın" : "Erkek"}/{card.title}
        </Link>
        <p className="flex justify-center items-center gap-3 text-sm tracking-[0.2px] leading-[20px] text-[#FFFFFF]">
          <FaStar />
          {card.rating}
        </p>
      </div>
    </div>
  );
};
