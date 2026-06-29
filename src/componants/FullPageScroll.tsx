"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

export default function FullPageScroll() {
  useEffect(() => {
    gsap.registerPlugin(Observer);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1200px)", () => {
      const sections = document.querySelectorAll(".panel");

      if (!sections.length) return;

      let current = 0;
      let animating = false;

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

      current = getCurrentSection();

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
  onPress: (self) => {
    const target = self.event?.target as HTMLElement;
    if (target?.closest("a, button, input, [role='button']")) {
      self.event?.stopPropagation();
    }
  },
});

      return () => {
        observer.kill();
      };
    });

    mm.add("(max-width: 1199px)", () => {
      Observer.getAll().forEach((observer) => {
        observer.kill();
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return null;
}