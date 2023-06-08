import Link from "../../link/link";
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import cx from "classnames";
import { Box1 } from "iconsax-react";
import statics from "@/constants/app";

const Footer = () => {
  return (
    <>
      <div
        className="absolute z-50 bottom-0 right-0 left-0 h-[64px] pl-9 pr-16
      flex justify-between items-center md:flex-col md:justify-center md:px-4"
      >
        <div className="flex justify-center items-center text-xl text-slate-400 md:hidden opacity-0 footer-anim-join">
          <span className="ml-5 text-sm text-slate-300">
            به ما ملحق شوید در
          </span>
          <Link href={statics.linkedinSocial}>
            <FaLinkedin className="ml-3 hover:text-slate-600" />
          </Link>
          <Link href={statics.telegramSocial}>
            <FaTelegramPlane className="hover:text-slate-600" />
          </Link>
          {/* <Link href={"/"} className="mx-3">
            <AiFillInstagram className="hover:text-slate-600" />
          </Link> */}
          {/* <Link href={"/"}>
            <BsTwitter className="hover:text-slate-600" />
          </Link> */}
        </div>
        <div className="text-slate-400 flex justify-center items-center md:mt-1 opacity-0 footer-anim-sponser">
          <span className="text-slate-300 text-sm ml-2">میزبانی شده توسط</span>

          <Link
            className="flex font-bold justify-center items-center hover:text-slate-600"
            href={statics.sponserLink}
          >
            {statics.sponserName} <Box1 size="16" className="mr-2" />
          </Link>
        </div>
        <div className="text-slate-400 flex justify-center items-center md:text-[14px] opacity-0 footer-anim-design">
          <span className="text-slate-300 text-sm ml-5 relative top-[3px]">
            طراحی و توسعه توسط
          </span>
          <div style={{ fontFamily: "cursive" }}>
            <Link
              className={"font-bold hover:text-slate-600"}
              href={statics.sahDev}
            >
              Sah
            </Link>
          </div>
          <span className="mx-2 text-slate-200 text-sm relative top-[3px]">
            {" "}
            - و -{" "}
          </span>
          <div style={{ fontFamily: "cursive" }}>
            <Link
              className={"font-bold hover:text-slate-600"}
              href={statics.zolfuDev}
            >
              Zolfu
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
