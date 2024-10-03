import Foto1 from "public/images/dummyphoto/tani2.png";
import Foto2 from "public/images/dummyphoto/tani3.png";
import { StaticImageTranslator } from "../../utilities/static-image-translator";
import type { ILaporanCard } from "./card-laporan-pekerja";
import { CardLaporanPekerja } from "./card-laporan-pekerja";
import { CreateFormattedDate } from "@/utilities/date-formator";

const dummyPekerja: ILaporanCard[] = [
  {
    name: "Sumarno",
    tanggal: CreateFormattedDate(new Date()),
    comment: "Siap sudah ditanem ya boss.. saya pulang dulu..",
    image: StaticImageTranslator(Foto1),
  },
  {
    name: "Darman",
    tanggal: CreateFormattedDate(new Date()),
    comment: "Siap sudah ditanem ya boss.. saya pulang dulu..",
    image: StaticImageTranslator(Foto2),
  },
  {
    name: "Bahso",
    tanggal: CreateFormattedDate(new Date()),
    comment: "Siap sudah ditanem ya boss.. saya pulang dulu..",
    image: StaticImageTranslator(Foto1),
  },
];

const DaftarPekerja = () => {
  return (
    <div className="flex-col">
      <div className="mb-7 flex flex-row justify-between font-medium text-[#505050]">
        <h2>Laporan Pekerja</h2>
        <a href="" className="underline">
          Lihat semua
        </a>
      </div>
      <div className="flex flex-col gap-y-5">
        {dummyPekerja.map((pekerja, id) => (
          <CardLaporanPekerja
            name={pekerja.name}
            key={id}
            image={pekerja.image}
            comment={pekerja.comment}
            tanggal={pekerja.tanggal}
          />
        ))}
      </div>
    </div>
  );
};

export default DaftarPekerja;
