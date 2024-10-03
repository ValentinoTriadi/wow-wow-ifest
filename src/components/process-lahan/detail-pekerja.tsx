/* eslint-disable */
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import CloseButton from "public/images/close.svg";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { StaticImageTranslator } from "@/utilities/static-image-translator";
import DescDetail from "./desc-detail";
import LocationPointer from "public/images/locationblack.svg";

import Coin from "public/images/coinblack.svg";

import React from "react";
import { formatPrice } from "@/utilities/price_formator";
import { Button } from "../ui/button";
import CategoryCapsule from "./category-capsule";
export interface DetailPekerjaProps {
  setVisible: (isVisible: boolean) => void;
  name: string;
  image: StaticImageData;
  price: number;
  skills: string[];
  description: string;
  location: string;
  rating: number;
  kerjaan: string[];
}

const DetailPekerja: React.FC<DetailPekerjaProps> = ({
  price,
  skills,
  image,
  description,
  location,
  name,
  rating,
  setVisible,
  kerjaan,
}) => {
  const maxRating = 5;
  return (
    <div className="absolute z-20 h-screen w-full p-5">
      <Card className="flex w-full flex-col p-12 shadow-md shadow-lime-100 max-md:p-5">
        <button className="ml-auto flex py-3" onClick={() => setVisible(false)}>
          <Image
            src={StaticImageTranslator(CloseButton)}
            width={16}
            height={16}
            alt="Close Button"
          ></Image>
        </button>
        <Image
          src={StaticImageTranslator(image)}
          alt="Foto Pekerja"
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
                icon={StaticImageTranslator(LocationPointer)}
                desc={location}
              ></DescDetail>
              <DescDetail
                icon={StaticImageTranslator(Coin)}
                desc={"Rp " + formatPrice(price) + " / Jam"}
              ></DescDetail>
            </ul>

            <div className="mt-5 flex flex-col gap-y-4">
              <h2 className="text-lg font-semibold">Keahlian : </h2>
              <div className="flex flex-col gap-y-4">
                {skills?.map((skill, index) => (
                  <CategoryCapsule key={index} name={skill}></CategoryCapsule>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-y-5">
              <h2 className="text-lg font-semibold">Deskripsi Pekerja</h2>
              <p className="text-sm">{description}</p>
            </div>
            <div className="mt-5 flex flex-col gap-y-5">
              <h2 className="text-lg font-semibold">Rincian Pekerja</h2>
              <ul>{kerjaan?.map((kerja) => <li>{kerja}</li>)}</ul>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-y-5">
            <h2 className="text-lg font-semibold">Rating Pekerja</h2>

            <div className="flex flex-row gap-x-3">
              {Array.from({ length: maxRating }).map((_, index) => (
                <span
                  key={index}
                  className={
                    index < rating ? "text-yellow-500" : "text-gray-300"
                  }
                >
                  ⭐
                </span>
              ))}
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

export default DetailPekerja;
