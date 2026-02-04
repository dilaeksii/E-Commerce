import { Mail, MapPin, MoveDownRight, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


export const Contact = () => {
  return (
    <div>
      <div className="grid place-items-center my-10 max-sm:hidden">
        <div
          className="relative rounded-2xl h-[619px] w-[1292px] max-sm:w-[338px] max-sm:h-[905px]"
          style={{
            background: `radial-gradient(circle at 50% 10%, #FFE9EA 0 40px, transparent 41px), radial-gradient(circle at 75% 43%, #FFE9EA 0 250px, transparent 251px)`,
          }}
        >
          <div className="absolute left-16 top-1/2 -translate-y-1/2 max-w-md flex flex-col gap-5">
            <p className="font-bold leading-[24px] tracking-[0.1px] text-[#252B42]">
            CONTACT US
          </p>
          <p className="w-[378px] font-bold leading-[80px] tracking-[0.2px] text-[#252B42] text-[58px] max-sm:text-5xl">
            Get in touch today!
          </p>
          <p className="text-2xl leading-[30px] tracking-[0.2px] text-[#737373] w-[376px] max-sm:text-[20px] max-sm:w-[277px]">
            We know how large objects will act, but things on a small scale
          </p>
          <p className="font-bold text-2xl leading-[32px] tracking-[0.1px] text-[#252B42] max-sm:text-[20px]">
            Phone ; +451 215 215{" "}
          </p>
          <p className="font-bold text-2xl leading-[32px] tracking-[0.1px] text-[#252B42] max-sm:text-[20px]">
            Fax : +451 215 215
          </p>
          <div className="flex gap-[15px]">
            <FaFacebook className="text-[#252B42]" />
            <FaInstagram className="text-[#252B42]" />
            <FaTwitter className="text-[#252B42]" />
            <FaLinkedin className="text-[#252B42]" />
          </div>
          </div>
          <img
            src="/images/contact.png"
            alt=""
            className="absolute right-[-150px] top-1/2 -translate-y-1/2 h-[620px] object-contain z-10 max-sm:static max-sm:translate-y-7/9"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-20">
          <span className="absolute right-[70px] top-[45%] w-[31px] h-[31px] bg-[#FFE9EA] rounded-full" />
          <span className="absolute right-[30px] top-[35%] w-[15px] h-[15px] bg-[#977DF4] rounded-full" />
          <span className="absolute left-[53%] top-[65%] w-[15px] h-[15px] bg-[#977DF4] rounded-full" />
        </div>
      </div>
      <div className="hidden grid place-items-center my-10 max-sm:grid pb-10">
        <div
          className="relative rounded-2xl h-[619px] w-[1292px] max-sm:w-[338px] max-sm:h-[905px]"
          style={{
            background: `radial-gradient(circle at 5% 75%, #FFE9EA 0 16px, transparent 17px), radial-gradient(circle at 50% 85%, #FFE9EA 0 120px, transparent 121px)`,
          }}
        >
          <div className="absolute min-h-screen flex flex-col items-center justify-center pb-5 gap-5">
            <p className="font-bold leading-[24px] tracking-[0.1px] text-[#252B42] text-center">
            CONTACT US
          </p>
          <p className="w-[331px] font-bold leading-[50px] tracking-[0.2px] text-[#252B42] text-[40px] text-center">
            Get in touch today!
          </p>
          <p className="text-2xl leading-[30px] tracking-[0.2px] text-[#737373] w-[277px] text-center">
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
          <img
            src="/images/contact.png"
            alt=""
            className="absolute right-[-150px] top-1/2 -translate-y-1/2 h-[620px] object-contain z-10 max-sm:static max-sm:translate-y-7/9"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-20">
          <span className="absolute left-[90%] top-[180%] w-[17px] h-[17px] bg-[#FFE9EA] rounded-full" />
          <span className="absolute left-[88%] top-[162%] w-[9px] h-[9px] bg-[#977DF4] rounded-full" />
          <span className="absolute left-[15%] top-[192%] w-[9px] h-[9px] bg-[#977DF4] rounded-full" />
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center gap-2 py-5 max-sm:bg-[#FAFAFA]">
          <p className="font-bold text-sm leading-[24px] tracking-[0.2px] text-[#252B42]">
            VISIT OUR OFFICE
          </p>
          <p className="font-bold text-[50px] leading-[50px] tracking-[0.2px] text-[#252B42] w-[625px] text-center max-sm:w-[310px] max-sm:text-[40px]">
            We help small businesses with big ideas
          </p>
        </div>
        <div className="flex gap-5 justify-center py-10 max-sm:flex-col max-sm:items-center max-sm:bg-[#FAFAFA]">
          <div className="flex flex-col justify-center gap-3 items-center py-[80px] px-[40px]">
            <Phone size={72} color="#23A6F0" />
            <p className="font-bold text-sm text-[#252B42] leading-[24px] tracking-[0.2px]">georgia.young@example.com</p>
            <p className="font-bold text-sm text-[#252B42] leading-[24px] tracking-[0.2px]">georgia.young@ple.com</p>
            <p className="font-bold text-base text-[#252B42] leading-[24px] tracking-[0.1px] py-3">Get Support</p>
            <button className="border border-[#23A6F0] text-[#23A6F0] py-3 px-5 rounded-3xl">Submit Request</button>
          </div>
          <div className="flex flex-col justify-center gap-3 items-center bg-[#252B42] py-[80px] px-[40px]">
            <MapPin size={72} color="#23A6F0" />
            <p className="font-bold text-sm text-[#FFFFFF] leading-[24px] tracking-[0.2px]">georgia.young@example.com</p>
            <p className="font-bold text-sm text-[#FFFFFF] leading-[24px] tracking-[0.2px]">georgia.young@ple.com</p>
            <p className="font-bold text-base text-[#FFFFFF] leading-[24px] tracking-[0.1px] py-3">Get Support</p>
            <button className="border border-[#23A6F0] text-[#23A6F0] py-3 px-5 rounded-3xl">Submit Request</button>
          </div>
          <div className="flex flex-col justify-center gap-3 items-center py-[80px] px-[40px]">
            <Mail size={72} color="#23A6F0" />
            <p className="font-bold text-sm text-[#252B42] leading-[24px] tracking-[0.2px]">georgia.young@example.com</p>
            <p className="font-bold text-sm text-[#252B42] leading-[24px] tracking-[0.2px]">georgia.young@ple.com</p>
            <p className="font-bold text-base text-[#252B42] leading-[24px] tracking-[0.1px] py-3">Get Support</p>
            <button className="border border-[#23A6F0] text-[#23A6F0] py-3 px-5 rounded-3xl">Submit Request</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-30 gap-5">
        <MoveDownRight size={72} color="#23A6F0" />
        <p className="font-bold text-base leading-[24px] tracking-[0.1px] text-[#252B42]">
            We Can't Wait To Meet You
          </p>
          <p className="font-bold text-[58px] leading-[80px] tracking-[0.2px] text-[#252B42]">
            Let's Talk
          </p>
          <button className="py-[15px] px-[40px] bg-[#23A6F0] rounded-md text-[#FFFFFF] text-sm font-bold leading-[22px] tracking-[0.2px]">Try It Free Now</button>
      </div>
    </div>
  );
};
