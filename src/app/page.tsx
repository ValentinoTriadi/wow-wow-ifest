import Head from "next/head";
import ArticleCarousel from "@/components/home/ArticleCarousel";
import MyHarvest from "@/components/home/MyHarvest";
import Navbar from "@/components/Navbar";

export default async function Home() {
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
          <h3 className="mx-1 mb-2 text-xl font-bold">Kategori</h3>
          <div className="mb-4 flex space-x-4">
            <button className="rounded-full bg-[#dbefb2] px-4 py-2">
              Tani
            </button>
            <button className="rounded-full bg-[#dbefb2] px-4 py-2">
              Ternak
            </button>
            <button className="rounded-full bg-[#dbefb2] px-4 py-2">
              Kebun
            </button>
          </div>
        </section>
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="mx-1 text-xl font-bold">Panen saya</h3>
            <button className="text-[#77ab24] underline underline-offset-2">
              Lihat semua
            </button>
          </div>
          <MyHarvest />
        </section>
      </main>
    </div>
  );
}
