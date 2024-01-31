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
        <div className="flex justify-center items-center text-xl text-slate-400 dark:text-slate-700 md:hidden">
          <span className="ml-5 text-sm text-slate-300 dark:text-slate-400">
            به ما ملحق شوید در
          </span>
          <Link target="_blank" noLoading={true} href={statics.linkedinSocial}>
            <FaLinkedin className="ml-3 hover:text-slate-600 dark:hover:text-slate-800" />
          </Link>
          <Link target="_blank" noLoading={true} href={statics.telegramSocial}>
            <FaTelegramPlane className="hover:text-slate-600 dark:hover:text-slate-800" />
          </Link>
          {/* <Link href={"/"} className="mx-3">
            <AiFillInstagram className="hover:text-slate-600" />
          </Link> */}
          {/* <Link href={"/"}>
            <BsTwitter className="hover:text-slate-600" />
          </Link> */}
        </div>
        <div className="text-slate-400 flex justify-center items-center md:mt-1 text-center">
          <div>پروژه دانشجویی اقایان ذوالفقاری و حسینی</div>
          {/* <span className="text-slate-300 text-sm dark:text-slate-400 ml-2">
            میزبانی شده توسط
          </span> */}

          {/* <Link
            target="_blank"
            noLoading={true}
            className="flex font-bold justify-center items-center dark:text-slate-700 dark:hover:text-slate-800 hover:text-slate-600"
            href={statics.sponserLink}
          >
            {statics.sponserName} <Box1 size="16" className="mr-2" />
          </Link> */}
        </div>
        <div className="text-slate-400 dark:text-slate-700  flex justify-center items-center md:text-[14px] text-center">
          <p>تمام حقوق برای دانشگاه صنعتی قم میباشد</p>
          {/* <span className="text-slate-300 text-sm ml-5 dark:text-slate-400">
            طراحی و توسعه توسط
          </span>
          <div>
            <Link
              target="_blank"
              noLoading={true}
              className="hover:text-slate-600 en dark:hover:text-slate-800"
              href={statics.sahDev}
            >
              SAH
            </Link>
          </div>
          <span className="mx-2 text-slate-200 dark:text-slate-400  text-sm">
            {" "}
            - و -{" "}
          </span>
          <div>
            <Link
              target="_blank"
              noLoading={true}
              className={"hover:text-slate-600 en dark:hover:text-slate-800"}
              href={statics.zolfuDev}
            >
              Robnsiov
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Footer;
