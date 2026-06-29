"use client";

export default function ScrollArrow() {
  return (
    <div
      onClick={() =>
        document.getElementById("next")?.scrollIntoView({ behavior: "smooth" })
      }
      className="hidden desktop:block absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 w-[30px] h-[30px] z-[999] animate-bounce cursor-pointer"
    >
      <img
        src="/images/inner-down-arrow.png"
        alt="Scroll Down"
        width={30}
        height={30}
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}
