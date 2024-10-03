import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import CloseButton from "public/images/close.svg";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { StaticImageTranslator } from "@/utilities/static-image-translator";
import DescDetail from "./desc-detail";
import LocationPointer from "public/images/locationblack.svg";
import Luas from "public/images/luas.svg";
import Coin from "public/images/coinblack.svg";
import Map from "public/images/dummyphoto/map.png";
import React from "react";
import { formatPrice } from "@/utilities/price_formator";
import { Button } from "../ui/button";
import CategoryCapsule from "./category-capsule";
export interface DetailLahanProps {
  setVisible: (isVisible: boolean) => void;
  name: string;
  luas: number;
  image: StaticImageData;
  price: number;
  skills: string[];
  description: string;
  location: string;
}

const DetailLahan: React.FC<DetailLahanProps> = ({
  luas,
  price,
  skills,
  image,
  description,
  location,
  name,
  setVisible,
}) => {
  return (
    <div className="absolute z-20 h-screen w-full p-5">
      <Card className="flex w-full flex-col p-12 shadow-md shadow-lime-100 max-md:p-5">
        <button
          className="ml-auto flex py-3"
          onClick={() => {
            setVisible(false);
          }}
        >
          <Image
            src={StaticImageTranslator(CloseButton)}
            width={16}
            height={16}
            alt="Close Button"
          ></Image>
        </button>
        <Image
          src={StaticImageTranslator(image)}
          alt="Foto Lahan"
          className="w-1/3 max-md:w-full"
        ></Image>

        <CardHeader>
          <CardTitle className="text-4xl font-bold max-md:text-2xl">
            {name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div>
            <ul>
              <DescDetail
                icon={StaticImageTranslator(Luas)}
                desc={luas + " m2"}
              ></DescDetail>
              <DescDetail
                icon={StaticImageTranslator(Coin)}
                desc={"Rp " + formatPrice(price)}
              ></DescDetail>
            </ul>

            <div className="mt-5 flex flex-col gap-y-4">
              <h2 className="text-lg font-semibold">Tersedia Lahan</h2>
              <div className="flex flex-col gap-y-4">
                {skills?.map((skill, index) => (
                  <CategoryCapsule key={index} name={skill}></CategoryCapsule>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-y-5">
              <h2 className="text-lg font-semibold">Deskripsi Lahan</h2>
              <p className="text-sm">{description}</p>
            </div>
            <div className="mt-5 flex flex-col gap-y-5">
              <h2 className="text-lg font-semibold">Lokasi Lahan</h2>
              <DescDetail
                icon={StaticImageTranslator(LocationPointer)}
                desc={location}
              ></DescDetail>
              <Image
                src={StaticImageTranslator(Map)}
                alt="Maps"
                className="w-2/3 max-md:w-full"
              ></Image>
            </div>
          </div>
        </CardContent>
        <Button className="mt-10 rounded-xl bg-lime-500 py-5 text-lg font-bold max-md:py-4 max-md:text-sm">
          PILIH
        </Button>
      </Card>
    </div>
  );
};

export default DetailLahan;
