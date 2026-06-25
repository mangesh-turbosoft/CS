
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import ServicesAnimation from "../../componants/ServicesAnimation";
import ScrollArrow from "@/componants/ScrollArrow";
import Footer from "@/componants/Footer";
import FullPageScroll from "@/componants/FullPageScroll";
import { serviceData } from "@/componants/meta";
import { serviceSchema } from "@/componants/schema";

export const metadata: Metadata = serviceData;


export default function Services() {
  return (
    <>
    <FullPageScroll />
    <ServicesAnimation />
     <Script
        id="services-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="panel reveal-section min-h-screen relative max-w-[1600px] mx-auto flex flex-col justify-center bg-white px-4 sm:px-6 md:px-8 lg:px-[50px] pt-[120px] pb-[80px] desktop:min-h-screen desktop:pt-[80px] desktop:pb-80px">
       <h1
  className="text-[#f04c3e]
    font-semibold
    leading-[1.1]
    mt-[0]
    mb-[0]
    text-[48px] sm:text-[72px] md:text-[100px] lg:text-[clamp(140px,10vw,228px)]
  "
  style={{ letterSpacing: "-0.01em" }}
>
  Development Partner
</h1>

<p
  className="google-sans
    text-[#7b7b7b]
    font-medium
    max-w-full
    clear-both
    mt-8
    text-[24px] sm:text-[34px] md:text-[42px] lg:text-[52px] xl:text-[62px]
    leading-[1.2]
  "
>
  Helping agencies scale website delivery without stretching internal teams.
</p>

        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2">
  <ScrollArrow />
</div>
      </section>

      <section
        id="next"
        className="panel reveal-section min-h-screen relative pt-[80px] pb-[80px] desktop:pt-[120px] desktop:pb-[120px] flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/apps-bg-new-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[50px] w-full">
          <div className="reveal-up max-w-full lg:max-w-[600px]">
            <h2
              className="text-white mb-10 max-sm:mb-5"
              style={{
                fontSize: "clamp(40px,6vw,72px)",
                lineHeight: "1.1",
                fontWeight: 600,
                fontFamily: '"Google Sans Flex", sans-serif',
              }}
            >
              WordPress
            </h2>

            <p
              className="text-white mb-10"
              style={{
                fontSize: "clamp(22px,2.2vw,32px)",
                lineHeight: "normal",
              }}
            >
              We specialise in premium WordPress development for design
              agencies, crafting high-performance, visually stunning websites
              that align with their creative vision. Our team provides tailored
              solutions for flexibility, speed, and seamless user experiences.
            </p>

            <p
              className="text-white mb-10"
              style={{
                fontSize: "clamp(22px,2.2vw,32px)",
                lineHeight: "normal",
              }}
            >
              We take pride in our work and do not use page builders or
              readymade themes, ensuring each website is a one-of-a-kind
              creation.
            </p>

            <Link
              href="mailto:hello@creativeskills.com"
              className="text-white"
              style={{
               fontSize: "clamp(22px,2.2vw,32px)",
                lineHeight: "normal",
              }}
            >
              <span className="text-[#f04c3e] font-semibold">Click here</span>{" "}
              to receive examples of our work.
            </Link>
          </div>
        </div>
      </section>

      <section className="panel reveal-section min-h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-[#f04c3e] text-white">
          <div className="reveal-up max-w-[1000px] mx-auto px-6 sm:px-8 md:px-10 lg:px-[30px] xl:px-[80px] py-12 md:py-16 lg:py-[100px]">
            <Image
              src="/images/software-icon.png"
              alt=""
              width={120}
              height={100}
              className="w-[70px] sm:w-[90px] lg:w-[120px] mb-8 lg:mb-12"
            />

            <h2
              className="mb-10 max-lg:mb-5"
              style={{
                fontSize: "clamp(38px,5vw,72px)",
                lineHeight: "1.1",
                fontWeight: 600,
                fontFamily: '"Google Sans Flex", sans-serif',
              }}
            >
              Headless CMS
            </h2>

            <p
              className="mb-10"
              style={{
                fontSize: "clamp(18px,2vw,30px)",
                lineHeight: "normal",
              }}
            >
              Experience the flexibility and power of modern web architectures
              through our headless CMS development services using platforms like
              <strong> Strapi, Contentful, or Sanity.</strong> We assist you in
              selecting the best headless CMS platform that meets your specific
              requirements and provide training for your team to effectively
              manage content within the system.
            </p>

            <p
              style={{
                fontSize: "clamp(18px,2vw,30px)",
                lineHeight: "normal",
              }}
            >
              Whether you are looking to migrate your content, optimise your
              existing setup, or develop a new digital strategy, we are here to
              ensure your success with innovative solutions tailored to your
              unique needs.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-[#8c8c8c] text-white">
          <div className="reveal-up max-w-[1000px] mx-auto px-6 sm:px-8 md:px-10 lg:px-[30px] xl:px-[80px] py-12 md:py-16 lg:py-[100px]">
            <Image
              src="/images/web-icon.png"
              width={120}
              height={100}
              alt=""
              className="w-[70px] sm:w-[90px] lg:w-[120px] mb-8 lg:mb-12"
            />

            <h2
              className="mb-10 max-lg:mb-5"
              style={{
                fontSize: "clamp(38px,5vw,70px)",
                lineHeight: "1.1",
                fontWeight: 600,
                fontFamily: '"Google Sans Flex", sans-serif',
              }}
            >
              HubSpot Content Hub
            </h2>

            <p
              className="mb-10"
              style={{
                fontSize: "clamp(18px,2vw,30px)",
                lineHeight: "normal",
              }}
            >
              We provide expert HubSpot development services to help businesses
              enhance marketing, sales, and customer service. Our team builds
              custom HubSpot themes, modules, and integrations tailored to your
              brand. From HubSpot CMS websites to CRM automation and API
              integrations, we deliver seamless, scalable solutions to
              streamline workflows and boost engagement.
            </p>

            <p
              style={{
                fontSize: "clamp(18px,2vw,30px)",
                lineHeight: "normal",
              }}
            >
              With deep expertise in HubSpot, we help businesses maximise lead
              generation and personalise customer journeys. Whether you're a
              startup or an enterprise, we tailor our approach to drive
              conversions and efficiency.
            </p>
          </div>
        </div>
      </section>
     <section className="panel">
         <Footer />
       </section>
    </>
  );
}
