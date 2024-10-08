/* eslint-disable */

"use client";
import Navbar from "@/components/Navbar";
import OrderPath from "@/components/process-lahan/order-path";
import ItemSelections from "@/components/process-lahan/items-selection";
import type { CardGeneralProps } from "@/components/process-lahan/item-card";

import Payment from "@/components/process-lahan/payments";

import petani1 from "public/images/dummyphoto/petani1.png";
import petani2 from "public/images/dummyphoto/petani2.png";
import petani3 from "public/images/dummyphoto/petani3.png";
import petani4 from "public/images/dummyphoto/petani4.png";
import petani5 from "public/images/dummyphoto/petani5.png";

import lahan1 from "public/images/dummyphoto/lahan1.png";
import lahan2 from "public/images/dummyphoto/lahan2.png";
import lahan3 from "public/images/dummyphoto/lahan3.png";
import lahan4 from "public/images/dummyphoto/lahan4.png";
import lahan5 from "public/images/dummyphoto/lahan5.png";

import bibit1 from "public/images/dummyphoto/bibit1.png";
import bibit2 from "public/images/dummyphoto/bibit2.png";
import bibit3 from "public/images/dummyphoto/bibit3.png";
import bibit4 from "public/images/dummyphoto/bibit4.png";
import bibit5 from "public/images/dummyphoto/bibit5.png";

import perawatan1 from "public/images/dummyphoto/perawatan1.png";
import perawatan2 from "public/images/dummyphoto/perawatan2.png";
import perawatan3 from "public/images/dummyphoto/perawatan3.png";
import { useRouter, useSearchParams } from "next/navigation";

import DetailLahan from "@/components/process-lahan/detail-lahan";

import { StaticImageTranslator } from "@/utilities/static-image-translator";
import { useState } from "react";

import DetailPekerja from "@/components/process-lahan/detail-pekerja";
import DetailBibit from "@/components/process-lahan/detail-bibit";
import DetailPerawatan from "@/components/process-lahan/detail-perawatan";
import DetailALLLahan from "@/components/process-lahan/detail-all";
interface CardsData {
  [key: number]: CardGeneralProps[];
}

const cardsData: CardsData = {
  1: [
    {
      name: "Lahan Empang",
      price: 10000,
      location: "Jatinangor",
      image: StaticImageTranslator(lahan1),
    },
    {
      name: "Kandang Ayam Luas",
      price: 15000,
      location: "Kelurahan Ciseke",
      image: StaticImageTranslator(lahan2),
    },
    {
      name: "Lahan Tani dan Kebun Ciparay",
      price: 20000,
      location: "Jl. Raya Ciparay",
      image: StaticImageTranslator(lahan3),
    },
    {
      name: "Kandang Sapi Elit",
      price: 25000,
      location: "Jl. Tamansari",
      image: StaticImageTranslator(lahan4),
    },
    {
      name: "Empang Lele 1 Hektar",
      price: 30000,
      location: "Bojongsoang",
      image: StaticImageTranslator(lahan5),
    },
  ],
  2: [
    {
      name: "Wahyu Hidayat",
      price: 12000,
      location: "Kelurahan Rancaekek",
      image: StaticImageTranslator(petani1),
    },
    {
      name: "Mulyanto P",
      price: 18000,
      location: "Kelurahan Cimahi",
      image: StaticImageTranslator(petani2),
    },
    {
      name: "Heri Supriyadi",
      price: 22000,
      location: "Ciparay Barat",
      image: StaticImageTranslator(petani3),
    },
    {
      name: "Davis Abadi",
      price: 27000,
      location: "Cibiru Tengah",
      image: StaticImageTranslator(petani4),
    },
    {
      name: "Joko Agung",
      price: 32000,
      location: "Cibiru Wetan",
      image: StaticImageTranslator(petani5),
    },
  ],
  3: [
    {
      name: "Bibit Ayam Petelur",
      price: 13000,
      location: "Jatinangor",
      image: StaticImageTranslator(bibit1),
    },
    {
      name: "Ikan Gurame Bibit",
      price: 19000,
      location: "Desa Ciparay",
      image: StaticImageTranslator(bibit2),
    },
    {
      name: "Bibit Kelapa Subur",
      price: 23000,
      location: "Bojongsoang",
      image: StaticImageTranslator(bibit3),
    },
    {
      name: "Bibit Pohon Pepaya",
      price: 28000,
      location: "Rancaekek Timur",
      image: StaticImageTranslator(bibit4),
    },
    {
      name: "Bibit Ikan Mas",
      price: 33000,
      location: "Kopo",
      image: StaticImageTranslator(bibit5),
    },
  ],
  4: [
    {
      name: "Card Alpha",
      price: 14000,
      location: "Padalarang Timur",
      image: StaticImageTranslator(perawatan1),
    },
    {
      name: "Card Beta",
      price: 20000,
      location: "Kelurahan Sumedang",
      image: StaticImageTranslator(perawatan2),
    },
    {
      name: "Card Gamma",
      price: 24000,
      location: "Ciseke Tengah",
      image: StaticImageTranslator(perawatan3),
    },
  ],
  // Orbs 5-8 can be added later
};

