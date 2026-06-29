"use client";

import { useState, useEffect } from "react";

interface NavbarProps {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
}

export default function Navbar({
  search,
  setSearch,
  category,
  setCategory,
}: NavbarProps) {
  const categories = [
    "All",
    "Politik",
    "Ekonomi",
    "Teknologi",
    "Olahraga",
    "Gaya Hidup",
    "Dunia",
    "Bisnis",
  ];

  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl backdrop-saturate-150 border-b border-white/10 bg-black/20 shadow-xl p-4 backdrop-filter">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">

        <div className="flex items-center justify-between gap-4">
          <div className="text-3xl flex flex-col font-bold tracking-tight">
            <span className="text-3xl font-bold tracking-tight">
              SoftIO News
            </span>
            <span className="text-sm font-normal text-gray-400 mt-0">
              {mounted ? formatDate(currentTime) : "Memuat tanggal..."}
            </span>
          </div>

          <div className="hidden md:block flex-1 max-w-md">
            <input
              type="text"
              placeholder="Cari berita..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-white/10 bg-white/5 rounded-lg p-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm"
            />
          </div>
        </div>

        <hr className="border-t border-white/10" />

        <div className="block md:hidden">
          <input
            type="text"
            placeholder="Cari berita..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-white/10 bg-white/5 rounded-lg p-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-all duration-200 ${category === item
                  ? "bg-white text-black font-medium shadow-md"
                  : "bg-white/10 text-white hover:bg-white/20"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
}   