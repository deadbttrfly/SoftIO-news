import Link from "next/link";
import type { News } from "@/data/news";

interface NewsCardProps {
  article: News;
}

export default function NewsCard({
  article,
}: NewsCardProps) {
  return (
    <div className="border rounded-xl p-5 shadow-sm">
      <h2 className="text-2xl font-bold">
        {article.title}
      </h2>

      <p className="mt-2 text-gray-600">
        {article.excerpt}
      </p>

      <Link
        href={`/news/${article.slug}`}
        className="mt-4 inline-block"
      >
        Baca Selengkapnya →
      </Link>
    </div>
  );
}