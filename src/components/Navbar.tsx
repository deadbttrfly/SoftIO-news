"use client";

import Link from "next/link";

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

  return (
    <nav className="border-b p-4 mb-6">
      <div className="max-w-5xl mx-auto">

        <Link
          href="/"
          className="text-3xl font-bold block mb-4"
        >
          SoftIO News
        </Link>

        <input
          type="text"
          placeholder="Cari berita..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full border rounded-lg p-3 mb-4"
        />

        <div className="flex gap-3 flex-wrap">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() =>
                setCategory(item)
              }
              className={`px-4 py-2 rounded-lg ${
                category === item
                  ? "bg-white text-black"
                  : "bg-gray-800 text-white"
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