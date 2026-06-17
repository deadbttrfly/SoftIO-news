import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b p-4">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-bold"
        >
          SoftIO News
        </Link>
      </div>
    </nav>
  );
}