"use client";

import React from "react";
import ScrollArrow from "./ScrollArrow";

interface Props {
  title: React.ReactNode;
  subtitle: string;
}

export default function PageHero({ title, subtitle }: Props) {
  return (
    <section className="panel relative max-w-[1600px] mx-auto flex flex-col justify-center bg-white px-4 sm:px-6 md:px-8 lg:px-[50px] pt-[120px] pb-[60px] sm:pb-[80px] desktop:min-h-screen desktop:pt-[80px]">
      <h1
        className="hero-title text-[#f04c3e] font-semibold leading-[1.1] mt-0 mb-0"
        style={{
          letterSpacing: "-0.04em",
          fontSize:
            "clamp(42px, calc(42px + (228 - 42) * ((100vw - 320px) / (1600 - 320))), 228px)",
        }}
      >
        {title}
      </h1>
      <p
        className="hero-subtitle google-sans text-[#7b7b7b] font-medium mt-4 sm:mt-5 lg:mt-8 leading-[1.2]"
        style={{
          fontSize:
            "clamp(26px, calc(26px + (62 - 26) * ((100vw - 320px) / (1600 - 320))), 62px)",
        }}
      >
        {subtitle}
      </p>
      <ScrollArrow />
    </section>
  );
}
