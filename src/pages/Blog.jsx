import { SaleBlog } from "../../public/components/SaleBlog";
import { saleCards } from "../data/SaleCard";

export const Blog = () => {
  return (
    <div className="flex py-10 justify-center gap-5 flex-wrap space-y-60 max-sm:flex-col max-sm:gap-2 max-sm:space-y-10">
      {saleCards.slice(2).map((card, index) => (
        <SaleBlog key={index} card={card} />
      ))}
    </div>
  );
};
