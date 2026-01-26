import { useLocation, Link, NavLink } from "react-router-dom";
import { LinkedCards } from "../../public/components/LinkedCards";
import { linkedCard } from "../data/LinkedCard";

export const Shop = () => {
  const { pathname } = useLocation();

  const path = pathname.split("/").filter(Boolean); // ["", "shop"] => filter => ["shop"] (array)

  return (
    <div>
      <div className="bg-[#FAFAFA]">
        <div className="flex justify-between px-[38px] py-10">
          <p className="font-bold text-[#252B42] text-2xl tracking-[0.1px] leading-[32px]">
            Shop
          </p>
          <div>
            <Link to="/home">Home</Link>

            {path.map((p, i) => {
              //p, path arrayindeki her bir eleman burdaki örnekte tek alamanlı array yani shop
              const to = "/" + path.slice(0, i + 1).join("/"); //arraydeki elemenları alır array iki elemanlı olsaydı bir sonraki turda (0,2) olcağından ikinci elemanı da alırdı
              const label = p.charAt(0).toUpperCase() + p.slice(1); //charAt(0)="s" => upperCase "S" => slice(1) = "hop"

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
        <div className="flex justify-around px-[38px] pb-8">
            {linkedCard.map((card, index) => (
                <LinkedCards key={index} card={card} />
            ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};
