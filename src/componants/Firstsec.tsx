"use client";

import Image from "next/image";
import Link from "next/link";

export default function Firstsec() {
  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="max-w-[1600px] mx-auto px-5 md:px-8 xl:px-[50px] w-full pt-[0px]">
        <h1
          data-aos="fade-up"
          className="google-sans text-[#f04c3e] m-0 mb-[20px]"
          style={{
            fontSize: "clamp(46px, 13vw, 228px)",
            lineHeight: 1.1,
            fontWeight: 600,
            marginBottom: "31px",
            letterSpacing: "-0.04em",
          }}
        >
          Web <br />
          Engineering
        </h1>

        <p
          data-aos="fade-up"
          className="google-sans text-[#7b7b7b] font-medium m-0"
          style={{
            fontSize: "clamp(20px, 3.2vw, 62px)",
            lineHeight: 1.2,
          }}
        >
          Premium websites in Headless, HubSpot and WordPress.
        </p>
      </div>

      <Link
        href="#next"
        className="absolute bottom-[40px] left-1/2 -translate-x-1/2 w-[24px] md:w-[28px] h-[24px] md:h-[28px] z-[999] animate-bounce"
      >
        <Image
          src="/images/inner-down-arrow.png"
          alt="Scroll Down"
          width={28}
          height={28}
          className="w-full h-full object-contain"
        />
      </Link>
    </section>
  );
}
