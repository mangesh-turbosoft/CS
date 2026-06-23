"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Intro() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <section id="next">
        <div className="w-full">          
          <Image
            src="/images/cskills-map-tablet-new.png"
            alt="Creative Skills World Map"
            width={768}
            height={400}
            className="w-full h-auto block xl:hidden"
            priority
          />
          
          <Image
            src="/images/cskills-map-new.png"
            alt="Creative Skills World Map"
            width={1920}
            height={500}
            className="w-full h-auto hidden xl:block"
            priority
          />
        </div>

        <div
          className="relative w-full bg-cover bg-center bg-no-repeat h-[70vw] md:h-[350px] lg:h-[476px]"
          style={{ backgroundImage: "url('/images/video-cover.png')" }}
        >
          <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 allign-middle h-full flex">
            <button
              data-aos="fade-left"
              onClick={() => setIsOpen(true)}
              className="
      absolute top-1/2 !-translate-y-1/2
       max-md:top-auto max-md:bottom-14 max-md:!translate-y-0
      left-4 sm:left-6 md:left-10 lg:left-[50px]

      bg-[#f04c3e]
      text-white
      border-none
      cursor-pointer

      text-[14px]
      sm:text-[16px]
      md:text-[18px]
      lg:text-[22px]

      leading-[22px]
      sm:leading-[26px]
      md:leading-[30px]
      lg:leading-[34px]

      px-4
      sm:px-6
      md:px-8
      lg:px-[50px]

      py-2
      sm:py-3

      whitespace-normal
      sm:whitespace-nowrap

      max-w-[90%]
      sm:max-w-fit
    "
            >
              <strong>Click here</strong> to view our workplace video
            </button>
          </div>
        </div>
      </section>

      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/85 flex items-center justify-center px-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-[1200px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 bg-transparent border-none cursor-pointer"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <video
              className="w-full h-auto block rounded-none"
              controls
              autoPlay
              loop
            >
              <source src="/video/new-office.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        
      )}
    </>
  );
}
