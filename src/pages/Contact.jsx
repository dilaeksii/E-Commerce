import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Contact = () => {
  return (
    <div>
      <div className="py-20 flex items-center">
        <div className="absolute h-[518px] px-50 flex flex-col justify-start gap-5">
          <p className="font-bold leading-[24px] tracking-[0.1px] text-[#252B42]">
            Contact Us
          </p>
          <p className="w-[378px] font-bold leading-[80px] tracking-[0.2px] text-[#252B42] text-[58px]">
            Get in touch today!
          </p>
          <p className="text-2xl leading-[30px] tracking-[0.2px] text-[#737373] w-[376px]">
            We know how large objects will act, but things on a small scale
          </p>
          <p className="font-bold text-2xl leading-[32px] tracking-[0.1px] text-[#252B42]">
            Phone ; +451 215 215{" "}
          </p>
          <p className="font-bold text-2xl leading-[32px] tracking-[0.1px] text-[#252B42]">
            Fax : +451 215 215
          </p>
          <div className="flex gap-[15px]">
            <FaFacebook className="text-[#252B42]" />
            <FaInstagram className="text-[#252B42]" />
            <FaTwitter className="text-[#252B42]" />
            <FaLinkedin className="text-[#252B42]" />
          </div>
        </div>
        <div
          className="relative h-[619px] w-[1292px]"
          style={{
            background: `radial-gradient(circle at 60% 8%, #FFE9EA 0 40px, transparent 41px), radial-gradient(circle at 78% 45%, #FFE9EA 0 250px, transparent 251px)`,
          }}
        >
          <img
            src="/images/contact.png"
            alt=""
            className="absolute right-[-180px] top-1/2 -translate-y-1/2 h-[650px] object-contain"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-20">
          <span className="absolute right-[170px] top-[45%] w-[31px] h-[31px] bg-[#FFE9EA] rounded-full" />
          <span className="absolute right-[150px] top-[35%] w-[15px] h-[15px] bg-[#977DF4] rounded-full" />
          <span className="absolute left-[50%] top-[55%] w-[15px] h-[15px] bg-[#977DF4] rounded-full" />
        </div>
      </div>
    </div>
  );
};
