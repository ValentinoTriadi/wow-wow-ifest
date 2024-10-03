"use client"

import KebunBibitCard from '@/components/KebunBibitCard';
import KebunLahanCard from '@/components/KebunLahanCard';
import KebunPekerjaCard from '@/components/KebunPekerjaCard';
import Navbar from '@/components/Navbar';
import TaniBibitCard from '@/components/TaniBibitCard';
import TaniLahanCard from '@/components/TaniLahanCard';
import TaniPekerjaCard from '@/components/TaniPekerjaCard';
import React, { useState } from 'react';

const LayananKebun = () => {
  // Set the default selected category to 'Lahan'
  const [selectedCategory, setSelectedCategory] = useState<string>('Lahan');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="p-4 flex flex-col gap-4">
        <div className="mb-4">
          <input type="text" placeholder="Search..." className="w-full p-2 border rounded-full" />
        </div>
        <section>
          <div className="flex space-x-8 mx-1 mb-4">
            <button
              onClick={() => handleCategoryClick('Lahan')}
              className={`hover:underline underline-offset-8 transition duration-300 ${selectedCategory === 'Lahan' ? 'underline' : ''}`}
            >
              Lahan
            </button>
            <button
              onClick={() => handleCategoryClick('Bibit')}
              className={`hover:underline underline-offset-8 transition duration-300 ${selectedCategory === 'Bibit' ? 'underline' : ''}`}
            >
              Bibit
            </button>
            <button
              onClick={() => handleCategoryClick('Pekerja')}
              className={`hover:underline underline-offset-8 transition duration-300 ${selectedCategory === 'Pekerja' ? 'underline' : ''}`}
            >
              Pekerja
            </button>
          </div>
        </section>
        <section>
          {selectedCategory === 'Lahan' && (
            <div>
              <KebunLahanCard />
            </div>
          )}
          {selectedCategory === 'Bibit' && (
            <div>
              <KebunBibitCard />
            </div>
          )}
          {selectedCategory === 'Pekerja' && (
            <div>
              <KebunPekerjaCard />
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default LayananKebun;