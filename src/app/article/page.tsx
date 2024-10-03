
"use client";


import React, { useState } from "react";
import ArticleCarousel from "@/components/ArticleCarousel";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

const articlesDummy = [
  {
    id: 1,
    title: 'Permakultur, Metode Bercocok Tanam yang "Sustainable"',
    image: "/article/permakultur.jpg",
    content:
      "Permakultur adalah metode bercocok tanam yang berkelanjutan dengan prinsip-prinsip ekologi dan desain yang meniru pola dan hubungan yang ditemukan di alam. Metode ini bertujuan untuk menciptakan sistem yang produktif, efisien, dan ramah lingkungan. Permakultur dapat diterapkan di berbagai skala, mulai dari kebun rumah hingga pertanian komersial.",
    category: "pertanian",
  },
  {
    id: 2,
    title: "Urban Farming: Solusi Berkebun di Lahan Sempit",
    image: "/article/urban-farming.jpg",
    content:
      "Urban farming atau pertanian perkotaan adalah praktik menanam tanaman dan memelihara hewan di dalam dan sekitar kota. Ini adalah solusi untuk berkebun di lahan sempit dan dapat membantu meningkatkan ketahanan pangan serta mengurangi jejak karbon. Urban farming juga dapat meningkatkan kualitas udara dan lingkungan di kota.",
    category: "peternakan",
  },
  {
    id: 3,
    title: "Hidroponik: Bertani Tanpa Tanah",
    image: "/article/buah.jpg",
    content:
      "Hidroponik adalah metode bercocok tanam tanpa menggunakan tanah, melainkan menggunakan larutan nutrisi mineral dalam air. Metode ini memungkinkan tanaman tumbuh lebih cepat dan lebih efisien, serta dapat dilakukan di berbagai tempat, termasuk di dalam ruangan. Hidroponik juga dapat menghasilkan hasil panen yang lebih besar dan lebih sehat.",
    category: "perkebunan",
  },
  // Add more articles with different categories here
];
const Article = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredArticles = selectedCategory
    ? articlesDummy.filter((article) => article.category === selectedCategory)
    : articlesDummy;

  return (
    <div>
      <Navbar />
      <main className="flex flex-col gap-8 p-4">
        <section>
          <h2 className="mb-4 text-2xl font-bold">Halo, Davis!</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-[20px] border p-2"
            />
          </div>
          <ArticleCarousel />
        </section>
        <section>
          <h3 className="mx-1 mb-2 text-xl font-bold">Kategori</h3>
          <div className="mb-4 flex flex-wrap gap-y-4 space-x-4">
            <button
              className={`rounded-full bg-[#dbefb2] px-4 py-2 ${selectedCategory === "pertanian" ? "bg-[#98c379]" : ""}`}
              onClick={() => handleCategoryClick("pertanian")}
            >
              Pertanian
            </button>
            <button
              className={`rounded-full bg-[#dbefb2] px-4 py-2 ${selectedCategory === "peternakan" ? "bg-[#98c379]" : ""}`}
              onClick={() => handleCategoryClick("peternakan")}
            >
              Peternakan
            </button>
            <button
              className={`rounded-full bg-[#dbefb2] px-4 py-2 ${selectedCategory === "perkebunan" ? "bg-[#98c379]" : ""}`}
              onClick={() => handleCategoryClick("perkebunan")}
            >
              Perkebunan
            </button>
            <button
              className={`rounded-full bg-[#dbefb2] px-4 py-2 ${selectedCategory === "perikanan" ? "bg-[#98c379]" : ""}`}
              onClick={() => handleCategoryClick("perikanan")}
            >
              Perikanan
            </button>
          </div>
        </section>
        <section>
          <div className="mb-4 flex flex-col">
            <h3 className="mx-1 mb-2 text-xl font-bold">Rekomendasi</h3>
            <div className="flex w-full flex-col gap-4">
              {filteredArticles.map((article) => (
                <Link
                  href={`/article/${article.id}`}
                  key={article.id}
                  className="relative min-w-full flex-shrink-0 rounded-[20px]"
                >
                  <div className="relative h-24 w-full rounded-[20px]">
                    <Image
                      width={100}
                      height={100}
                      src={article.image}
                      alt={article.title}
                      className="h-24 w-full rounded-[20px] object-cover"
                    />
                    <div className="absolute inset-0 w-full rounded-[20px] bg-gradient-to-r from-black to-transparent"></div>
                  </div>
                  <h3 className="text-md absolute bottom-7 left-2 rounded-b-[20px] p-2 font-semibold text-white">
                    {article.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Article;
