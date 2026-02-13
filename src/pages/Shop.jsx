import { useLocation, Link, NavLink } from "react-router-dom";
import { LinkedCards } from "../../public/components/LinkedCards";
import { Clients } from "../../public/components/Clients";
import { ProductCard } from "../../public/components/ProductCard";
import { useEffect, useState } from "react";
import { LayoutGrid, List } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";

export const Shop = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const path = pathname.split("/").filter(Boolean); 
  const category = path.length === 4 ? path[path.length-1] : null;
  const mostRated = useSelector((state) => state.categories.items);
  const sortedByRating = [...mostRated].sort((a, b) => b.rating - a.rating);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  useEffect(() => {
    if (!category) {
      dispatch(fetchProducts({sort, filter}));
    } else {
      dispatch(fetchProducts({ sort, category, filter }));
    }
  }, [category, dispatch]);
  const itemsPerPage = 12;
  const items = useSelector((state) => state.products.products);
  const total = useSelector((state) => state.products.total);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  const goToPage = (p) => setCurrentPage(Math.max(1, Math.min(totalPages, p)));
  const [isList, setIsList] = useState(false);

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
          {sortedByRating.slice(0, 5).map((card, index) => (
            <LinkedCards key={index} card={card} />
          ))}
        </div>
      </div>
      <div className="py-5 px-5 flex justify-between max-sm:flex-col max-sm:items-center max-sm:gap-5">
        <p>
          Showing all {currentItems.length}/{total} products{" "}
        </p>
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
        <form action="">
          <div className="flex items-center justify-between gap-5 max-sm:justify-around max-sm:gap-3">
            <label
              htmlFor="search"
              className="block mb-2.5 text-sm font-medium text-heading sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-body"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-md focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                placeholder="Search"
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
            <div className="relative group">
              <select
                value={sort}
                onChange={(e) => {
                  e.preventDefault;
                  setSort(e.target.value);
                }}
                className="border py-2 px-5 rounded-md"
              >
                <option value="">Filter</option>
                <option value="price:asc">Price A-Z</option>
                <option value="price:desc">Price Z-A</option>
                <option value="rating:asc">Rating Asc</option>
                <option value="rating:desc">Rating Desc</option>
              </select>
            </div>
            <button
              type="button"
              className="text-[#FFFFFF] font-bold text-sm leading-[24px] border bg-[#23A6F0] py-3 px-10 rounded-md"
              onClick={() => {
                dispatch(fetchProducts({ sort: sort, category: category, filter: filter }));
              }}
            >
              Filter
            </button>
          </div>
        </form>
      </div>

      {currentItems.length > 0 ? (
        <div className="flex items-center justify-center py-5">
          <div
            className={`max-sm:grid max-sm:grid-cols-1 max-sm:gap-10 max-sm:px-5
            ${
              isList
                ? "lg:flex lg:flex-col lg:gap-5"
                : "lg:py-15 lg:grid lg:grid-cols-4 lg:gap-4 lg:px-30"
            }`}
          >
            {currentItems.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center py-10">
          Ürün bulunamamaktadır!
        </div>
      )}

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
