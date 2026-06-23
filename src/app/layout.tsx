import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import Script from "next/script";

import Header from "../componants/Header";
import Footer from "../componants/Footer";
import ClientLayout from "../componants/ClientLayout";
import AosProvider from "../componants/AosProvider";
import Loader from "../componants/Loader"

export const metadata: Metadata = {
  title: {
    default:
      "Expert Web Development Agency | WordPress, HubSpot & Headless CMS | Creative Skills",
    template: "%s",
  },
  description:
    "Creative Skills delivers custom web development solutions using WordPress, HubSpot CMS and Headless CMS. Trusted by agencies and businesses worldwide.",
  keywords: [
    "web development agency",
    "wordpress development agency",
    "hubspot cms agency",
    "headless cms agency",
    "custom website development",
    "website development company",
    "wordpress experts",
    "hubspot developers",
    "headless cms developers",
    "web application development",
    "website support",
    "website optimisation",
    "digital agency partner",
  ],
  alternates: {
    canonical: "https://www.creativeskills.com",
  },
  openGraph: {
    title:
      "Expert Web Development Agency | WordPress, HubSpot & Headless CMS | Creative Skills",
    description:
      "Creative Skills delivers custom web development solutions using WordPress, HubSpot CMS and Headless CMS. Trusted by agencies and businesses worldwide.",
    url: "https://www.creativeskills.com",
    images: [
      {
        url: "https://www.creativeskills.com/images/creative-skills-share.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Expert Web Development Agency | WordPress, HubSpot & Headless CMS | Creative Skills",
    description:
      "Creative Skills delivers custom web development solutions using WordPress, HubSpot CMS and Headless CMS. Trusted by agencies and businesses worldwide.",
    images: [
      "https://www.creativeskills.com/images/creative-skills-share.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.creativeskills.com/#organization",
      name: "Creative Skills",
      url: "https://www.creativeskills.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.creativeskills.com/images/cslogo.svg",
      },
      email: "hello@creativeskills.com",
      telephone: "+44-7824-323288",
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "124 City Road",
          addressLocality: "London",
          postalCode: "EC1V 2NX",
          addressCountry: "GB",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "Third Floor, Clover Metropole, NIBM Undri Road",
          addressLocality: "Pune",
          postalCode: "411048",
          addressCountry: "IN",
        },
      ],
      sameAs: ["https://www.dba.org.uk/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.creativeskills.com/#website",
      url: "https://www.creativeskills.com",
      name: "Creative Skills",
      publisher: {
        "@id": "https://www.creativeskills.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.creativeskills.com/#webpage",
      url: "https://www.creativeskills.com/",
      name: "Expert Web Development Agency | WordPress, HubSpot & Headless CMS | Creative Skills",
      description:
        "Creative Skills delivers custom web development solutions using WordPress, HubSpot CMS and Headless CMS. Trusted by agencies and businesses worldwide.",
      isPartOf: {
        "@id": "https://www.creativeskills.com/#website",
      },
    },
  ],
};

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
<Loader />
        <AosProvider />
        <ClientLayout>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}

