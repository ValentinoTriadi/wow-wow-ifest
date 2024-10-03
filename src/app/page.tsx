"use client"

import Head from "next/head";
import ArticleCarousel from "@/components/home/ArticleCarousel";
import MyHarvest from "@/components/home/MyHarvest";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

export default async function Home() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };
  
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
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>TumbuhIn</title>
      </Head>
      <Navbar />
      <main className="flex flex-col gap-8 p-4">
        <section>
          <h2 className="mx-1 text-2xl font-bold">Halo, Davis!</h2>
          <ArticleCarousel />
        </section>
        <section>
          <h3 className="text-xl font-bold mb-2 mx-1">Kategori</h3>
          <div className="flex space-x-4 mb-4">
          <button
            onClick={() => handleNavigation('/layananTani')}
            className="bg-[#dbefb2] px-4 py-2 rounded-full"
          >
            Tani
          </button>
          <button
            onClick={() => handleNavigation('/layananTernak')}
            className="bg-[#dbefb2] px-4 py-2 rounded-full"
          >
            Ternak
          </button>
          <button
            onClick={() => handleNavigation('/layananKebun')}
            className="bg-[#dbefb2] px-4 py-2 rounded-full"
          >
            Kebun
          </button>
          </div>
        </section>
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="mx-1 text-xl font-bold">Panen saya</h3>
          </div>
          <MyHarvest />
        </section>
      </main>
    </div>
  );
}
