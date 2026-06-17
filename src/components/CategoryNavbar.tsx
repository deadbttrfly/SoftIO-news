interface Props {
  selectedCategory: string;
  setSelectedCategory: (
    category: string
  ) => void;
}

export default function CategoryNavbar({
  selectedCategory,
  setSelectedCategory,
}: Props) {
  const categories = [
    "All",
    "Technology",
    "Sports",
  ];

  return (
    <div className="flex gap-3 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() =>
            setSelectedCategory(
              category
            )
          }
          className={`px-4 py-2 rounded-lg ${
            selectedCategory ===
            category
              ? "bg-black text-white"
              : "bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}