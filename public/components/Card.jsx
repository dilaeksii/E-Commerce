export const Card = ({ card }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={card.img} alt="" />
      <p className="font-bold text-2xl leading-[32px] text-[#252B42]">
        {card.title}
      </p>
      <p className="text-sm text-[#737373] leading-[20px] w-[225px] h-[40px] text-center tracking-[0.2px]">
        {card.paragraph}
      </p>
    </div>
  );
};
