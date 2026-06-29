"use client";

import Footer from "@/componants/Footer";
import Firstsec from "@/componants/Firstsec";
import Intro from "@/componants/Intro";
import CaseStudies from "@/componants/casestudies";
import ServicesAnimation from "@/componants/ServicesAnimation";
import FullPageScroll from "@/componants/FullPageScroll";

export default function Home() {
  return (
    <>
      <FullPageScroll />
      <ServicesAnimation />
      <Firstsec />
      <Intro />
    <CaseStudies />

  <section className="panel">
    <Footer />
  </section>
</>
  );
}