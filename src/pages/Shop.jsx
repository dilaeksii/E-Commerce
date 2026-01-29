import { useLocation, Link, NavLink } from "react-router-dom";
import { LinkedCards } from "../../public/components/LinkedCards";
import { linkedCard } from "../data/LinkedCard";
import { Clients } from "../../public/components/Clients";
import { ProductCard } from "../../public/components/ProductCard";
import { useMemo, useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";

export const Shop = () => {
  const { pathname } = useLocation();

  const path = pathname.split("/").filter(Boolean); // ["", "shop"] => filter => ["shop"] (array)

  const createPro = (count) =>
    Array.from({ length: count }, () => ({
      imageId: Math.floor(Math.random() * 7) + 1,
      title: "Graphic Design",
      department: "English Department",
      price: "$16.48",
      salePrice: "$6.48",
    }));

  const itemsPerPage = 12;

  const items = useMemo(() => createPro(34), []); //Ürünler bir kere üretilir

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const goToPage = (p) => setCurrentPage(Math.max(1, Math.min(totalPages, p)));

  const [isList, setIsList] = useState(false);
  const [selected, setSelected] = useState("");
  const [filtered, setFiltered] = useState(currentItems);

  const filterProducts = (filter) => {
    console.log(filter);
    if (filter === "popular") {
      setFiltered(currentItems.filter((item) => item.imageId === 1));
      return;
    }
  }; //filter fonksiyonu çalışıyor ama currentItems filteredItems bir çözüm bulunması lazım çünk filteredItems kullanınca ve sayfa değiştirince currentItems aynı kalıyor

  const SORT_OPTIONS = {
    popular: "Most Popular",
    price_dec: "Price Z-A",
    price_inc: "Price A-Z",
  };

  return (
    <div>
      <div className="bg-[#FAFAFA]">
        <div className="flex justify-between px-[38px] py-10 max-sm:flex-col max-sm:py-5 max-sm:gap-[30px] max-sm:items-center">
          <p className="font-bold text-[#252B42] text-2xl tracking-[0.1px] leading-[32px]">
            Shop
          </p>
          <div>
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
        <div className="flex justify-around px-[38px] pb-8 max-sm:flex-col max-sm:items-center max-sm:gap-5">
          {linkedCard.map((card, index) => (
            <LinkedCards key={index} card={card} />
          ))}
        </div>
      </div>
      <div className="py-5 px-5 flex justify-between max-sm:flex-col max-sm:items-center max-sm:gap-5">
        <p>Showing all {currentItems.length} products </p>
        <div className="flex gap-3 items-center">
          <p className="text-[#737373] font-bold text-sm">Views: </p>
          <button
            className=" border border-[#ECECEC] p-[15px] w-[46px] h-[46px] flex items-center justify-center rounded-md"
            onClick={() => setIsList(false)}
          >
            <LayoutGrid className="text-[#252B42]" />
          </button>
          <button
            className="border border-[#ECECEC] p-[15px] w-[46px] h-[46px] flex items-center justify-center rounded-md"
            onClick={() => setIsList(true)}
          >
            <List className="text-[#ECECEC]" />
          </button>
        </div>
        <div className="flex items-center justify-between gap-5 max-sm:justify-around max-sm:gap-3">
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-2 font-bold text-sm leading-[24px] text-[#737373] border rounded-md border-[#737373] py-3 px-2"
            >
              {selected ? SORT_OPTIONS[selected] : "Popularity"}
              <FaCaretDown className="shrink-0" />
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute bg-white shadow-lg rounded-lg z-50 min-w-40">
              <button
                className="block px-3 py-2 whitespace-nowrap"
                onClick={() => setSelected("popular")}
              >
                Most Popular
              </button>
              <button
                className="block px-3 py-2 whitespace-nowrap"
                onClick={() => setSelected("price_dec")}
              >
                Price Z-A
              </button>
              <button
                className="block px-3 py-2 whitespace-nowrap"
                onClick={() => setSelected("price_inc")}
              >
                Price A-Z
              </button>
            </div>
          </div>
          <button
            className="text-[#FFFFFF] font-bold text-sm leading-[24px] border bg-[#23A6F0] py-3 px-10 rounded-md"
            onClick={() => filterProducts(selected)}
          >
            Filter
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center py-5">
        <div
          className={`max-sm:grid max-sm:grid-cols-1 max-sm:gap-10 max-sm:px-5
            ${isList
              ? "lg:flex lg:flex-col lg:gap-5"
              : "lg:py-15 lg:grid lg:grid-cols-4 lg:gap-4 lg:px-30"}`
          }
        >
          {currentItems.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      <div className="flex justify-center pb-10">
        <div className="flex overflow-hidden rounded-md border border-[#BDBDBD]">
          <button
            className="px-4 py-2 text-sm disabled:opacity-40 font-bold text-[#BDBDBD] border-[#BDBDBD]"
            disabled={currentPage === 1}
            onClick={() => goToPage(1)}
          >
            First
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => goToPage(n)}
              className={`px-4 py-2 text-sm border-l text-[#23A6F0] border-[#BDBDBD] ${
                n === currentPage ? "bg-[#23A6F0] text-[#E9E9E9]" : ""
              }`}
            >
              {n}
            </button>
          ))}
          <button
            className="px-4 py-2 text-sm border-l disabled:opacity-40 font-bold text-[#BDBDBD]"
            disabled={currentPage === totalPages}
            onClick={() => goToPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
      <div className="bg-[#FAFAFA] py-0 my-0">
        <Clients />
      </div>
    </div>
  );
};
