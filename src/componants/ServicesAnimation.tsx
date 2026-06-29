"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesAnimation() {
  useEffect(() => {
    const heroTitle = document.querySelector(".hero-title");
    const heroSubtitle = document.querySelector(".hero-subtitle");

    if (heroTitle && heroSubtitle) {
      gsap
        .timeline()
        .from(heroTitle, { opacity: 0, y: -40, duration: 1 })
        .from(heroSubtitle, { opacity: 0, y: -40, duration: 1 }, "-=0.5");
    }

    const createAnimation = (selector: string, vars: gsap.TweenVars) => {
      gsap.utils.toArray(selector).forEach((el: any) => {
        gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1 });
        
        gsap.from(el, {
          ...vars,
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            once: true,
            onEnter: () => gsap.to(el, { ...vars, opacity: 1, x: 0, y: 0, scale: 1 }),
          },
        });
      });
    };

    // Fade Only
    gsap.utils.toArray(".fade").forEach((el: any) => {
      gsap.fromTo(el,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            once: true,
          },
        }
      );
    });

    // Left Slide
    gsap.utils.toArray(".slide-left").forEach((el: any) => {
      gsap.fromTo(el,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            once: true,
          },
        }
      );
    });

    // Right Slide
    gsap.utils.toArray(".slide-right").forEach((el: any) => {
      gsap.fromTo(el,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            once: true,
          },
        }
      );
    });

    // Reveal Up
    gsap.utils.toArray(".reveal-up").forEach((el: any) => {
      gsap.fromTo(el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            once: true,
          },
        }
      );
    });

    // Image Reveal
    gsap.utils.toArray(".image-reveal").forEach((el: any) => {
      gsap.fromTo(el,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            once: true,
          },
        }
      );
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}