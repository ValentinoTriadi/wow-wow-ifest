import type { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

interface DescDetailProps {
  icon: StaticImageData;
  desc: string;
}

const DescDetail: React.FC<DescDetailProps> = ({ icon, desc }) => {
  return (
    <li className="flex flex-row items-center gap-x-3 text-sm max-md:text-xs">
      <Image src={icon} height={30} alt="Icon"></Image>
      <p className="text-sm">{desc}</p>
    </li>
  );
};

export default DescDetail;