const LahanDummy = {
  luas: 100,
  price: 5000000,
  skills: [
    "Tani",
    "Kebun",
    "Kebun Stroberi",
    "Ladang Gandum",
    "Ladang Padi",
    "Ladang Kentang",
    "Kebun Apel",
  ],
  description:
    "Akses jalan menuju lahan sangat baik, memungkinkan distribusi hasil panen dengan mudah. Lingkungan sekitar yang asri dan jauh dari keramaian kota membuat lahan ini ideal untuk usaha pertanian yang berkelanjutan.",
  image: StaticImageTranslator(lahan1),
  name: "Lahan Anggur",
  location: "Kecamatan Padalarang, Kabupaten Bandung Barat, Jawa Barat",
};

const PekerjaDummy = {
  name: "Sumarno",
  image: StaticImageTranslator(petani1),
  price: 3000000,
  skills: ["Tani", "Berkebun"],
  description:
    "Berpengalaman dan telah berkecimpung di bidang pertanian selama 20 tahun. Memiliki keahlian dalam menanam sayur, padi, dan hortikultura, dikenal dengan teknik pemupukan yang efisien dan pengendalian hama yang ramah lingkungan. Memiliki kemampuan mengolah tanah yang optimal untuk berbagai jenis tanaman.",
  kerjaan: [
    "Menanam dan merawat tanaman",
    "Memanen hasil tani",
    "Mengolah hasil panen",
    "Mengolah tanah",
  ],
  rating: 4,
};

const BibitDummy = {
  luas: 100,
  price: 5000000,
  skills: [
    "Tani",
    "Kebun",
    "Kebun Stroberi",
    "Ladang Gandum",
    "Ladang Padi",
    "Ladang Kentang",
    "Kebun Apel",
  ],
  description:
    "Akses jalan menuju lahan sangat baik, memungkinkan distribusi hasil panen dengan mudah. Lingkungan sekitar yang asri dan jauh dari keramaian kota membuat lahan ini ideal untuk usaha pertanian yang berkelanjutan.",
  image: StaticImageTranslator(bibit1),
  name: "Biji Durian",
  location: "Kecamatan Padalarang, Kabupaten Bandung Barat, Jawa Barat",
};

