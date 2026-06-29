import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import Footer from "@/componants/Footer";
import ScrollArrow from "@/componants/ScrollArrow";
import ServicesAnimation from "@/componants/ServicesAnimation";
import FullPageScroll from "@/componants/FullPageScroll";
import { contactData } from "@/componants/meta";
import { contactSchema } from "@/componants/schema";

const offices = [
  {
    img: "/images/uk-office.jpg",
    country: "UK",
    address: "124 City Road,\nLondon, EC1V 2NX",
    contactLabel: "Call or Text: ",
    contactValue: "+44 7824 323288",
    contactHref: "tel:+447824323288",
  },
  {
    img: "/images/india-office.jpg",
    country: "INDIA",
    address: "Third Floor, Clover Metropole,\nNIBM Undri Road, Pune 411048",
    contactLabel: "Email: ",
    contactValue: "hello@creativeskills.com",
    contactHref: "mailto:hello@creativeskills.com",
  },
];

export const metadata: Metadata = contactData;

export default function Contact() {
  return (
    <>
      <FullPageScroll />
      <ServicesAnimation />
      <Script
        id="contact-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <div className="w-full font-sans">
        <section className="panel reveal-section relative max-w-[1600px] mx-auto flex flex-col justify-center bg-white px-4 sm:px-6 md:px-8 lg:px-[50px] pt-[120px] pb-[60px] sm:pb-[80px] desktop:min-h-screen desktop:pt-[80px]">
          <h1
            className="hero-title text-[#f04c3e]
            font-semibold
            leading-[1.1]
            mt-[0]
            mb-[0]          
          "
            style={{
              letterSpacing: "-0.036em",
              fontSize:
                "clamp(42px, calc(42px + (228 - 42) * ((100vw - 320px) / (1600 - 320))), 228px)",
            }}
          >
            Contact Us
          </h1>

          <p
            className="hero-subtitle google-sans
            text-[#7b7b7b]
            font-medium
            max-w-full
            clear-both
            mt-4
            sm:mt-5
            lg:mt-8            
            leading-[1.2]
          "
            style={{
              fontSize:
                "clamp(26px, calc(26px + (62 - 26) * ((100vw - 320px) / (1600 - 320))), 62px)",
            }}
          >
            Get in touch to discuss your project or explore working together.
          </p>

          <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2">
            <ScrollArrow />
          </div>
        </section>

        <section
          id="next"
          className="panel reveal-section desktop:h-screen w-full bg-white border-t border-[#ebebeb]"
        >
          <div className="flex flex-col md:flex-row h-full">
            {offices.map((office, i) => (
              <div
                key={i}
                className="flex-1 min-w-0 w-full md:w-1/2 h-full flex flex-col"
              >
                <Image
                  src={office.img}
                  alt={`${office.country} office`}
                  width={800}
                  height={600}
                  className="fade w-full h-full object-cover mb-0 max-sm:mb-0 desktop:h-[60%]"
                />
                <div className="reveal-up h-[280px] desktop:h-[40%] px-5 sm:px-8 sm:pt-[30px] sm:pb-10 md:px-10 lg:px-[20%] py-6 lg:py-[50px]">
                  <p
                    className="google-sans text-[#2a2a2a] mb-3"
                    style={{
                      color: "#f04c3e",
                      fontSize: "clamp(36px,3vw,40px)",
                      lineHeight: "1.6",
                      marginBottom: "5px",
                      fontWeight: 600,
                    }}
                  >
                    {office.country}
                  </p>

                  <address className="not-italic">
                    {office.address.split("\n").map((line, j) => (
                      <p
                        key={j}
                        className="text-[#666666] leading-relaxed"
                        style={{
                          fontSize: "clamp(20px,2vw,30px)",
                          lineHeight: "1.4",
                          color: "#5c5c5c",
                        }}
                      >
                        {line}
                      </p>
                    ))}
                  </address>

                  <p
                    style={{
                      fontSize: "clamp(20px,2vw,30px)",
                      lineHeight: "1.4",
                      color: "#5c5c5c",
                    }}
                  >
                    <span className="text-[#666666]">
                      {office.contactLabel}
                    </span>
                    <Link
                      href={office.contactHref}
                      className="text-[#f04c3e] hover:text-[#e8412a] transition-colors duration-200"
                    >
                      {office.contactValue}
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="panel">
          <Footer />
        </section>
      </div>
    </>
  );
}
