"use client"

import React, { useState } from 'react';
import ArticleCarousel from '@/components/ArticleCarousel';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const articlesDummy = [
    {
        id: 1,
        title: 'Permakultur, Metode Bercocok Tanam yang "Sustainable"',
        image: '/article/permakultur.jpg',
        content: 'Permakultur adalah metode bercocok tanam yang berkelanjutan dengan prinsip-prinsip ekologi dan desain yang meniru pola dan hubungan yang ditemukan di alam. Metode ini bertujuan untuk menciptakan sistem yang produktif, efisien, dan ramah lingkungan. Permakultur dapat diterapkan di berbagai skala, mulai dari kebun rumah hingga pertanian komersial.',
        category: 'pertanian',
    },
    {
        id: 2,
        title: 'Urban Farming: Solusi Berkebun di Lahan Sempit',
        image: '/article/urban-farming.jpg',
        content: 'Urban farming atau pertanian perkotaan adalah praktik menanam tanaman dan memelihara hewan di dalam dan sekitar kota. Ini adalah solusi untuk berkebun di lahan sempit dan dapat membantu meningkatkan ketahanan pangan serta mengurangi jejak karbon. Urban farming juga dapat meningkatkan kualitas udara dan lingkungan di kota.',
        category: 'peternakan',
    },
    {
        id: 3,
        title: 'Hidroponik: Bertani Tanpa Tanah',
        image: '/article/buah.jpg',
        content: 'Hidroponik adalah metode bercocok tanam tanpa menggunakan tanah, melainkan menggunakan larutan nutrisi mineral dalam air. Metode ini memungkinkan tanaman tumbuh lebih cepat dan lebih efisien, serta dapat dilakukan di berbagai tempat, termasuk di dalam ruangan. Hidroponik juga dapat menghasilkan hasil panen yang lebih besar dan lebih sehat.',
        category: 'perkebunan',
    },
    // Add more articles with different categories here
];
const Article = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    const filteredArticles = selectedCategory
        ? articlesDummy.filter(article => article.category === selectedCategory)
        : articlesDummy;

    return (
        <div>
            <Navbar />
            <main className="p-4 flex flex-col gap-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Halo, Davis!</h2>
                    <div className="mb-4">
                        <input type="text" placeholder="Search..." className="w-full p-2 border rounded-[20px]" />
                    </div>
                    <ArticleCarousel />
                </section>
                <section>
                    <h3 className="text-xl font-bold mb-2 mx-1">Kategori</h3>
                    <div className="flex flex-wrap gap-y-4 space-x-4 mb-4">
                        <button
                            className={`bg-[#dbefb2] px-4 py-2 rounded-full ${selectedCategory === 'pertanian' ? 'bg-[#98c379]' : ''}`}
                            onClick={() => handleCategoryClick('pertanian')}
                        >
                            Pertanian
                        </button>
                        <button
                            className={`bg-[#dbefb2] px-4 py-2 rounded-full ${selectedCategory === 'peternakan' ? 'bg-[#98c379]' : ''}`}
                            onClick={() => handleCategoryClick('peternakan')}
                        >
                            Peternakan
                        </button>
                        <button
                            className={`bg-[#dbefb2] px-4 py-2 rounded-full ${selectedCategory === 'perkebunan' ? 'bg-[#98c379]' : ''}`}
                            onClick={() => handleCategoryClick('perkebunan')}
                        >
                            Perkebunan
                        </button>
                        <button
                            className={`bg-[#dbefb2] px-4 py-2 rounded-full ${selectedCategory === 'perikanan' ? 'bg-[#98c379]' : ''}`}
                            onClick={() => handleCategoryClick('perikanan')}
                        >
                            Perikanan
                        </button>
                    </div>
                </section>
                <section>
                    <div className="flex flex-col mb-4">
                        <h3 className="text-xl font-bold mb-2 mx-1">Rekomendasi</h3>
                        <div className='flex flex-col w-full gap-4'>
                            {filteredArticles.map((article) => (
                                <Link href={`/article/${article.id}`} key={article.id} className="min-w-full flex-shrink-0 relative rounded-[20px]">
                                    <div className="relative w-full h-24 rounded-[20px]">
                                        <img src={article.image} alt={article.title} className="w-full h-24 object-cover rounded-[20px]" />
                                        <div className="absolute w-full inset-0 bg-gradient-to-r from-black to-transparent rounded-[20px]"></div>
                                    </div>
                                    <h3 className="absolute bottom-7 left-2 text-white text-md font-semibold p-2 rounded-b-[20px]">{article.title}</h3>
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
