import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="text-[120px] md:text-[180px] font-bold text-[#f04c3e] float">
          404
        </h1>

        <h2 className="text-[28px] md:text-[40px] font-semibold text-black mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-4 max-w-[500px] mx-auto text-[18px]">
          Oops! This page seems to have gone missing.
          <br />
          Let's get you back on track.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 bg-[#f04c3e] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
}
