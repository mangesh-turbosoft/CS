import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Website Development Process | From Strategy to Launch | Creative Skills",
  description:
    "Discover our proven website development process covering planning, design collaboration, development, testing, launch and ongoing support.",
  keywords: [
    "website development process",
    "web design process",
    "website planning",
    "website strategy",
    "web development workflow",
    "website project management",
    "ux design process",
    "website testing",
    "website launch",
    "website support",
    "agile web development",
    "digital project process",
  ],
};

const steps = [
  {
    img: "/images/process4.png",
    title: "Requirement Analysis",
    body: [
      "Our team conducts a meticulous review of the design and annotations, ensuring every aspect of your vision and requirements is thoroughly understood.",
      "We approach this stage with the utmost diligence, asking targeted questions and seeking clarifications as needed. Our commitment is to achieve complete clarity, leaving no detail unresolved, so we can deliver results that align precisely with your expectations.",
    ],
    imgLeft: true,
  },
  {
    img: "/images/process1.png",
    title: "Quotation",
    body: [
      "After thoroughly evaluating your project's requirements, we will present fixed quotes and definitive timelines. This ensures complete transparency, allowing you to make informed decisions regarding costs and delivery expectations.",
    ],
    imgLeft: true,
  },
  {
    img: "/images/process5.png",
    title: "Development and Quality Assurance",
    body: [
      "For every project, we assemble a dedicated team of four skilled professionals: a CSS developer, a back-end developer, a QA specialist, and a Project Manager.",
      "Throughout the development process, we keep communication transparent and involve you at every stage, ensuring the highest quality and alignment with your goals.",
    ],
    imgLeft: true,
  },
  {
    img: "/images/process6.png",
    title: "Staging Release",
    body: [
      "Following comprehensive development and successful completion of quality assurance protocols, the project is deployed to a staging white-label environment.",
      "A dedicated Trello board has been established to ensure efficient collaboration and streamlined project management.",
    ],
    imgLeft: true,
  },
  {
    img: "/images/making-live.png",
    title: "Project Deployment to Live",
    body: [
      "Once the content is finalised, and all feedback and tasks raised on Trello have been addressed, the project is deployed to the live environment.",
      "We are pleased to offer hosting services or, alternatively, upload the project to a hosting platform of your choice, ensuring a smooth and efficient transition to the live stage.",
    ],
    imgLeft: true,
  },
  {
    img: "/images/support.png",
    title: "Post-Go-Live Support",
    body: [
      "Our dedicated and knowledgeable support team is consistently available to offer prompt assistance, irrespective of the scale of the problem or the nature of the issue that requires resolution.",
      "We include 30 days of free bug resolution and technical support following the project's go-live.",
    ],
    imgLeft: true,
  },
];

export default function Process() {
  return (
    <div className="w-full font-sans">
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
          Process
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
          Every project is unique, and we approach each with creativity,
          technical discipline, and a strong focus on delivery.
        </p>

        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-[#e8412a]">
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

      {steps.map((step, i) => (
        <section
          id="next"
          key={i}
          className="relative min-h-screen flex items-center border-t border-[#ebebeb] bg-white"
        >
          <div
            className={`w-full flex flex-col ${
              step.imgLeft ? "xl:flex-row" : "xl:flex-row-reverse"
            } items-center`}
          >
            <div className="w-full xl:w-[50%] flex items-center justify-center py-10 md:py-16 px-4 sm:px-6 md:px-8 xl:px-[5vw]">
              <img
                data-aos="zoom-in"
                src={step.img}
                alt={step.title}
                className="w-full max-w-[720px] h-auto object-contain select-none"
                draggable={false}
              />
            </div>

            <div
              data-aos="fade-up"
              className="w-full xl:w-[50%] px-4 sm:px-6 md:px-8 xl:px-[6vw] py-10 md:py-16 xl:py-0"
            >
              <h2
                className="font-bold text-[#e8412a] leading-[1.2] mb-6"
                style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
              >
                {step.title}
              </h2>

              <div className="flex flex-col gap-5">
                {step.body.map((para, j) => (
                  <p
                    key={j}
                    className="text-[#000] leading-[1.65]"
                    style={{
                      fontSize: "clamp(16px, 2vw, 26px)",
                      lineHeight: "1.6",
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-12 md:py-24 px-4 sm:px-6 flex justify-center border-t border-[#ebebeb] bg-white">
        <p
          data-aos="fade-up"
          className="text-[#5a5a5a]"
          style={{ fontSize: "clamp(15px, 1.2vw, 18px)" }}
        >
          Would you like to know more?{" "}
          <a
            href="mailto:hello@creativeskills.com"
            className="font-semibold text-[#1a1a1a] underline hover:text-[#e8412a] transition-colors duration-200"
          >
            Click here
          </a>{" "}
          to send an email.
        </p>
      </section>
    </div>
  );
}
