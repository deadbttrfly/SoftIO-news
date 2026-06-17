import { news } from "@/data/news";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function NewsDetail({
  params,
}: Props) {
  const { slug } = await params;

  const article = news.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-5xl font-bold">
        {article.title}
      </h1>

      <p className="mt-6 text-lg">
        {article.content}
      </p>
    </main>
  );
}