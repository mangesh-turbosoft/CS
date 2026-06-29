import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/componants/Footer";
import ServicesAnimation from "@/componants/ServicesAnimation";
import FullPageScroll from "@/componants/FullPageScroll";
import PageHero from "@/componants/pageHero";
import { processData } from "@/componants/meta";
import { processSchema } from "@/componants/schema";

export const metadata: Metadata = processData;

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
      'Would you like to know more? <a href="mailto:support@yourdomain.com" class="text-red-500 font-semibold">Click here</a> to send an email.',
    ],
    imgLeft: true,
  },
];

export default function Process() {
  return (
    <>
      <FullPageScroll />
      <ServicesAnimation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(processSchema),
        }}
      />
<PageHero 
                title="Process"
                subtitle="Every project is unique, and we approach each with creativity,
          technical discipline, and a strong focus on delivery."
              />
     
      {steps.map((step, i) => (
        <section
          id="next"
          key={i}
          className="panel reveal-section relative flex items-center border-t border-[#ebebeb] bg-white py-[20px] desktop:min-h-screen desktop:py-0"
        >
          <div
            className={`w-full flex flex-col ${
              step.imgLeft ? "md:flex-row" : "md:flex-row-reverse"
            } items-center`}
          >
            <div className="w-full md:w-[50%] flex items-center justify-center py-10 md:py-16 px-4 sm:px-6 md:px-8 md:px-[5vw]">
              <Image
                src={step.img}
                alt={step.title}
                width={800}
                height={600}
                className="fade w-[75%] md:w-full md:max-w-[720px] h-auto object-contain select-none"
                draggable={false}
              />
            </div>

            <div className="reveal-up w-full md:w-[50%] px-4 sm:px-6 md:px-8 xl:px-[6vw] py-10 pt-0 md:pt-10 md:py-16 xl:py-0">
              <h2
                className="font-semibold text-[#e8412a] leading-[1] mb-2 sm:mb-6"
                style={{
                  fontSize:
                    "clamp(32px, calc(32px + (48 - 32) * ((100vw - 320px) / (1600 - 320))), 48px)",
                }}
              >
                {step.title}
              </h2>

              <div className="flex flex-col gap-5">
                {step.body.map((para, j) => (
                  <p
                    key={j}
                    className="text-[#000] leading-[1.4]"
                    style={{
                      fontSize:
                        "clamp(22px, calc(22px + (26 - 22) * ((100vw - 320px) / (1600 - 320))), 26px)",
                      lineHeight: "1.3",
                    }}
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
      <section className="panel">
        <Footer />
      </section>
    </>
  );
}
