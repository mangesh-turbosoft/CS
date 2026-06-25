"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

export default function FullPageScroll() {
  useEffect(() => {
    gsap.registerPlugin(Observer);

    const sections = document.querySelectorAll(".panel");
    if (!sections.length) return;
    let current = 0;
    const getCurrentSection = () => {
      let activeIndex = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          activeIndex = index;
        }
      });

      return activeIndex;
    };
    let animating = false;

    const goToSection = (index: number) => {
      if (animating || index < 0 || index >= sections.length) return;

      animating = true;

      sections[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      current = index;

      setTimeout(() => {
        animating = false;
      }, 900);
    };

    setTimeout(() => {
  current = getCurrentSection();
  console.log("Initial section:", current);
}, 100);


    (window as any).goToSection = goToSection;

    const observer = Observer.create({
      target: window,
      type: "wheel,touch",

      onDown: () => {
        current = getCurrentSection();
        goToSection(current + 1);
      },

      onUp: () => {
        current = getCurrentSection();
        goToSection(current - 1);
      },

      wheelSpeed: 1,
      tolerance: 30,
      preventDefault: true,
    });

    return () => {
      observer.kill();
    };
  }, []);

  return null;
}
