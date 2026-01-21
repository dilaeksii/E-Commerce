
import { Clients } from "../../public/components/Clients";
import { ProductCard } from "../../public/components/ProductCard";
import { ShopCards } from "../../public/components/ShopCards";


export const Home = () => {


  return (
    <>
      <div className="grid place-items-center my-10">
        <div
          className="relative rounded-2xl h-[619px] w-[1292px]"
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
            className="absolute right-[-150px] top-1/2 -translate-y-1/2 h-[620px] object-contain z-10"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-20">
          <span className="absolute right-[70px] top-[45%] w-[31px] h-[31px] bg-[#ffffff] rounded-full" />
          <span className="absolute right-[30px] top-[35%] w-[15px] h-[15px] bg-[#977DF4] rounded-full" />
          <span className="absolute left-[53%] top-[65%] w-[15px] h-[15px] bg-[#977DF4] rounded-full" />
        </div>
      </div>
      <Clients />
      <ShopCards />
      <section className="py-[80px]">
        <div className="flex flex-col items-center gap-3">
          <p className="text-[#737373] leading-[30px] text-xl">
            Featured Products
          </p>
          <p className="text-[#252B42] leading-[32px] text-2xl">
            BESTSELLER PRODUCTS
          </p>
          <p className="text-[#737373] leading-[20px] text-sm">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="py-15 grid grid-cols-5 gap-8 px-30">
          {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
        </div>
        <div className="flex justify-center">
          <button id="more" className="border border-[#23A6F0] text-[#23A6F0] rounded-sm py-[15px] px-[40px] text-sm font-bold leading-[22px]">
            LOAD MORE PRODUCTS
          </button>
        </div>
      </section>
    </>
  );
};
