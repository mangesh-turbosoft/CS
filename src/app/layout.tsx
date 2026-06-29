import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "../componants/Header";
import ClientLayout from "../componants/ClientLayout";
import ServicesAnimation from "../componants/ServicesAnimation";
import { layoutData } from "../componants/meta";
import { layoutSchema } from "../componants/schema";

export const metadata: Metadata = layoutData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <Script
          id="global-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(layoutSchema),
          }}
        />        
        <ClientLayout>
          <Header />
          <ServicesAnimation />
          <main className="flex-1">{children}</main>
        </ClientLayout>
      </body>
    </html>
  );
}
