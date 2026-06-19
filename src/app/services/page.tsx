import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Web Development Services | WordPress, HubSpot & Headless CMS | Creative Skills",
  description:
    "Explore expert web development services including WordPress development, HubSpot CMS implementation, Headless CMS solutions, website support and optimisation.",
  keywords: [
    "web development services",
    "wordpress development",
    "wordpress developers",
    "hubspot cms development",
    "hubspot website development",
    "headless cms development",
    "custom website development",
    "website maintenance",
    "website support",
    "website optimisation",
    "cms development",
    "frontend development",
    "backend development",
    "web agency services",
  ],
};

export default function Services() {
  return (
    <div className="pt-[70px] lg:pt-[0px]">
      <section className="relative max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[50px] min-h-[80vh] lg:min-h-screen flex flex-col justify-center bg-white">
        <h1
          data-aos="fade-up"
          className="font-google-sans
            text-[#f04c3e]
            font-semibold
            leading-[1.1]
            mt-[0]
            mb-[30]
           text-[48px] sm:text-[72px] md:text-[100px] lg:text-[150px] xl:text-[228px]
          "
        >
          Development Partner
        </h1>

        <p
          data-aos="fade-up"
          className="font-google-sans
            text-[#7b7b7b]
            font-medium
            max-w-full
            overflow-hidden
            clear-both
            mt-8
            text-[24px] sm:text-[34px] md:text-[42px] lg:text-[52px] xl:text-[62px]
leading-[1.2]
          "
        >
          Helping agencies scale website delivery without stretching internal
          teams.
        </p>

        <Link
          href="#next"
          className="
    absolute
    bottom-[25px]
    md:bottom-[40px]
    left-1/2
    -translate-x-1/2
    w-[24px]
    md:w-[30px]
    h-[24px]
    md:h-[30px]
    z-[999]
    animate-bounce
  "
        >
          <Image
            src="/images/inner-down-arrow.png"
            alt="Scroll Down"
            width={30}
            height={30}
            className="w-full h-full object-contain"
          />
        </Link>
      </section>

      <section
        id="next"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/apps-bg-new-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[50px] w-full">
          <div data-aos="fade-up" className="max-w-full lg:max-w-[600px]">
            <h2
              className="text-white mb-10"
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
                fontSize: "clamp(18px,2.2vw,30px)",
                lineHeight: "1.5",
                fontFamily: '"Google Sans Flex", sans-serif',
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
                fontSize: "clamp(18px,2.2vw,30px)",
                lineHeight: "1.5",
                fontFamily: '"Google Sans Flex", sans-serif',
              }}
            >
              We take pride in our work and do not use page builders or
              readymade themes, ensuring each website is a one-of-a-kind
              creation.
            </p>

            <a
              href="mailto:hello@creativeskills.com"
              className="text-white"
              style={{
                fontSize: "clamp(18px,2.2vw,30px)",
                lineHeight: "1.5",
                fontFamily: '"Google Sans Flex", sans-serif',
              }}
            >
              <span className="text-[#f04c3e] font-semibold">Click here</span>{" "}
              to receive examples of our work.
            </a>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-[#f04c3e] text-white">
          <div className="max-w-[720px] mx-auto px-6 sm:px-8 md:px-10 lg:px-[80px] py-12 md:py-16 lg:py-[100px]">
            <img
              data-aos="zoom-in"
              src="/images/software-icon.png"
              alt=""
              className="w-[70px] sm:w-[90px] lg:w-[120px] mb-8 lg:mb-12"
            />

            <h2
              data-aos="fade-up"
              className="mb-10"
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
              data-aos="fade-up"
              className="mb-10"
              style={{
                fontSize: "clamp(18px,2vw,30px)",
                lineHeight: "1.6",
                fontFamily: '"Google Sans Flex", sans-serif',
              }}
            >
              Experience the flexibility and power of modern web architectures
              through our headless CMS development services using platforms like
              <strong> Strapi, Contentful, or Sanity.</strong>
            </p>

            <p
              data-aos="fade-up"
              style={{
                fontSize: "clamp(18px,2vw,30px)",
                lineHeight: "1.6",
                fontFamily: '"Google Sans Flex", sans-serif',
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
          <div className="max-w-[720px] mx-auto px-6 sm:px-8 md:px-10 lg:px-[80px] py-12 md:py-16 lg:py-[100px]">
            <img
              data-aos="zoom-in"
              src="/images/web-icon.png"
              alt=""
              className="w-[70px] sm:w-[90px] lg:w-[120px] mb-8 lg:mb-12"
            />

            <h2
              data-aos="fade-up"
              className="mb-10"
              style={{
                fontSize: "clamp(38px,5vw,72px)",
                lineHeight: "1.1",
                fontWeight: 600,
                fontFamily: '"Google Sans Flex", sans-serif',
              }}
            >
              HubSpot Content Hub
            </h2>

            <p
              data-aos="fade-up"
              className="mb-10"
              style={{
                fontSize: "clamp(18px,2vw,30px)",
                lineHeight: "1.6",
                fontFamily: '"Google Sans Flex", sans-serif',
              }}
            >
              We provide expert HubSpot development services to help businesses
              enhance marketing, sales, and customer service.
            </p>

            <p
              data-aos="fade-up"
              style={{
                fontSize: "clamp(18px,2vw,30px)",
                lineHeight: "1.6",
                fontFamily: '"Google Sans Flex", sans-serif',
              }}
            >
              With deep expertise in HubSpot, we help businesses maximise lead
              generation and personalise customer journeys.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
