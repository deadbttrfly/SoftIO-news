"use client";

import { useState } from "react";
import { news } from "@/data/news";
import NewsCard from "@/components/NewsCard";
import CategoryNavbar from "@/components/CategoryNavbar";

export default function HomePage() {
  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const filteredNews = news.filter(
    (article) => {
      const matchesSearch =
        article.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        category === "All" ||
        article.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    }
  );

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        SoftIO News
      </h1>

      <input
        type="text"
        placeholder="Cari berita..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full border p-3 rounded-lg mb-4"
      />

      <CategoryNavbar
  selectedCategory={category}
  setSelectedCategory={
    setCategory
  }
/>

      <div className="grid gap-4">
        {filteredNews.map((article) => (
          <NewsCard
            key={article.id}
            article={article}
          />
        ))}
      </div>
    </main>
  );
}