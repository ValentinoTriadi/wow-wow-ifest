"use client"

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

      <main className="p-4 flex flex-col gap-8">
        <section>
          <h2 className="text-2xl font-bold mx-1">Halo, Davis!</h2>
          <ArticleCarousel />
        </section>
        <section>
          <h3 className="text-xl font-bold mb-2 mx-1">Kategori</h3>
          <div className="flex space-x-4 mb-4">
            <button className="bg-[#dbefb2] px-4 py-2 rounded-full">Tani</button>
            <button className="bg-[#dbefb2] px-4 py-2 rounded-full">Ternak</button>
            <button className="bg-[#dbefb2] px-4 py-2 rounded-full">Kebun</button>
          </div>
        </section>
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold mx-1">Panen saya</h3>
            <button className="text-[#77ab24] underline underline-offset-2">Lihat semua</button>
          </div>
          <MyHarvest />
        </section>
      </main>
    </div>
  );
}
