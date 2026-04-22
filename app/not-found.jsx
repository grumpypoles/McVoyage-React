import Link from "next/link";
import { IoMapOutline } from "react-icons/io5";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-8 py-24 text-center">
      <IoMapOutline className="w-16 h-16 mb-6 text-green-700 opacity-60" />

      <p className="mb-2 font-bold leading-none text-gray-200 text-8xl">404</p>

      <h1 className="mb-4 text-2xl font-bold text-primary-800">
        We could&apos;t find that trail
      </h1>

      <p className="max-w-sm mb-10 text-primary-600">
        The page you&apos;re looking for doesn&apos;t exist — it may have been moved or
        the link might be wrong.
      </p>

      <Link
        href="/"
        className="inline-block px-8 py-3 bg-green-700 text-white text-sm font-semibold rounded-full
                   hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
      >
        Back to home
      </Link>
    </div>
  );
}
