"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "public/images/horizontallogo.svg";

const logo: string = Logo as string;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center justify-between bg-white p-8 shadow-md max-md:p-4">
      <Image src={logo} className="w-48 max-md:w-24" alt="TumbuhIn" />
      {/* Visible only on mobile */}
      <nav className="hidden max-md:block">
        <button className="text-xl text-[#86B737]" onClick={handleToggle}>
          ☰
        </button>
      </nav>

      {/* Full Navigation */}
      <div className="visible space-x-8 font-poppins text-xl font-medium text-lime-500 max-lg:space-x-4 max-lg:text-lg max-md:hidden md:flex">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Mobile Menu  */}
      <div
        className={`absolute left-0 top-0 flex w-full flex-col items-center rounded-b-[50px] bg-white shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ overflow: "hidden" }}
      >
        <div className="flex w-full justify-between p-5">
          <Image src={logo} width={100} height={20} alt="TumbuhIn" />
          <button className="text-xl text-[#86B737]" onClick={handleToggle}>
            ☰
          </button>
        </div>
        <a
          href="#home"
          className="text-md w-full p-4 text-center text-gray-600"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-md w-full p-4 text-center text-gray-600"
        >
          About
        </a>
        <a
          href="#services"
          className="text-md w-full p-4 text-center text-gray-600"
        >
          Services
        </a>
        <a
          href="#contact"
          className="text-md w-full p-4 text-center text-gray-600"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
