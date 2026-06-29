"use client";

import Footer from "@/componants/Footer";
import Intro from "@/componants/Intro";
import CaseStudies from "@/componants/casestudies";
import ServicesAnimation from "@/componants/ServicesAnimation";
import FullPageScroll from "@/componants/FullPageScroll";
import PageHero from "@/componants/pageHero";

export default function Home() {
  return (
    <>
      <FullPageScroll />
      <ServicesAnimation />
      <PageHero
        title={<>Web <br /> Engineering</>}
        subtitle="Premium websites in Headless, HubSpot and WordPress."
      />
      <Intro />
    <CaseStudies />

  <section className="panel">
    <Footer />
  </section>
</>
  );
}