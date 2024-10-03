import Image from "next/image";
import type { StaticImageData } from "next/image";
import Calendar from "public/images/Calendar.svg";
import { StaticImageTranslator } from "../../utilities/static-image-translator";
export interface ILaporanCard {
  image: StaticImageData;
  name: string;
  tanggal: string;
  comment: string;
}

export const CardLaporanPekerja: React.FC<ILaporanCard> = ({
  image,
  name,
  tanggal,
  comment,
}) => {
  return (
    <div className="flex flex-row gap-x-5 rounded-lg bg-white p-5">
      <Image src={image} alt="Laporan Images" className="rounded-lg"></Image>
      <div className="">
        <h3 className="mb-2 text-lg font-semibold text-lime-700">{name}</h3>
        <div className="mb-1 flex flex-row items-center gap-x-3 text-sm font-medium text-lime-700">
          <Image
            src={StaticImageTranslator(Calendar)}
            alt="Laporan Images"
            className=""
          />
          <p className="">{tanggal}</p>
        </div>
        <p className="text-xs">{comment}</p>
      </div>
    </div>
  );
};
