import Footer from "@/componants/Footer";
import FullPageScroll from "@/componants/FullPageScroll";
import { designAgencyData } from "@/componants/meta";
import { designAgencySchema } from "@/componants/schema";
import ScrollArrow from "@/componants/ScrollArrow";
import ServicesAnimation from "@/componants/ServicesAnimation";
import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

const challenges = [
  "Will the project be delivered to the quality we expect?",
  "Will the deadlines be adhered to?",
  "Will our design essence be fully understood?",
  "Will the project exceed its budget?",
];

const strengths = [
  "28 years of expertise in website development and outsourced solutions.",
  "Specialising in scalable, high-performance web applications.",
  "Expertise in modern frameworks, CMS platforms, and custom solutions.",
  "Seamless integration with client teams for smooth project execution.",
  "Cost-effective development with a focus on innovation.",
  "End-to-end support from planning to deployment and maintenance.",
];

export const metadata: Metadata = designAgencyData;

export default function DesignAgencies() {
  return (
    <>
      <FullPageScroll />
      <ServicesAnimation />
      <Script
        id="design-agencies-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(designAgencySchema) }}
      />
      <section className="panel reveal-section relative max-w-[1600px] mx-auto flex flex-col justify-center bg-white px-4 sm:px-6 md:px-8 lg:px-[50px] pt-[120px] pb-[80px] desktop:min-h-screen desktop:pt-[80px] desktop:pb-[80px]">
        <h1
          className="text-[#f04c3e]
            font-semibold
            leading-[1.1]
            mt-[0]
            mb-[0]
           text-[48px] sm:text-[72px] md:text-[100px] lg:text-[clamp(150px,10vw,228px)]
          "
        >
          Design Agencies
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
          You win the client with strategy and design.
          <br />
          We ensure the build matches your vision, pixel for pixel.
        </p>
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2">
          <ScrollArrow />
        </div>
      </section>

      <section
        id="next"
        className="panel reveal-section desktop:min-h-screen md:min-h-screen flex flex-col xl:flex-row"
      >
        <div className="w-full xl:w-1/2 bg-[#f04c3e] flex items-center">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[50px] py-12 md:py-16 lg:py-[80px]">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-[0px]">
              <div className="md:w-1/2">
                <h2
                  className="slide-left text-white figtree pr-8"
                  style={{
                    fontSize: "clamp(28px,3vw,36px)",
                    lineHeight: "1.35",
                    fontWeight: 400,
                  }}
                >
                  We recognise the challenges faced by an agency owner when
                  seeking a development partner
                </h2>
              </div>

              <div className="md:w-1/2 relative">
                <div className="absolute left-[12px] top-[10px] bottom-[10px] w-[2px] bg-[#ff8b80]" />

                {challenges.map((item, index) => (
                  <div
                    key={index}
                    className="slide-right relative flex items-start mb-[50px]"
                  >
                    <div className="w-[26px] h-[26px] rounded-full border-[4px] border-[#ff8b80] bg-[#f04c3e] z-10 flex-shrink-0" />
                    <p
                      className="text-white ml-[20px]
                      text-[20px] leading-[30px]
                      md:text-[24px] md:leading-[30px]
                      min-[1025px]:text-[24px] min-[1025px]:leading-[34px]
                      min-[1201px]:text-[28px] min-[1201px]:leading-[37px]"
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 relative min-h-[300px] md:min-h-[700px] xl:min-h-screen">
          <Image
            src="/images/designagencies.png"
            alt="Agency Challenges"
            fill
            className="fade object-cover"
            priority
          />
        </div>
      </section>

      <section className="panel reveal-section desktop:min-h-screen bg-[#3f3f3f] flex items-center">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[50px] w-full py-12 md:py-16 lg:py-[180px]">
          <h2
            className="fade text-white font-semibold"
            style={{
              fontSize: "clamp(32px,4vw,54px)",
              lineHeight: "1.1",
              fontFamily: '"Google Sans Flex", sans-serif',
            }}
          >
            We act as a seamless extension of your team, delivering dependable
            development with clear communication and on-time delivery.
          </h2>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-x-[80px] gap-y-10 lg:gap-y-[80px] mt-10 lg:mt-[90px]">
            {strengths.map((item, index) => (
              <div key={index}>
                <div className="w-[30px] h-[3px] bg-[#f04c3e] mb-[14px] max-[1024px]:mb-[10px]" />

                <p
                  className="reveal-up text-white
                  text-[20px] leading-[28px]
                  md:text-[20px] md:leading-[28px]
                  min-[1025px]:text-[24px] min-[1025px]:leading-[34px]
                  min-[1201px]:text-[28px] min-[1201px]:leading-[37px]"
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="panel">
        <Footer />
      </section>
    </>
  );
}
