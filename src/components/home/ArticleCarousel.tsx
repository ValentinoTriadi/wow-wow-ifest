"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const articles = [
  {
    id: 1,
    title: 'Permakultur, Metode Bercocok Tanam yang "Sustainable"',
    image: "/article/permakultur.jpg",
    content:
      "Permakultur adalah metode bercocok tanam yang berkelanjutan dengan prinsip-prinsip ekologi dan desain yang meniru pola dan hubungan yang ditemukan di alam. Metode ini bertujuan untuk menciptakan sistem yang produktif, efisien, dan ramah lingkungan. Permakultur dapat diterapkan di berbagai skala, mulai dari kebun rumah hingga pertanian komersial.",
  },
  {
    id: 2,
    title: "Urban Farming: Solusi Berkebun di Lahan Sempit",
    image: "/article/urban-farming.jpg",
    content:
      "Urban farming atau pertanian perkotaan adalah praktik menanam tanaman dan memelihara hewan di dalam dan sekitar kota. Ini adalah solusi untuk berkebun di lahan sempit dan dapat membantu meningkatkan ketahanan pangan serta mengurangi jejak karbon. Urban farming juga dapat meningkatkan kualitas udara dan lingkungan di kota.",
  },
  {
    id: 3,
    title: "Hidroponik: Bertani Tanpa Tanah",
    image: "/article/buah.jpg",
    content:
      "Hidroponik adalah metode bercocok tanam tanpa menggunakan tanah, melainkan menggunakan larutan nutrisi mineral dalam air. Metode ini memungkinkan tanaman tumbuh lebih cepat dan lebih efisien, serta dapat dilakukan di berbagai tempat, termasuk di dalam ruangan. Hidroponik juga dapat menghasilkan hasil panen yang lebih besar dan lebih sehat.",
  },
];

const ArticleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const delay = 3000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === articles.length - 1 ? 0 : prevIndex + 1,
        ),
      delay,
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  return (
    <div className="relative mt-7 w-full overflow-hidden rounded-[20px]">
      <div
        className="flex transition-transform duration-1000 ease-out"
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {articles.map((article, index) => (
          <div key={index} className="relative min-w-full flex-shrink-0">
            <Link href={`/article/${article.id}`}>
              <div className="h-48 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={100}
                  height={100}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent"></div>
              </div>
              <h3 className="text-md absolute bottom-7 left-2 break-words rounded-b-[20px] p-2 font-semibold text-white">
                {article.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 transform space-x-2">
        {articles.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full ${idx === currentIndex ? "bg-white" : "bg-gray-500"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleCarousel;
