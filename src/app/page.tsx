import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { getServerAuthSession } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import Head from "next/head";
import Image from "next/image";
import ArticleCarousel from "@/components/ArticleCarousel";
import MyHarvest from "@/components/MyHarvest";
import Navbar from "@/components/Navbar";



export default async function Home() {

  const dummyArticle = [
    {
      id: "1",
      name: "Speaker 1",
      image: {
        url: "/dummyphoto.png",
      },
    },
    {
      id: "2",
      name: "Speaker 2",
      image: {
        url: "/dummyphoto.png",
      },
    },
    {
      id: "3",
      name: "Speaker 3",
      image: {
        url: "/dummyphoto.png",
      },
    },
  ];


  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>TumbuhIn</title>
      </Head>
      <Navbar />
      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4">Halo, Davis!</h2>
        <div className="mb-4">
          <input type="text" placeholder="Search..." className="w-full p-2 border rounded-full" />
        </div>
        <ArticleCarousel />
        <section>
          <h3 className="text-xl font-bold mb-2">Kategori</h3>
          <div className="flex space-x-4 mb-4">
            <button className="bg-[#dbefb2] px-4 py-2 rounded-full">Tani</button>
            <button className="bg-[#dbefb2] px-4 py-2 rounded-full">Ternak</button>
            <button className="bg-[#dbefb2] px-4 py-2 rounded-full">Kebun</button>
          </div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Panen saya</h3>
            <button className="text-green-600">Lihat semua</button>
          </div>
          <MyHarvest />
        </section>
      </main>
    </div>
  );
}
