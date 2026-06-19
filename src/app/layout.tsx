import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";

import Header from "../componants/Header";
import Footer from "../componants/Footer";
import ClientLayout from "../componants/ClientLayout";
import AosProvider from "../componants/AosProvider"; // <-- add

export const metadata: Metadata = {
  title: {
    default:
      "Expert Web Development Agency | WordPress, HubSpot & Headless CMS | Creative Skills",
    template: "%s | Creative Skills",
  },
  description:
    "Creative Skills delivers custom web development solutions using WordPress, HubSpot CMS and Headless CMS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <AosProvider /> {/* <-- add */}

        <ClientLayout>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}