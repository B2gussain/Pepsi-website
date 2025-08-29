import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Instagram, Twitter, Facebook, Youtube, Music2, AtSign, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Freeze scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <nav className="navbar w-[100vw] h-[70px] bg-[#00000000] flex items-center justify-between px-6 md:px-12 relative">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Pepsi Logo"
          height={50}
          width={50}
          className="saturate-[2]"
        />
      </div>

      {/* Menu Button */}
      <div className="z-30">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white border-none focus:outline-none text-3xl"
        >
          {isOpen ? <X /> : "☰"}
        </button>
      </div>

      {/* Slide-in Menu */}
      <ul
        className={`z-20 fixed top-0 right-0 h-full md:w-[50%] w-[70vw] rounded-tl-[50px] rounded-bl-[50px] bg-[#0025ff] text-white font-medium flex flex-col items-center justify-center space-y-6 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:items-center`}
      >
        <img
          src={logo}
          alt="Pepsi Logo"
          height={120}
          width={120}
          className="saturate-[2]"
        />
        <li className="hover:text-black md:text-3xl  text-2xl  font-bold cursor-pointer">The Pepsi Challenge</li>
        <li className="hover:text-black md:text-3xl  text-2xl  font-bold cursor-pointer">LOG IN / REGISTER</li>
        <li className="hover:text-black md:text-3xl  text-2xl  font-bold cursor-pointer">BUY PEPSI</li>
        <li className="hover:text-black md:text-3xl text-2xl  font-bold cursor-pointer">RECIPES</li>
        <li className="hover:text-black md:text-3xl  text-2xl font-bold cursor-pointer">VIEW PRODUCTS</li>
        <li className="hover:text-black md:text-3xl  text-2xl font-bold cursor-pointer">CONTACT US</li>
        <div className="flex gap-2 font-bold">
          <Instagram />
          <Twitter />
          <Facebook />
          <Youtube />
          <Music2 />
          <AtSign />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
