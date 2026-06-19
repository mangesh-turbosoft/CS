"use client";

import Image from "next/image";
import Link from "next/link";

export default function Firstsec() {
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();

    document.getElementById("next")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#f2f2f2] pb-[100px]">
      <div className="max-w-[1600px] mx-auto px-5 md:px-8 xl:px-[50px] w-full pt-[80px] md:pt-[100px]">
        <h1
          data-aos="fade-up"
          className="text-[#f04c3e] font-semibold leading-none m-0 mb-[30px]"
          style={{
            fontSize: "clamp(46px, 14vw, 228px)",
            fontFamily: "'Google Sans Flex', sans-serif",
          }}
        >
          Web <br />
          Engineering
        </h1>

        <p
          data-aos="fade-up"
          className="text-[#7b7b7b] font-medium mt-5"
          style={{
            fontSize: "clamp(22px, 4vw, 62px)",
            lineHeight: 1.15,
            fontFamily: "'Google Sans Flex', sans-serif",
          }}
        >
          Premium websites in Headless, HubSpot and WordPress.
        </p>
      </div>

      {/* Down Arrow */}
      <Link
        href="#next"
        className="
    absolute
    bottom-[25px]
    md:bottom-[40px]
    left-1/2
    -translate-x-1/2
    w-[24px]
    md:w-[30px]
    h-[24px]
    md:h-[30px]
    z-[999]
    animate-bounce
  "
      >
        <Image
          src="/images/inner-down-arrow.png"
          alt="Scroll Down"
          width={30}
          height={30}
          className="w-full h-full object-contain"
        />
      </Link>
    </section>
  );
}
