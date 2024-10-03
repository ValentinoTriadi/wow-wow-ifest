"use client";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { articles } from "@/lib/constant";

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
      <div className="relative">
        <div
          className="flex transition-transform duration-1000 ease-out"
          style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        >
          {articles.map((article, index) => (
            <div key={index} className="relative min-w-full flex-shrink-0">
              <Link href={`/article/${article.id}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={100}
                    height={100}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/55 to-transparent"></div>
                  <h3 className="text-md absolute bottom-7 left-2 z-20 rounded-b-[20px] p-2 font-semibold text-white">
                    {article.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
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
