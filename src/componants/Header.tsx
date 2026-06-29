"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/design-agencies", label: "Design Agencies" },
  { href: "/contact", label: "Contact" },
];

function normalizePath(path: string) {
  return path === "/" ? "/" : path.replace(/\/+$/, "");
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className="w-full fixed inset-x-0 top-0 z-50 bg-white border-b border-gray-200 transition-transform duration-300 ease-in-out"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="max-w-[1600px] mx-auto px-5 md:px-8 xl:px-[50px] flex items-center justify-between h-[68px]">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              width={200}
              height={29}
              alt="Creative Skills"
              priority
            />
          </Link>

          <div className="flex items-center gap-[60px]">
            <Link
              href="https://www.dba.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <Image
                src="/images/dba.svg"
                width={143}
                height={39}
                alt="DBA Association Member"
              />
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="relative w-[50px] h-[50px] flex items-center justify-center border-none bg-transparent cursor-pointer p-0"
            >
              <span className="absolute w-[40px] h-[40px] bg-[#f04c3e] rotate-45 rounded-[12px]" />
              <span className="relative z-10 flex flex-col gap-[5px] items-center">
                <span className="block w-[20px] h-[2px] bg-white rounded-full" />
                <span className="block w-[20px] h-[2px] bg-white rounded-full" />
                <span className="block w-[20px] h-[2px] bg-white rounded-full" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[998] bg-black/30"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav
        className="fixed top-0 right-0 h-full w-[380px] bg-[#1a1a1a] z-[999] flex flex-col py-8 px-10 transition-transform duration-300 ease-in-out"
        style={{
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          visibility: menuOpen ? "visible" : "hidden",
        }}
      >
        <div className="flex justify-end mb-10">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="relative w-[50px] h-[50px] flex items-center justify-center border-none bg-transparent cursor-pointer p-0"
          >
            <span className="absolute w-[44px] h-[44px] bg-[#f04c3e] rotate-45 rounded-[12px]" />
            <svg
              className="relative z-10"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col gap-8 list-none p-0 m-0 flex-1">
          {navLinks.map((link, i) => {
            const isActive =
              normalizePath(pathname) === normalizePath(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  prefetch={false}
                  className={`group flex items-center no-underline text-[32px] tracking-wide transition-all duration-300
            ${isActive ? "text-white" : "text-[#b2b2b2] font-light hover:text-white"}
          `}
                  style={{
                    animation: menuOpen
                      ? `slideInRight 0.3s ease ${i * 0.07}s both`
                      : "none",
                    paddingLeft: isActive ? "22px" : "0px",
                    backgroundImage: isActive
                      ? "url('/images/nav-arrow.png')"
                      : "none",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left center",
                    backgroundSize: "auto 19px",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.paddingLeft = "22px";
                      e.currentTarget.style.backgroundImage =
                        "url('/images/nav-arrow.png')";
                      e.currentTarget.style.backgroundRepeat = "no-repeat";
                      e.currentTarget.style.backgroundPosition = "left center";
                      e.currentTarget.style.backgroundSize = "auto 19px";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.paddingLeft = "0px";
                      e.currentTarget.style.backgroundImage = "none";
                    }
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="pt-8 border-t border-white/10">
          <p className="text-[#f04c3e] text-[16px] uppercase">Phone</p>
          <Link
            href="tel:+447824323288"
            className="text-[#b2b2b2] text-[30px] font-light hover:text-[#f04c3e] transition-colors no-underline"
          >
            +44 7824 323288
          </Link>
        </div>
      </nav>
    </>
  );
}
