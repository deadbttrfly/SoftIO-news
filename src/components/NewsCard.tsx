import Link from "next/link";
import type { News } from "@/data/news";

interface NewsCardProps { 
  article: News; 
}

export default function NewsCard({
  article,
}: NewsCardProps) {
  return (
    <Link href={`/news/${article.slug}`}>
      <div className="border rounded-xl p-5 shadow-sm hover:shadow-lg transition">

        <img
          src={article.image}
          alt={article.title}
          width="600"
          height="400"
          className="w-full h-52 object-cover rounded-lg"
        />

        <h2 className="text-2xl font-bold mt-4">
          {article.title}
        </h2>

        <p className="text-blue-500">
          {article.category}
        </p>

        <p className="mt-2 text-gray-600">
          {article.excerpt}
        </p>

      </div>
    </Link>
  );
}