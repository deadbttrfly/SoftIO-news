"use client";

import { useState } from "react";
import { news } from "@/data/news";
import Navbar from "@/components/Navbar";
import NewsCard from "@/components/NewsCard";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredNews = news.filter((article) => {
    const matchesSearch = article.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || article.category === category;

    return matchesSearch && matchesCategory;
  });

  // Ambil 5 berita terbaru untuk dimasukkan ke breaking news marquee
  const breakingArticles = news.slice(0, 5);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      {/* Navbar */}
      <Navbar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      {/* Breaking News Marquee Section */}
      <div className="max-w-7xl mx-auto px-4 mt-2">
        <div className="flex items-center bg-white/5 border border-white/10 rounded-lg overflow-hidden backdrop-blur-md shadow-lg h-11">
          {/* Label BREAKING - Menggunakan w-24 (lebar pasti) agar presisi */}
          <div className="bg-red-600 text-white font-extrabold text-xs tracking-wider px-4 flex items-center justify-center h-full animate-pulse whitespace-nowrap shadow-md z-10">
            BREAKING NEWS
          </div>

          {/* Area Teks Berjalan */}
          <div className="flex-1 overflow-hidden flex items-center text-sm font-medium text-gray-200">
            <marquee
              behavior="scroll"
              direction="left"
              scrollamount="6"
              className="w-full cursor-pointer"
              onMouseOver={(e) => e.currentTarget.stop()}
              onMouseOut={(e) => e.currentTarget.start()}
            >
              {breakingArticles.map((article, index) => (
                <span key={article.id} className="mx-6 hover:text-red-400 transition-colors">
                  <span className="text-red-500 mr-2">✦</span>
                  {article.title}
                  {index !== breakingArticles.length - 1 && <span className="ml-6 text-white/20">|</span>}
                </span>
              ))}
            </marquee>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-6">
        {filteredNews.length > 0 ? (
          <div className="grid gap-4">
            {filteredNews.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            Tidak ada berita ditemukan.
          </div>
        )}
      </main>
    </div>
  );
}