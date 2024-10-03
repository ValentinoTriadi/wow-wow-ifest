"use client"

import React from 'react';
import { articles } from '../../../components/ArticleCarousel'; // Adjust the import path as needed
import Link from 'next/link';

const ArticlePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  

  // Find the article based on the ID
  const article = articles.find(article => article.id === parseInt(id, 10));

  // Handle case where article is not found
  if (!article) {
    return (
      <main>
        <h1>Article not found</h1>
      </main>
    );
  }

  // Return the article content
  return (
    <main className="container mx-auto p-4">
      <section className="TitleArticle absolute w-full top-0 left-0 overflow-hidden rounded-b-[50px] mb-4">
        <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded-t-lg" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-b-[50px]"></div>
        <h1 className="absolute bottom-6 left-8 text-white text-xl font-semibold">{article.title}</h1>
        <Link href="/" passHref className="z-100 absolute top-8 left-6 flex items-center text-white b-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="0.5em" height="1em" viewBox="0 0 12 24">
              <path fill="currentColor" fillRule="evenodd" d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z"/>
            </svg>
            <span className="ml-2">Back</span>
        </Link>
      </section>
      {/* <section className="relative bg-white p-6 rounded-b-lg shadow-md mt-4">
        <p className="text-gray-800 leading-relaxed">
          {article.content}
        </p>
      </section> */}
    </main>
  );
};

export default ArticlePage;

  
