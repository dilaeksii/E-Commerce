import { Card } from "../../public/components/Card";
import { Clients } from "../../public/components/Clients";
import { ProductCard } from "../../public/components/ProductCard";
import { SaleBlog } from "../../public/components/SaleBlog";
import { ShopCards } from "../../public/components/ShopCards";
import { homeCards } from "../data/HomeCard";
import { saleCards } from "../data/SaleCard";
import { useProducts } from "../ProductContext";

export const Home = () => {
  const { products, loadMore } = useProducts();
  console.log("HOME products length:", products.length);
  return (
    <>
      <div className="grid place-items-center my-10 max-sm:hidden">
        <div
          className="relative rounded-2xl h-[619px] w-[1292px] max-sm:w-[338px] max-sm:h-[905px]"
          style={{
            background: `radial-gradient(circle at 50% 6%, #ffffff 0 40px, transparent 41px), radial-gradient(circle at 81% 38%, #ffffff 0 250px, transparent 251px), linear-gradient(90deg, #6FDAD4, #9DEAD3)`,
          }}
        >
          <div className="absolute left-16 top-1/2 -translate-y-1/2 max-w-md">
            <p className="text-[#2A7CC7] font-bold text-base leading-[24px] py-5">
              Summer 2020
            </p>
            <p className="text-[#252B42] font-bold text-[58px] leading-[80px] py-1">
              New Collection
            </p>
            <p className="text-[#737373] font-normal text-xl leading-[30px] tracking-[0.2] w-3/4">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="py-[15px] px-[40px] bg-[#23A6F0] text-[#FFFFFF] rounded-md my-10">
              SHOP NOW
            </button>
          </div>
          <img
            src="/images/image1.png"
            alt=""
            className="absolute right-[-150px] top-1/2 -translate-y-1/2 h-[620px] object-contain z-10 max-sm:static max-sm:translate-y-7/9"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-20">
          <span className="absolute right-[70px] top-[45%] w-[31px] h-[31px] bg-[#ffffff] rounded-full" />
          <span className="absolute right-[30px] top-[35%] w-[15px] h-[15px] bg-[#977DF4] rounded-full" />
          <span className="absolute left-[53%] top-[65%] w-[15px] h-[15px] bg-[#977DF4] rounded-full" />
        </div>
      </div>
      <div className="hidden grid place-items-center my-10 max-sm:grid">
        <div
          className="relative rounded-2xl h-[619px] w-[1292px] max-sm:w-[338px] max-sm:h-[905px]"
          style={{
            background: `radial-gradient(circle at 5% 75%, #ffffff 0 16px, transparent 17px), radial-gradient(circle at 50% 85%, #ffffff 0 120px, transparent 121px), linear-gradient(90deg, #6FDAD4, #9DEAD3)`,
          }}
        >
          <div className="absolute top-1/2 -translate-y-5/6 max-w-md">
            <p className="text-[#2A7CC7] font-bold text-base leading-[24px] py-5 text-center">
              Summer 2020
            </p>
            <p className="text-[#252B42] font-bold text-[58px] leading-[80px] py-1 text-center">
              New Collection
            </p>
            <p className="text-[#737373] font-normal text-xl leading-[30px] tracking-[0.2] w-3/4 text-center mx-10">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="py-[15px] px-[50px] bg-[#23A6F0] text-[#FFFFFF] rounded-md my-10 mx-18">
              SHOP NOW
            </button>
          </div>
          <img
            src="/images/image1.png"
            alt=""
            className="absolute right-[-150px] top-1/2 -translate-y-1/2 h-[620px] object-contain z-10 max-sm:static max-sm:translate-y-7/9"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-20">
          <span className="absolute left-[80%] top-[160%] w-[17px] h-[17px] bg-[#ffffff] rounded-full" />
          <span className="absolute left-[88%] top-[142%] w-[9px] h-[9px] bg-[#977DF4] rounded-full" />
          <span className="absolute left-[20%] top-[172%] w-[9px] h-[9px] bg-[#977DF4] rounded-full" />
        </div>
      </div>
      <Clients />
      <ShopCards />
      <section className="py-[80px]">
        <div className="flex flex-col items-center gap-3">
          <p className="text-[#737373] leading-[30px] text-xl max-sm:hidden">
            Featured Products
          </p>
          <p className="text-[#252B42] leading-[32px] text-2xl max-sm:text-center">
            BESTSELLER PRODUCTS
          </p>
          <p className="text-[#737373] leading-[20px] text-sm">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="py-15 grid grid-cols-5 gap-8 px-30 max-sm:grid-cols-1">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <div className="flex justify-center relative z-50">
          <button
            onClick={loadMore}
            type="button"
            className="border border-[#23A6F0] text-[#23A6F0] rounded-sm py-[15px] px-[40px] text-sm font-bold leading-[22px] relative z-50"
          >
            LOAD MORE PRODUCTS
          </button>
        </div>
      </section>
      <section className="py-[80px] px-30 max-sm:px-5 max-sm:pt-5">
        <div className="flex justify-around max-sm:flex-col max-sm:w-full max-sm:gap-10">
          <div className="flex gap-5 h-[498px] max-sm:order-2 max-sm:w-full max-sm:gap-2 max-sm:h-[364px]">
            <div className="bg-[url(/images/content1.jpg)] bg-no-repeat w-[217px] bg-center bg-cover h-[498px] max-sm:w-[158px]"></div>
            <div className="bg-[url(/images/content2.jpg)] bg-no-repeat w-[280px] bg-center bg-cover h-[498px] max-sm:w-[204px]"></div>
          </div>
          <div className="flex flex-col justify-center max-sm:order-1 max-sm:w-[280px] max-sm:mx-15">
            <p className="text-[#23A6F0] font-bold text-base leading-[24px]">
              Featured Products
            </p>
            <p className="text-[#252B42] font-bold text-[40px] leading-[50px] py-5">
              We love what we do
            </p>
            <p className="text-[#737373] font-normal text-sm leading-[20px] w-[351px] max-sm:w-[258px]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics.
              <br />
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="py-[80px] px-30 max-sm:px-5 max-sm:mt-5">
        <div className="flex flex-col items-center gap-3">
          <p className="text-[#737373] leading-[30px] text-xl">
            Featured Products
          </p>
          <p className="text-[#252B42] leading-[32px] text-2xl">
            THE BEST SERVICES
          </p>
          <p className="text-[#737373] leading-[20px] text-sm">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="flex justify-around py-20 max-sm:flex-col max-sm:gap-10">
          {homeCards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </section>
      <section className="py-[30px] px-30 max-sm:px-3">
        <div className="flex flex-col items-center">
          <p className="text-[#23A6F0] text-sm font-bold leading-[24px] tracking-[0.2px]">
            Practice Advice
          </p>
          <p className="text-[#252B42] text-[40px] font-bold leading-[50px] tracking-[0.2px]">
            Featured Posts
          </p>
        </div>
        <div className="flex justify-around py-30 max-sm:flex-col max-sm:gap-10">
          {saleCards.map((card, index) => (
            <SaleBlog key={index} card={card} />
          ))}
        </div>
      </section>
    </>
  );
};
