"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesAnimation() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Fade Only
gsap.utils.toArray(".fade").forEach((el: any) => {
  gsap.from(el, {
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play reverse play reverse",
    },
  });
});

// Left Slide
gsap.utils.toArray(".slide-left").forEach((el: any) => {
  gsap.from(el, {
    x: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play reverse play reverse",
    },
  });
});

// Right Slide
gsap.utils.toArray(".slide-right").forEach((el: any) => {
  gsap.from(el, {
    x: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play reverse play reverse",
    },
  });
});

      // Text Animation
      gsap.utils.toArray(".reveal-up").forEach((el: any) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        });
      });

      // Image Animation
      gsap.utils.toArray(".image-reveal").forEach((el: any) => {
        gsap.from(el, {
          scale: 1.1,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        });
      });

    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}