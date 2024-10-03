import Image from "next/image";
import type { StaticImageData } from "next/image";
import React from "react";

interface LahanHeroProps {
  nama_lahan: string;
  foto_lahan: StaticImageData;
}

const LahanHero: React.FC<LahanHeroProps> = ({ nama_lahan, foto_lahan }) => {
  return (
    <div className="gap-y-4 flex flex-col">
      <h1 className="max-md:text-xl text-2xl font-semibold">{nama_lahan}</h1>
      <Image src={foto_lahan} width={100} height={100} alt="Foto Lahan" className="w-2/3 max-md:w-full h-auto"></Image>
      <a className="underline max-md:text-sm text-md" href="">Lihat Detail →</a>
    </div>
  );
};

export default LahanHero;
