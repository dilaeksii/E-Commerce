export const ContactCard = ({contact}) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-bold text-2xl text-[#FFFFFF] leading-[32px] tracking-[0.1px] ">
        {contact.location}
      </p>
      <p className="text-xl text-[#FFFFFF] leading-[30px] tracking-[0.2px] max-sm:text-sm">
        {contact.address}
      </p>
      <div className="border-b w-[58px] border-[#23A6F0] border-[2px]"></div>
      <p className="font-bold text-sm text-[#FFFFFF] leading-[24px] tracking-[0.1px]">
        {contact.code}
      </p>
      <p className="font-bold text-sm text-[#FFFFFF] leading-[24px] tracking-[0.1px]">
        {contact.phone}
      </p>
      <p className="font-bold text-sm text-[#FFFFFF] leading-[24px] tracking-[0.1px]">
        {contact.fax}
      </p>
    </div>
  );
};
