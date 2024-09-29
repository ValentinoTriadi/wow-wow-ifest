"use client"
import Link from 'next/link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const articles = [
  { id: 1, title: 'Permakultur, Metode Bercocok Tanam yang "Sustainable"', image: '/article/permakultur.jpg' },
  { id: 2, title: 'Urban Farming: Solusi Berkebun di Lahan Sempit', image: '/article/urban-farming.jpg' },
  { id: 3, title: 'Hidroponik: Bertani Tanpa Tanah', image: '/article/buah.jpg' },
]

const ArticleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <div className="mb-4">
      <Slider {...settings}>
        {articles.map((article) => (
          <div key={article.id} className="mb-4 relative">
            <Link href={`/article/${article.id}`}>
              <div className="relative">
                <div className="relative w-full h-48">
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-[20px]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent rounded-[20px]"></div>
                </div>
                <h3 className="absolute bottom-2 left-2 w-full text-white text-md font-semibold p-2 rounded-b-[20px]">{article.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ArticleCarousel