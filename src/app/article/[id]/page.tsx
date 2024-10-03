
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { articles } from "@/lib/constant";

const ArticlePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Find the article based on the ID
  const article = articles.find((article) => article.id === parseInt(id, 10));

  const router = useRouter();
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
      <section className="TitleArticle absolute left-0 top-0 mb-4 w-full overflow-hidden rounded-b-[50px]">
        <Image
          src={article.image}
          alt={article.title}
          width={100}
          height={100}
          className="h-64 w-full object-cover"
        />
        <div className="absolute inset-0 rounded-b-[50px] bg-gradient-to-t from-black to-transparent"></div>
        <h1 className="absolute bottom-6 left-8 text-xl font-semibold text-white">
          {article.title}
        </h1>
        <button
          onClick={() => {
            router.back();
          }}
          className="z-100 b-4 absolute left-6 top-8 flex items-center text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.5em"
            height="1em"
            viewBox="0 0 12 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z"
            />
          </svg>
          <span className="ml-2">Back</span>
        </button>
      </section>
      <section className="relative mt-64 rounded-b-lg bg-white p-6 shadow-md">
        <p className="leading-relaxed text-gray-800">{article.content}</p>
      </section>
    </main>
  );
};

export default ArticlePage;
