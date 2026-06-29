"use client";

import Image from "next/image";

export default function ScrollArrow() {
  return (
    <div
      onClick={() => {
        (window as any).goToSection?.(1);
      }}
      className="
        hidden desktop:block
        bottom-[0px]
        left-1/2
        -translate-x-1/2
        w-[30px]
        h-[30px]
        z-[999]
        animate-bounce
        cursor-pointer
      "
    >
      <Image
        src="/images/inner-down-arrow.png"
        alt="Scroll Down"
        width={30}
        height={30}
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}