const PerawatanDummy = {
  luas: 100,
  price: 5000000,
  skills: [
    "Tani",
    "Kebun",
    "Kebun Stroberi",
    "Ladang Gandum",
    "Ladang Padi",
    "Ladang Kentang",
    "Kebun Apel",
  ],
  description:
    "Akses jalan menuju lahan sangat baik, memungkinkan distribusi hasil panen dengan mudah. Lingkungan sekitar yang asri dan jauh dari keramaian kota membuat lahan ini ideal untuk usaha pertanian yang berkelanjutan.",
  image: StaticImageTranslator(perawatan1),
  name: "Pupuk Sapit",
  location: "Kecamatan Padalarang, Kabupaten Bandung Barat, Jawa Barat",
};

const ProcessLahan = () => {
  const searchParams = useSearchParams();
  const currentNum = Number(searchParams.get("page")) || 1;
  const router = useRouter();
  const currentData: CardGeneralProps[] = cardsData[currentNum] ?? [];

  const [isLahan, setLahan] = useState<boolean>(false);
  const [isPekerja, setPekerja] = useState<boolean>(false);
  const [isBibit, setBibit] = useState<boolean>(false);
  const [isPerawatan, setPerawatan] = useState<boolean>(false);

  const handleLahanChange = (state: boolean) => {
    console.log("TEST");
    setLahan(state);
  };

  const handlePekerjaChange = (state: boolean) => {
    setPekerja(state);
  };

  const handleBibitChange = (state: boolean) => {
    setBibit(state);
  };

  const handlePerawatanChange = (state: boolean) => {
    setPerawatan(state);
  };

  const NextPage = () => {
    const nextNum = Math.min(currentNum + 1, Object.keys(cardsData).length);
    router.push(`/process-lahan?page=${nextNum}`);
  };

  const getOpenDetailHandler = () => {
    switch (currentNum) {
      case 1:
        return handleLahanChange;
      case 2:
        return handlePekerjaChange;
      case 3:
        return handleBibitChange;
      case 4:
        return handlePerawatanChange;
      default:
        return () => {}; // Default case to prevent errors
    }
  };

  return (
    <div className="relative mb-10 flex flex-col gap-y-10">
      <Navbar />
      {isLahan && (
        <DetailLahan
          setVisible={handleLahanChange}
          luas={LahanDummy.luas}
          price={LahanDummy.price}
          skills={LahanDummy.skills}
          description={LahanDummy.description}
          location={LahanDummy.location}
          image={LahanDummy.image}
          name={LahanDummy.name}
        />
      )}
      {isPekerja && (
        <DetailPekerja
          setVisible={handlePekerjaChange}
          name={PekerjaDummy.name}
          image={PekerjaDummy.image}
          price={PekerjaDummy.price}
          skills={PekerjaDummy.skills}
          description={PekerjaDummy.description}
          location={""}
          rating={PekerjaDummy.rating}
          kerjaan={PekerjaDummy.kerjaan}
        ></DetailPekerja>
      )}

      {isBibit && (
        <DetailBibit
          setVisible={handleBibitChange}
          luas={BibitDummy.luas}
          price={BibitDummy.price}
          skills={BibitDummy.skills}
          description={BibitDummy.description}
          location={BibitDummy.location}
          image={BibitDummy.image}
          name={BibitDummy.name}
        />
      )}
      {isPerawatan && (
        <DetailPerawatan
          setVisible={handlePerawatanChange}
          luas={PerawatanDummy.luas}
          price={PerawatanDummy.price}
          skills={PerawatanDummy.skills}
          description={PerawatanDummy.description}
          location={PerawatanDummy.location}
          image={PerawatanDummy.image}
          name={PerawatanDummy.name}
        />
      )}
      <div className="px-7 pt-8">
        <OrderPath />
        {/* Conditional Rendering */}
        {currentNum >= 1 && currentNum <= 4 && (
          <ItemSelections
            opendetail={getOpenDetailHandler()}
            nextpage={NextPage}
            title="Pilih Lahan"
            data={currentData}
          />
        )}
        {currentNum === 5 && <DetailALLLahan></DetailALLLahan>}
        {currentNum === 6 && <Payment />}
      </div>
    </div>
  );
};

export default ProcessLahan;
