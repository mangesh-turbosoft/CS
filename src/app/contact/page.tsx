import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const offices = [
  {
    img: "/images/uk-office.jpg",
    country: "UK",
    address: "124 City Road,\nLondon, EC1V 2NX",
    contactLabel: "Call or Text:",
    contactValue: "+44 7824 323288",
    contactHref: "tel:+447824323288",
  },
  {
    img: "/images/india-office.jpg",
    country: "INDIA",
    address: "Third Floor, Clover Metropole,\nNIBM Undri Road, Pune 411048",
    contactLabel: "Email:",
    contactValue: "hello@creativeskills.com",
    contactHref: "mailto:hello@creativeskills.com",
  },
];

export const metadata: Metadata = {
  title: "Contact Creative Skills | Discuss Your Web Development Project",
  description:
    "Speak with our team about WordPress development, HubSpot CMS, Headless CMS, website support or your next digital project.",
  keywords: [
    "contact web developers",
    "wordpress development consultation",
    "hubspot cms experts",
    "headless cms agency",
    "website development quote",
    "web development enquiry",
    "website support services",
    "custom web development agency",
    "digital project consultation",
  ],
};
export default function Contact() {
  return (
    <div className="w-full font-sans">
      <section className="relative max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[50px] min-h-[100vh] flex flex-col justify-center bg-white">
        <h1
          className="            text-[#f04c3e]
            font-semibold
            leading-[1.1]
            mt-[0]
            mb-[0]
           text-[42px] sm:text-[60px] md:text-[80px] lg:text-[120px] xl:text-[228px]
          "
          style={{ letterSpacing: "-0.036em" }}
        >
          Contact Us
        </h1>

        <p
          className="google-sans
            text-[#7b7b7b]
            font-medium
            max-w-full
            overflow-hidden
            clear-both
            mt-8
            text-[18px] sm:text-[24px] md:text-[32px] lg:text-[42px] xl:text-[62px]
leading-[1.2]
          "
        >
          Get in touch to discuss your project or explore working together.
        </p>

        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2">
          <Link
            href="#next"
            className="
          absolute
          bottom-[40px]
          left-1/2
          -translate-x-1/2
          w-[30px]
          h-[30px]
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
        </div>
      </section>

      <section id="next" className="w-full bg-white border-t border-[#ebebeb]">
        <div className="flex flex-col lg:flex-row">
          {offices.map((office, i) => (
            <div key={i} className="flex-1 min-w-0">
              <Image
                src={office.img}
                alt={`${office.country} office`}
                width={800}
                height={600}
                className="w-full object-cover mb-5"
                style={{ height: "60%" }}
              />
              <div className="px-5 sm:px-8 md:px-10 lg:px-[20%] py-6 lg:py-[3%]">
                <p
                  data-aos="fade-up"
                  className="google-sans text-[#2a2a2a] mb-3"
                  style={{
                    color: "#f04c3e",
                    fontSize: "clamp(22px,3vw,40px)",
                    lineHeight: "1.2",
                    marginBottom: "5px",
                    fontWeight: 600,
                  }}
                >
                  {office.country}
                </p>

                <address data-aos="fade-up" className="not-italic">
                  {office.address.split("\n").map((line, j) => (
                    <p
                      key={j}
                      className="text-[#666666] leading-relaxed"
                      style={{
                        fontSize: "clamp(16px,2vw,30px)",
                        lineHeight: "normal",
                        color: "#5c5c5c",
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </address>

                <p
                  data-aos="fade-up"
                  style={{
                    fontSize: "clamp(16px,2vw,30px)",
                    lineHeight: "1.6",
                    color: "#5c5c5c",
                  }}
                >
                  <span className="text-[#666666]">{office.contactLabel} </span>
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
    </div>
  );
}
