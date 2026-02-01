import { ContactCard } from "../../public/components/ContactCard";
import { contactCard } from "../data/ContactCard";

export const Contact = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#022B36] via-[#0B6C7D] to-[#0FA3C6] max-sm:flex max-sm:flex-col">
      <img
        src="/images/shopcard2.jpg"
        alt=""
        className="absolute right-0 bottom-0 h-full object-cover [mask-image:linear-gradient(to_right,transparent,black_90%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_90%)] z-0"
      />
      <div
        className="absolute inset-0 flex flex-row justify-center items-center gap-20 z-10 max-sm:relative max-sm:flex-col max-sm:items-start max-sm:px-2 max-sm:py-10">
        <div className="w-[367px] h-[234px] flex flex-col gap-8 items-start max-sm:items-center ">
          <p className="text-[40px] font-bold text-[#FFFFFF] leading-[50px] tracking-[0.2px]">
            CONTACT US
          </p>
          <p className="text-[#FFFFFF] leading-[20px] tracking-[0.2px] text-sm max-sm:text-center">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <button className="bg-[#23A6F0] rounded-md text-[#FFFFFF] py-[15px] px-[40px]">
            CONTACT US
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-10 h-[533px] max-sm:grid-cols-1 max-sm:h-auto max-sm:w-full max-sm:place-items-center">
          {contactCard.map((contact, index) => (
            <ContactCard key={index} contact={contact} />
          ))}
        </div>
      </div>
    </section>
  );
};
