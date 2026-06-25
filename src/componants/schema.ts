export const layoutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.creativeskills.com/#organization",
      name: "Creative Skills",
      url: "https://www.creativeskills.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.creativeskills.com/images/cslogo.svg",
      },
      email: "hello@creativeskills.com",
      telephone: "+44-7824-323288",
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "124 City Road",
          addressLocality: "London",
          postalCode: "EC1V 2NX",
          addressCountry: "GB",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "Third Floor, Clover Metropole, NIBM Undri Road",
          addressLocality: "Pune",
          postalCode: "411048",
          addressCountry: "IN",
        },
      ],
      sameAs: ["https://www.dba.org.uk/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.creativeskills.com/#website",
      url: "https://www.creativeskills.com",
      name: "Creative Skills",
      publisher: {
        "@id": "https://www.creativeskills.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.creativeskills.com/#webpage",
      url: "https://www.creativeskills.com/",
      name: "Expert Web Development Agency | WordPress, HubSpot & Headless CMS | Creative Skills",
      description:
        "Creative Skills delivers custom web development solutions using WordPress, HubSpot CMS and Headless CMS. Trusted by agencies and businesses worldwide.",
      isPartOf: {
        "@id": "https://www.creativeskills.com/#website",
      },
    },
  ],
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.creativeskills.com/#organization",
      name: "Creative Skills",
      url: "https://www.creativeskills.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.creativeskills.com/images/cslogo.svg",
      },
      email: "hello@creativeskills.com",
      telephone: "+44-7824-323288",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.creativeskills.com/services/#webpage",
      url: "https://www.creativeskills.com/services/",
      name: "Web Development Services | WordPress, HubSpot & Headless CMS | Creative Skills",
      description:
        "Explore expert web development services including WordPress development, HubSpot CMS implementation, Headless CMS solutions, website support and optimisation.",
      isPartOf: {
        "@id": "https://www.creativeskills.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.creativeskills.com/services/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.creativeskills.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://www.creativeskills.com/services/",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.creativeskills.com/services/#wordpress",
      name: "WordPress Development",
      description:
        "Premium WordPress development for design agencies, crafting high-performance, visually stunning websites without page builders or readymade themes.",
      provider: {
        "@id": "https://www.creativeskills.com/#organization",
      },
      serviceType: "WordPress Development",
      areaServed: ["GB", "IN"],
      url: "https://www.creativeskills.com/services/",
    },
    {
      "@type": "Service",
      "@id": "https://www.creativeskills.com/services/#headless-cms",
      name: "Headless CMS Development",
      description:
        "Flexible and powerful headless CMS development using platforms like Strapi, Contentful, or Sanity. Migration, optimisation, and new digital strategy solutions.",
      provider: {
        "@id": "https://www.creativeskills.com/#organization",
      },
      serviceType: "Headless CMS Development",
      areaServed: ["GB", "IN"],
      url: "https://www.creativeskills.com/services/",
    },
    {
      "@type": "Service",
      "@id": "https://www.creativeskills.com/services/#hubspot",
      name: "HubSpot Content Hub Development",
      description:
        "Expert HubSpot development services including custom themes, modules, CRM automation, and API integrations to streamline workflows and boost engagement.",
      provider: {
        "@id": "https://www.creativeskills.com/#organization",
      },
      serviceType: "HubSpot CMS Development",
      areaServed: ["GB", "IN"],
      url: "https://www.creativeskills.com/services/",
    },
  ],
};

export const processSchema  = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.creativeskills.com/#organization",
      name: "Creative Skills",
      url: "https://www.creativeskills.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.creativeskills.com/images/cslogo.svg",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+44-7824-323288",
        contactType: "customer service",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.creativeskills.com/#website",
      url: "https://www.creativeskills.com",
      name: "Creative Skills",
      publisher: {
        "@id": "https://www.creativeskills.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.creativeskills.com/process/#webpage",
      url: "https://www.creativeskills.com/process/",
      name: "Website Development Process | From Strategy to Launch | Creative Skills",
      description:
        "Discover our proven website development process covering planning, design collaboration, development, testing, launch and ongoing support.",
      isPartOf: {
        "@id": "https://www.creativeskills.com/#website",
      },
      about: {
        "@id": "https://www.creativeskills.com/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.creativeskills.com/process/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.creativeskills.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Process",
          item: "https://www.creativeskills.com/process/",
        },
      ],
    },
    // {
    //   "@type": "ItemList",
    //   "@id": "https://www.creativeskills.com/process/#process",
    //   name: "Creative Skills Project Delivery Process",
    //   itemListElement: steps.map((step, index) => ({
    //     "@type": "ListItem",
    //     position: index + 1,
    //     name: step.title,
    //     description: step.body[0],
    //   })),
    // },
  ],
};

export const designAgencySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.creativeskills.com/#organization",
      name: "Creative Skills",
      url: "https://www.creativeskills.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.creativeskills.com/images/cslogo.svg",
      },
      email: "hello@creativeskills.com",
      telephone: "+44-7824-323288",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.creativeskills.com/design-agencies/#webpage",
      url: "https://www.creativeskills.com/design-agencies/",
      name: "Development Partner for Design Agencies | Creative Skills",
      description:
        "Extend your team's capabilities with experienced web developers. We help design agencies deliver WordPress, HubSpot and Headless CMS projects efficiently.",
      isPartOf: {
        "@id": "https://www.creativeskills.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.creativeskills.com/design-agencies/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.creativeskills.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Design Agencies",
          item: "https://www.creativeskills.com/design-agencies/",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.creativeskills.com/design-agencies/#service",
      name: "Development Partner for Design Agencies",
      description:
        "Creative Skills acts as a seamless extension of your team, delivering dependable development with clear communication and on-time delivery.",
      provider: {
        "@id": "https://www.creativeskills.com/#organization",
      },
      serviceType: "Web Development",
      areaServed: ["GB", "IN"],
      offers: {
        "@type": "Offer",
        description:
          "White-label WordPress, HubSpot CMS, and Headless CMS development for design agencies.",
      },
    },
  ],
};

export const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.creativeskills.com/#organization",
      name: "Creative Skills",
      url: "https://www.creativeskills.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.creativeskills.com/images/cslogo.svg",
      },
      email: "hello@creativeskills.com",
      telephone: "+44-7824-323288",
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "124 City Road",
          addressLocality: "London",
          postalCode: "EC1V 2NX",
          addressCountry: "GB",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "Third Floor, Clover Metropole, NIBM Undri Road",
          addressLocality: "Pune",
          postalCode: "411048",
          addressCountry: "IN",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://www.creativeskills.com/contact/#webpage",
      url: "https://www.creativeskills.com/contact/",
      name: "Contact Us | Creative Skills Digital",
      description:
        "Get in touch with Creative Skills. Offices in London, UK and Pune, India.",
      isPartOf: {
        "@id": "https://www.creativeskills.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.creativeskills.com/contact/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.creativeskills.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: "https://www.creativeskills.com/contact/",
        },
      ],
    },
    {
      "@type": "ContactPage",
      "@id": "https://www.creativeskills.com/contact/#contactpage",
      url: "https://www.creativeskills.com/contact/",
      name: "Contact Creative Skills",
      description:
        "Contact us via phone, email or visit our offices in London or Pune.",
    },
  ],
};
