import { Mail, MapPin, MoveDownRight, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Contact = () => {
  return (
    <div>
      <div className="py-20 flex items-center">
        <div className="absolute h-[518px] px-50 flex flex-col justify-start gap-5">
          <p className="font-bold leading-[24px] tracking-[0.1px] text-[#252B42]">
            CONTACT US
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
      <div>
        <div className="flex flex-col items-center justify-center gap-2 py-5">
          <p className="font-bold text-sm leading-[24px] tracking-[0.2px] text-[#252B42]">
            VISIT OUR OFFICE
          </p>
          <p className="font-bold text-[50px] leading-[50px] tracking-[0.2px] text-[#252B42] w-[625px] text-center">
            We help small businesses with big ideas
          </p>
        </div>
        <div className="flex gap-5 justify-center py-10">
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
