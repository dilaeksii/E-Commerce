export const ShopCards = () => {
  return (
    <div className="h-[732px] py-[80px] grid grid-cols-2 gap-4 px-[80px]">
      <div className="relative h-[572px] overflow-hidden bg-[url(/images/image2.png)] bg-no-repeat bg-cover bg-center">
        <div className="absolute bottom-0 left-0 bg-[#2D8BC0BF] w-[420px] h-[238px]">
          <div className="w-[198px] flex flex-col gap-5 my-10 ml-[60px]">
            <p className="font-bold text-2xl text-[#FFFFFF] leading-[32px]">
              Top Product Of the Week
            </p>
            <button className="border border-[#FFFFFF] text-[#FFFFFF] py-[15px] px-[40px] text-sm leading-[22px] rounded-md">
              EXPLORE ITEMS
            </button>
          </div>
        </div>
      </div>
      <div className="h-[572px] grid grid-rows-2 gap-4">
  
  <div className="relative h-[280px] overflow-hidden bg-[url(/images/image4.png)] bg-no-repeat bg-cover bg-center">
    <div className="absolute bottom-0 left-0 w-[370px] min-h-[130px] max-h-[170px] bg-[#2D8BC0BF]">
      <div className="p-5 flex flex-col gap-4 max-w-[220px]">
        <p className="font-bold text-xl text-white leading-[28px] whitespace-nowrap">
          Top Product Of the Week
        </p>
        <button className="self-start border border-white text-white py-[10px] px-[32px] text-sm rounded-md">
          EXPLORE ITEMS
        </button>
      </div>
    </div>
  </div>

  <div className="relative h-[280px] overflow-hidden bg-[url(/images/image3.png)] bg-no-repeat bg-cover bg-center">
    <div className="absolute bottom-0 left-0 w-[370px] min-h-[130px] max-h-[170px] bg-[#2D8BC0BF]">
      <div className="p-5 flex flex-col gap-4 max-w-[220px]">
        <p className="font-bold text-xl text-white leading-[28px] whitespace-nowrap">
          Top Product Of the Week
        </p>
        <button className="self-start border border-white text-white py-[10px] px-[32px] text-sm rounded-md">
          EXPLORE ITEMS
        </button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};
