"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import Loader from "./Loader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("loaderShown");

    if (!hasVisited) {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("loaderShown", "true");

        setTimeout(() => {
          AOS.refreshHard();
        }, 200);
      }, 1800);

      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        AOS.refreshHard();
      }, 100);
    }
  }, []);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}
