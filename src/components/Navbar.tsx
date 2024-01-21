"use client";
import { memo, useState } from "react";
import { FaBars, FaFileLines } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onShowMenuFun = (isLink?: boolean) => {
    setShowMenu((prev: boolean) => {
      return isLink ? false : !prev;
    });
  };

  return (
    <>
      <nav className="fixed z-30 top-0 left-0 w-full bg-light-2/60 backdrop-blur-md border-b border-light-4">
        <div className="max-w-[1400px] h-[60px] mx-auto flex items-center justify-between gap-2 py-3 px-5 ">
          <div className="flex items-center gap-10">
            <a
              href="#heroSection"
              className="text-xl sm:text-2xl font-extrabold text-dark-2 mr-5 disableHighlight">
              CKN
            </a>

            <div className="hidden md:flex items-center gap-10">
              <a
                href="#aboutSection"
                className="text-sm font-medium text-dark-4 hover:text-dark-1 cursor-pointer">
                About
              </a>
              <a
                href="#experienceSection"
                className="text-sm font-medium text-dark-4 hover:text-dark-1 cursor-pointer">
                Experience
              </a>
              <a
                href="#projectSection"
                className="text-sm font-medium text-dark-4 hover:text-dark-1 cursor-pointer">
                Projects
              </a>
              <a
                href="#contactSection"
                className="text-sm font-medium text-dark-4 hover:text-dark-1 cursor-pointer">
                Contact
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-dark-1 hover:bg-dark-2 text-light-2 py-1.5 px-3 rounded-lg flex items-center justify-center font-medium gap-1.5 text-xs sm:text-sm disableHighlight">
              My Resume
            </button>

            <button
              className={`rounded-lg flex md:hidden items-center justify-center transition-transform disableHighlight ${
                showMenu ? `rotate-90` : `rotate-0`
              }`}
              onClick={() => onShowMenuFun()}>
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`flex md:hidden fixed left-0 top-0 z-20 h-full w-full justify-end  bg-dark-1/80 backdrop-blur-sm transition-opacity ${
          showMenu ? `opacity-100` : `opacity-0 pointer-events-none`
        }`}
        onClick={(e: any) => {
          if (e.target === e.currentTarget) {
            onShowMenuFun();
          }
        }}>
        <div
          className={`w-[320px] flex flex-col gap-10 bg-light-2 h-full px-6 pt-24 delay-100 transition-transform ${
            showMenu ? `translate-x-[0px]` : `translate-x-[350px]`
          }`}>
          <a
            href="#heroSection"
            className="text-lg text-right font-semibold text-dark-3 hover:text-dark-1 cursor-pointer disableHighlight"
            onClick={() => onShowMenuFun(true)}>
            Home
          </a>
          <a
            href="#aboutSection"
            className="text-lg text-right font-semibold text-dark-3 hover:text-dark-1 cursor-pointer disableHighlight"
            onClick={() => onShowMenuFun(true)}>
            About
          </a>
          <a
            href="#experienceSection"
            className="text-lg text-right font-semibold text-dark-3 hover:text-dark-1 cursor-pointer disableHighlight"
            onClick={() => onShowMenuFun(true)}>
            Experience
          </a>
          <a
            href="#projectSection"
            className="text-lg text-right font-semibold text-dark-3 hover:text-dark-1 cursor-pointer disableHighlight"
            onClick={() => onShowMenuFun(true)}>
            Projects
          </a>
          <a
            href="#contactSection"
            className="text-lg text-right font-semibold text-dark-3 hover:text-dark-1 cursor-pointer disableHighlight"
            onClick={() => onShowMenuFun(true)}>
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default memo(Navbar);
