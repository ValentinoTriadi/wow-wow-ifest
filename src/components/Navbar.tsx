"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white p-4 shadow-md flex justify-between items-center relative z-50">
      <Image src="/logohorizontal.png" width={100} height={100} alt="TumbuhIn" />
      <nav>
        <button className="text-[#86B737] text-xl" onClick={handleToggle}>☰</button>
      </nav>
      <div
        className={`absolute top-0 left-0 w-full bg-white flex flex-col items-center shadow-md rounded-l-[50px] rounded-r-[50px] transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ overflow: 'hidden' }}
      >
        <div className='flex justify-between w-full p-5'>
          <Image src="/logohorizontal.png" width={100} height={20} alt="TumbuhIn" />
          <button className="text-[#86B737] text-xl" onClick={handleToggle}>☰</button>
        </div>
        <a href="/" className="text-gray-600 text-md p-4 w-full text-center">Beranda</a>
        <a href="/process-lahan" className="text-gray-600 text-md p-4 w-full text-center">Mulai Agrikultur</a>
        <a href="/tani-ternak" className="text-gray-600 text-md p-4 w-full text-center">Tani & Ternak</a>
        <a href="/article" className="text-gray-600 text-md p-4 w-full text-center">Konten Edukasi</a>
        <a href="/profile" className="text-gray-600 text-md p-4 w-full text-center">Profile</a>
      </div>
    </div>
  );
}