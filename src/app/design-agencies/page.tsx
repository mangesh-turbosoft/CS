
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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

export const metadata: Metadata = {
  title: "Development Partner for Design Agencies | Creative Skills",
  description:
    "Extend your team's capabilities with experienced web developers. We help design agencies deliver WordPress, HubSpot and Headless CMS projects efficiently.",
  keywords: [
    "development partner for agencies",
    "web development white label",
    "wordpress development partner",
    "hubspot development partner",
    "outsourced web development",
    "agency web developers",
    "white label wordpress development",
    "design agency support",
    "headless cms development partner",
    "agency website development",
  ],
};

export default function DesignAgencies() {
  return (
    <>
      <section className="relative max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[50px] py-16 lg:py-10 flex flex-col justify-center bg-white">
        <div className="min-h-[calc(100vh-70px)] flex flex-col justify-center relative">
          <h1
            data-aos="fade-up"
            className="text-[#f04c3e]
            font-semibold
            leading-[1.1]
            mt-[0]
            mb-[0]
           text-[48px] sm:text-[72px] md:text-[100px] lg:text-[150px] xl:text-[228px]
          "
          >
            Design Agencies
          </h1>
          <p
            data-aos="fade-up"
            className="google-sans
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
            You win the client with strategy and design.
            <br />
            We ensure the build matches your vision, pixel for pixel.
          </p>
          <Link
            href="#next"
            className="
  absolute
  bottom-[20px]
  md:bottom-[40px]
  left-1/2
  -translate-x-1/2
  w-[24px]
  h-[24px]
  md:w-[30px]
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
        </div>
      </section>

      <section id="next" className="min-h-screen flex flex-col xl:flex-row">
        <div className="w-full xl:w-1/2 bg-[#f04c3e] flex items-center">
          <div className="max-w-[800px] ml-auto px-4 sm:px-6 md:px-8 lg:px-[50px] py-12 md:py-16 lg:py-[80px] w-full">
            <div className="flex flex-col xl:flex-row gap-8 lg:gap-[0px]">
              <div data-aos="fade-right" className="xl:w-1/2">
                <h2
                  className="text-white figtree pr-8"
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

              <div data-aos="fade-left" className="xl:w-1/2 relative">
                <div className="absolute left-[12px] top-[10px] bottom-[10px] w-[2px] bg-[#ff8b80]" />

                {challenges.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex items-start mb-[50px]"
                  >
                    <div className="w-[26px] h-[26px] rounded-full border-[4px] border-[#ff8b80] bg-[#f04c3e] z-10 flex-shrink-0" />
                    <p
                      className="text-white ml-[20px]"
                      style={{
                        fontSize: "clamp(18px,2vw,24px)",
                        lineHeight: "1.25",
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 relative min-h-[320px] md:min-h-[500px] xl:min-h-screen">
          <Image
            src="/images/designagencies.png"
            alt="Agency Challenges"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="bg-[#3f3f3f] min-h-screen flex items-center">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[50px] w-full py-12 md:py-16 lg:py-[100px]">
          <h2
            data-aos="fade-up"
            className="text-white font-semibold"
            style={{
              fontSize: "clamp(32px,4vw,54px)",
              lineHeight: "1.1",
              fontFamily: '"Google Sans Flex", sans-serif',
            }}
          >
            We act as a seamless extension of your team, delivering dependable
            development with clear communication and on-time delivery.
          </h2>

          <div
            data-aos="fade-up"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-[80px] gap-y-10 lg:gap-y-[80px] mt-10 lg:mt-[90px]"
          >
            {strengths.map((item, index) => (
              <div key={index}>
                <div className="w-[30px] h-[3px] bg-[#f04c3e] mb-[18px]" />

                <p
                  className="text-white figtree"
                  style={{
                    fontSize: "clamp(18px,2vw,28px)",
                    lineHeight: "37px",
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
