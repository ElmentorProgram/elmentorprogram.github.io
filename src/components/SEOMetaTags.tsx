import { useEffect } from "react";

const SEOMetaTags: React.FC = () => {
  useEffect(() => {
    // Update document meta tags
    document.title =
      "Elmentor Program - A Private Community for Continuous Learning & Professional Growth";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Join Elmentor Program: A private mentorship community operated by DevOps Visions. Connect, collaborate, and elevate your skills with expert guidance and continuous learning opportunities.",
      );
    } else {
      const newMetaDescription = document.createElement("meta");
      newMetaDescription.name = "description";
      newMetaDescription.content =
        "Join Elmentor Program: A private mentorship community operated by DevOps Visions. Connect, collaborate, and elevate your skills with expert guidance and continuous learning opportunities.";
      document.head.appendChild(newMetaDescription);
    } // Add Open Graph meta tags
    const ogMetaTags = [
      {
        property: "og:title",
        content: "Elmentor Program - Private Community for Professional Growth",
      },
      {
        property: "og:description",
        content:
          "Join Elmentor Program: A private mentorship community operated by DevOps Visions. Connect, collaborate, and elevate your skills.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: window.location.href },
      { property: "og:site_name", content: "Elmentor Program" },
      { property: "og:locale", content: "en_US" },
    ];

    ogMetaTags.forEach(({ property, content }) => {
      let existingTag = document.querySelector(`meta[property="${property}"]`);
      if (existingTag) {
        existingTag.setAttribute("content", content);
      } else {
        const newTag = document.createElement("meta");
        newTag.setAttribute("property", property);
        newTag.setAttribute("content", content);
        document.head.appendChild(newTag);
      }
    }); // Add Twitter Card meta tags
    const twitterMetaTags = [
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Elmentor Program - Private Community for Professional Growth",
      },
      {
        name: "twitter:description",
        content:
          "Join Elmentor Program: A private mentorship community operated by DevOps Visions.",
      },
    ];

    twitterMetaTags.forEach(({ name, content }) => {
      let existingTag = document.querySelector(`meta[name="${name}"]`);
      if (existingTag) {
        existingTag.setAttribute("content", content);
      } else {
        const newTag = document.createElement("meta");
        newTag.setAttribute("name", name);
        newTag.setAttribute("content", content);
        document.head.appendChild(newTag);
      }
    });

    // Add structured data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "DevOps Visions",
      description:
        "A global mentorship community for tech professionals focusing on DevOps, continuous learning, and professional growth.",
      url: window.location.origin,
      founder: {
        "@type": "Person",
        name: "Mohamed Radwan",
        jobTitle: "Microsoft DevOps MVP",
        sameAs: [
          "https://www.linkedin.com/in/mohamedahmedradwan/",
          "https://github.com/MohamedRadwan-DevOps",
          "https://www.youtube.com/@MRadwanMSF",
        ],
      },
      sameAs: [
        "https://www.linkedin.com/in/mohamedahmedradwan/",
        "https://github.com/MohamedRadwan-DevOps",
      ],
    };

    const existingScript = document.querySelector(
      'script[type="application/ld+json"]',
    );
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, []);

  return null; // This component doesn't render anything
};

export default SEOMetaTags;
