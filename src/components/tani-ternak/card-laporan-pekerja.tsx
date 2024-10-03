import Image, { StaticImageData } from "next/image";
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
        <h3 className="text-lime-700 font-semibold text-lg mb-2">{name}</h3>
        <div className="text-lime-700 flex flex-row gap-x-3 items-center text-sm font-medium mb-1">
          <Image src={StaticImageTranslator(Calendar)} alt="Laporan Images" className=""/>
          <p className="">{tanggal}</p>
        </div>
        <p className="text-xs">{comment}</p>
      </div>
    </div>
  );
};
