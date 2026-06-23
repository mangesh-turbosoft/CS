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
   alternates: {
    canonical: "https://www.creativeskills.com/process/",
  },
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
      'Would you like to know more? <a href="mailto:support@yourdomain.com" class="text-red-500 font-semibold">Click here</a> to send an email.',
    ],
    imgLeft: true,
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.creativeskills.com/#organization",
      "name": "Creative Skills",
      "url": "https://www.creativeskills.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.creativeskills.com/images/cslogo.svg"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+44-7824-323288",
        "contactType": "customer service"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.creativeskills.com/#website",
      "url": "https://www.creativeskills.com",
      "name": "Creative Skills",
      "publisher": {
        "@id": "https://www.creativeskills.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.creativeskills.com/process/#webpage",
      "url": "https://www.creativeskills.com/process/",
      "name": "Website Development Process | From Strategy to Launch | Creative Skills",
      "description": "Discover our proven website development process covering planning, design collaboration, development, testing, launch and ongoing support.",
      "isPartOf": {
        "@id": "https://www.creativeskills.com/#website"
      },
      "about": {
        "@id": "https://www.creativeskills.com/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.creativeskills.com/process/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.creativeskills.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Process",
          "item": "https://www.creativeskills.com/process/"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.creativeskills.com/process/#process",
      "name": "Creative Skills Project Delivery Process",
      "itemListElement": steps.map((step, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": step.title,
        "description": step.body[0]
      }))
    }
  ]
};



export default function Process() {
  return (
<>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    <div className="w-full">
      <section className="relative max-w-[1600px] mx-auto flex flex-col justify-center bg-white px-4 sm:px-6 md:px-8 lg:px-[50px] pt-[120px] pb-[80px]  desktop:min-h-screen desktop:pt-[80px] desktop:pb-[80px]">
        <h1
          data-aos="fade-up"
          className="
            text-[#f04c3e]
            font-semibold
            leading-[1.1]
            mt-[0]
            mb-[0]
           text-[48px] sm:text-[72px] md:text-[100px] lg:text-[150px] xl:text-[228px]
          "
        >
          Process
        </h1>

        <p
          data-aos="fade-up"
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
          Every project is unique, and we approach each with creativity,
          technical discipline, and a strong focus on delivery.
        </p>

        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2">
          <Link
            href="#next"
            className="
            hidden desktop:block
            absolute
            bottom-[0px]
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

      {steps.map((step, i) => (
        <section
          id="next"
          key={i}
          className="relative flex items-center border-t border-[#ebebeb] bg-white py-[20px] desktop:min-h-screen desktop:py-0"
        >
          <div
            className={`w-full flex flex-col ${
              step.imgLeft ? "md:flex-row" : "md:flex-row-reverse"
            } items-center`}
          >
            <div className="w-full md:w-[50%] flex items-center justify-center py-10 md:py-16 px-4 sm:px-6 md:px-8 md:px-[5vw]">
              <Image
                data-aos="zoom-in"
                src={step.img}
                alt={step.title}
                width={800}
                height={600}
                className="w-[75%] md:w-full md:max-w-[720px] h-auto object-contain select-none"
                draggable={false}
              />
            </div>

            <div
              data-aos="fade-up"
              className="w-full md:w-[50%] px-4 sm:px-6 md:px-8 xl:px-[6vw] py-10 pt-0 md:pt-10 md:py-16 xl:py-0"
            >
              <h2
                className="font-semibold text-[#e8412a] leading-[1] mb-6"
                style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
              >
                {step.title}
              </h2>

              <div className="flex flex-col gap-5">
                {step.body.map((para, j) => (
                  <p
                    key={j}
                    className="text-[#000] leading-[1.4]"
                    style={{
                      fontSize: "clamp(16px, 2vw, 26px)",
                    }}
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
    </>
  );
}
