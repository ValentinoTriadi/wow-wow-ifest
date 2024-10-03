"use client"
import Link from 'next/link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useRef, useState } from 'react'


export const articles = [
  {
    id: 1,
    title: 'Permakultur, Metode Bercocok Tanam yang "Sustainable"',
    image: '/article/permakultur.jpg',
    content: 'Permakultur adalah metode bercocok tanam yang berkelanjutan dengan prinsip-prinsip ekologi dan desain yang meniru pola dan hubungan yang ditemukan di alam. Metode ini bertujuan untuk menciptakan sistem yang produktif, efisien, dan ramah lingkungan. Permakultur dapat diterapkan di berbagai skala, mulai dari kebun rumah hingga pertanian komersial.'
  },
  {
    id: 2,
    title: 'Urban Farming: Solusi Berkebun di Lahan Sempit',
    image: '/article/urban-farming.jpg',
    content: 'Urban farming atau pertanian perkotaan adalah praktik menanam tanaman dan memelihara hewan di dalam dan sekitar kota. Ini adalah solusi untuk berkebun di lahan sempit dan dapat membantu meningkatkan ketahanan pangan serta mengurangi jejak karbon. Urban farming juga dapat meningkatkan kualitas udara dan lingkungan di kota.'
  },
  {
    id: 3,
    title: 'Hidroponik: Bertani Tanpa Tanah',
    image: '/article/buah.jpg',
    content: 'Hidroponik adalah metode bercocok tanam tanpa menggunakan tanah, melainkan menggunakan larutan nutrisi mineral dalam air. Metode ini memungkinkan tanaman tumbuh lebih cepat dan lebih efisien, serta dapat dilakukan di berbagai tempat, termasuk di dalam ruangan. Hidroponik juga dapat menghasilkan hasil panen yang lebih besar dan lebih sehat.'
  },
]

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
      () => setCurrentIndex((prevIndex) => (prevIndex === articles.length - 1 ? 0 : prevIndex + 1)),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, articles.length]);

  return (
    <div className="relative overflow-hidden w-full mt-7 rounded-[20px]">
      <div className='relative'>
        <div className="flex transition-transform ease-out duration-1000"
          style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        >
          
          {articles.map((article, index) => (
            <div key={index} className="min-w-full flex-shrink-0 relative">
              <Link href={`/article/${article.id}`}>
                <div className="relative w-full h-48">
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-transparent z-10"></div>
                  <h3 className="absolute bottom-7 left-2 text-white text-md font-semibold p-2 rounded-b-[20px] z-20">{article.title}</h3>
                </div>
              </Link>
            </div>
          ))}

        </div>
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {articles.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full ${idx === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};


export default ArticleCarousel