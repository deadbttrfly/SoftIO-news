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

  const breakingArticles = news.slice(0, 5);

  const heroArticle = filteredNews[0];
  const sideArticles = filteredNews.slice(1, 4);

  return (
    <div className="min-h-screen text-white selection:bg-white/20">
      <Navbar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <div className="max-w-7xl mx-auto px-4 mt-4">
        <div className="flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md shadow-lg h-11">
          <div className="bg-red-600 text-white font-extrabold text-xs tracking-wider px-4 flex items-center justify-center h-full animate-pulse whitespace-nowrap shadow-md z-10">
            BREAKING NEWS
          </div>

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

      <main className="max-w-7xl mx-auto px-4 py-6">
        
        {filteredNews.length > 0 && !search && category === "All" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            
            {heroArticle && (
              <div className="lg:col-span-2 relative group overflow-hidden bg-white/5 border border-white/10 rounded-2xl shadow-md h-[450px] flex flex-col justify-end p-6 cursor-pointer">
                <img 
                  src={heroArticle.image || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800"} 
                  alt={heroArticle.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                
                <div className="relative z-20 flex flex-col gap-2">
                  <span className="bg-red-600 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md self-start">
                    {heroArticle.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black line-clamp-2 group-hover:text-red-400 transition-colors">
                    {heroArticle.title}
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base line-clamp-2">
                    {heroArticle.content}
                  </p>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-4 h-[450px] overflow-y-auto pr-1 custom-scrollbar">
              {sideArticles.map((article) => (
                <div 
                  key={article.id} 
                  className="bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-3 transition-all cursor-pointer group"
                >
                  <div className="flex flex-row gap-3 items-center">
                    <img 
                      src={article.image || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=150"} 
                      alt={article.title}
                      className="rounded-xl w-20 h-20 object-cover flex-shrink-0" 
                    />
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">
                        {article.category}
                      </span>
                      <h3 className="font-bold text-sm line-clamp-2 group-hover:text-red-400 transition-colors">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
              
              {sideArticles.length === 0 && (
                <div className="flex items-center justify-center h-full text-gray-500 text-sm border border-dashed border-white/10 rounded-2xl">
                  Tidak ada berita terpopuler lainnya
                </div>
              )}
            </div>
          </div>
        )}

        <div className="border-t border-white/10 pt-6">
          <h2 className="text-xl font-extrabold tracking-tight mb-6 flex items-center gap-2">
            <span className="w-2 h-5 bg-red-600 rounded-sm"></span>
            {search || category !== "All" ? "Hasil Pencarian" : "Semua Berita"}
          </h2>

          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500 border border-dashed border-white/10 rounded-2xl bg-white/5">
              Tidak ada berita ditemukan.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}