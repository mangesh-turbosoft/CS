"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CaseStudies() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="w-full flex flex-col xl:flex-row" style={{ height: "100vh" }}>
      <div className="w-full xl:w-1/2 relative bg-black flex flex-col">
        <div className="relative flex-1 overflow-hidden">
          <video ref={videoRef} className="w-full h-full object-cover">
            <source
              src="/video/Rob-iflourish4.m4v"
              type="video/mp4"
            />
          </video>

          {!playing && <div className="absolute inset-0 bg-black/20" />}

          {!playing && (
            <button
              onClick={handlePlay}
              aria-label="Play video"
              className="absolute bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 bg-transparent border-none cursor-pointer p-0"
            >
              <Image
                src="/images/play-btn.png"
                alt="Play"
                width={56}
                height={56}
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
              />
            </button>
          )}
        </div>

        <div className="px-5 sm:px-6 md:px-8 py-5 md:py-6 bg-white">
          <p
            data-aos="fade-up"
            className="font-bold text-gray-500 text-[24px] sm:text-[28px] lg:text-[32px] leading-tight mb-2"
          >
            Real Stories, Real Impact – Hear from Our Clients
          </p>

          <p
            data-aos="fade-up"
            className="text-gray-500 text-[16px] sm:text-[20px] lg:text-[26px]"
            style={{
              lineHeight: "1.1",
              paddingBottom: "40px",
            }}
          >
            Hear directly from our clients as they share their experiences and
            the results they achieved working with us.
          </p>
        </div>
      </div>

      <div className="w-full xl:w-1/2 flex flex-col">
        <div className="flex flex-col xl:flex-row flex-1">
          <div className="w-full xl:w-1/2 bg-white flex items-center px-5 sm:px-6 lg:px-[35px] py-6 md:py-[16px]">
            <div>
              <span
                className="block font-bold text-[#f04c3e] text-[24px] sm:text-[28px] lg:text-[32px] leading-tight"
              >
                White-label Development
              </span>
              <p
                className="text-[#7b7b7b] text-[22px] lg:text-[26px] leading-relaxed mt-[4px]"
                style={{ lineHeight: "1.2" }}
              >
                Design agencies often face challenges scaling development
                capacity while maintaining quality and timelines. Our
                white-label web development service enables your team to stay
                focused on strategy, design, and client relationships while our
                experienced developers deliver reliable, high-quality builds
                behind the scenes.
              </p>
            </div>
          </div>

          <div
            className="w-full xl:w-1/2 relative overflow-hidden bg-cover bg-center min-h-[260px] xl:min-h-auto"
            style={{ backgroundImage: "url('/images/processbg.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <Link
              href="/process/"
              className="absolute inset-0 z-10 flex items-center justify-center no-underline"
            >
              <h2
                data-aos="zoom-in"
                className="figtree text-white text-center font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight"
              >
                The Process
              </h2>
            </Link>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row flex-1">
          <div className="w-full xl:w-1/2 relative bg-[#f04c3e] min-h-[220px] xl:min-h-auto">
            <Link
              href="/services/"
              className="absolute inset-0 flex items-center justify-center no-underline"
            >
              <h2
                data-aos="zoom-in"
                className="figtree text-white text-center font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight"
              >
                Our Services
              </h2>
            </Link>
          </div>

          <div
            className="w-full xl:w-1/2 relative overflow-hidden bg-cover bg-center min-h-[260px] xl:min-h-auto"
            style={{ backgroundImage: "url('/images/agenciesbg.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <Link
              href="/design-agencies/"
              className="absolute inset-0 z-10 flex items-center justify-center no-underline"
            >
              <h2  data-aos="zoom-in"
                className="figtree text-white text-center font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight"
              >
                Design Agencies
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
