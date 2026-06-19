"use client";

import { useState } from "react";
import { news } from "@/data/news";
import Navbar from "@/components/Navbar";
import NewsCard from "@/components/NewsCard";

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
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <main className="max-w-5xl mx-auto p-6">

        <div className="grid gap-4">
          {filteredNews.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
            />
          ))}
        </div>

      </main>
    </>
  );
}