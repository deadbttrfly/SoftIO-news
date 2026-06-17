export interface News {
  id: number;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
}

export const news: News[] = [
  {
  id: 1,
  title: "iPhone 20 Resmi Dirilis",
  slug: "iphone-20-resmi-dirilis",
  category: "Technology",
  excerpt: "Apple memperkenalkan iPhone terbaru.",
  content: "..."
},

{
  id: 2,
  title: "Indonesia Menang AFF",
  slug: "indonesia-menang-aff",
  category: "Sports",
  excerpt: "Timnas Indonesia menang.",
  content: "..."
},

{
  id: 3,
  title: "AI Mengubah Dunia Kerja",
  slug: "ai-mengubah-dunia-kerja",
  category: "Technology",
  excerpt: "AI semakin banyak digunakan.",
  content: "..."
}
];