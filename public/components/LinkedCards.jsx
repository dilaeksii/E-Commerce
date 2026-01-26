import { Link } from "react-router-dom";

export const LinkedCards = ({card}) => {

  return (<div className="bg-cover bg-no-repeat w-[205px] h-[223px] bg-center flex items-center justify-center"
  style={{ backgroundImage: `url(${card.img})` }}>
    <div className="flex flex-col items-center text-center">
        <Link to="/" className="text-[#FFFFFF] font-bold text-base tracking-[0.2px] leading-[24px]">{card.link}</Link>
        <p className="text-sm tracking-[0.2px] leading-[20px] text-[#FFFFFF]">5 Items</p>
    </div>
    
  </div>);
};
