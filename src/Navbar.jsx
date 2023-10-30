import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCloseCircle, AiFillInstagram } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Menu items as JSON array
const menuItems = [
  { id: 1, text: "Pricing", url: "#" },
  { id: 2, text: "About", url: "#" },
  { id: 3, text: "Learn", url: "#" },
  { id: 4, text: "Corporate", url: "#" },
  { id: 5, text: "News", url: "#" },
];

const iconComponents = [
  { Icon: BsDiscord, color: "text-indigo-500", url: "#" },
  { Icon: AiFillInstagram, color: "text-rose-500", url: "#" },
  { Icon: FaTwitter, color: "text-sky-600", url: "#" },
  { Icon: MdEmail, color: "text-teal-500", url: "#" },
];

const IconList = () => (
  <div className="header-follow absolute bottom-5 left-0 right-0">
    <div className="flex items-center justify-evenly space-x-2 px-6 py-4">
      {iconComponents.map(({ Icon, color, url }) => (
        <a key={color} href={url}>
          <Icon className={`text-2xl black`} />
        </a>
      ))}
    </div>
  </div>
);

function MobileMenu({ onClose }) {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".main-nav-menu-mobile")) {
        onClose();
      }
    };
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="main-nav-menu-mobile bg-zinc-50/70 shadow-sm lg:shadow-none absolute left-0 top-0 bottom-0 right-0 border-r border-slate-400/30 border-dashed w-[270px] md:w-[300px] lg:flex lg:w-[300px] lg:flex-col">
      <div>
        <button>
          <div className="header-logo p-5 flex items-center space-x-2">
            <h1 className="text-xl font-clash text-black font-[650]">Lint</h1>
          </div>
        </button>
        <div className="header-menu-mobile lg:hidden">
          <ul className="flex-col space-y-5 px-8 py-5 pb-8 text-[1.1rem] font-bold text-black">
            {menuItems.map((menuItem, index) => (
              <li key={index}>
                <a href={menuItem.url}>
                  <button>{menuItem.text}</button>
                </a>
              </li>
            ))}
          </ul>
          <div className="header-button-mobile space-y-2">
            <div className=" px-6 lg:flex lg:items-center">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-full border-2 border-black px-4 py-2.5 text-sm font-semibold text-black hover:shadow-lg hover:drop-shadow-lg hover:bg-slate-50/50 transition duration-200"
              >
                <span>Connect Now</span>
                <BsArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <IconList />
    </div>
  );
}

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = (event) => {
    event.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="navbar-home top-0 py-2 lg:py-5 w-full bg-transparent lg:relative  ">
      <nav className="z-1000 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
        <div className="flex items-center justify-between">
          <button>
            <div className="header-logo flex items-center space-x-2">
              <h1 className="text-xl font-clash text-black font-[650]">Lint</h1>
            </div>
          </button>
          <div className="header-menu hidden lg:block">
            <ul className="flex space-x-10 text-base font-[400] text-[#889D9D]">
              {menuItems.map((menuItem, index) => (
                <li key={index}>
                  <a href={menuItem.url}>
                    <button>{menuItem.text}</button>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="header-button space-x-2">
            <div className="hidden lg:flex lg:items-center">
              <a
                href="#"
                className="flex items-center justify-center rounded-full bg-[#EC4747] border border-[#506F6F] px-4 py-2.5 text-sm font-semibold text-white hover:shadow-lg hover:drop-shadow-lg hover:bg-slate-500/20 transition duration-200"
              >
                <span>Connect Now</span>
              </a>
            </div>
          </div>
          <div className=" flex items-center justify-center lg:hidden">
            <button
              className={`advanced-setting-toggle focus:outline-none ${
                isMobileMenuOpen
                  ? "rounded-full bg-slate-200 text-slate-800"
                  : "text-slate-200"
              }`}
              onClick={handleMobileMenuToggle}
            >
              {isMobileMenuOpen ? (
                <AiOutlineCloseCircle className="text-2xl focus:outline-none active:scale-110 active:text-slate-200" />
              ) : (
                <HiMenuAlt3 className="text-2xl text-slate-200 focus:outline-none active:scale-110 active:text-red-500" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`main-nav-menu fixed inset-0 z-50 transform overflow-auto bg-transparent transition duration-150 lg:hidden ${
          isMobileMenuOpen ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        <MobileMenu onClose={handleMobileMenuClose} />
      </div>
    </div>
  );
}

export default Navbar;
