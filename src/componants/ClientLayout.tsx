"use client";

import { useEffect, useState } from "react";

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
      }, 1800);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
       {children}
    </>
  );
}