export const GLOBAL_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.code-site.art/#organization",
      "name": "Code-Site.Art",
      "url": "https://www.code-site.art",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.code-site.art/#logo",
        "url": "https://www.code-site.art/logo.png",
      },
      "sameAs": [
        "https://www.tiktok.com/@cyanidium.dev",
        "https://t.me/fedirdev",
        "https://www.instagram.com/cyanidium/",
        "https://www.linkedin.com/in/fediralpatov/",
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "st. Bilychanska, build 5, fl. 51",
        "addressLocality": "Kyiv",
        "postalCode": "03148",
        "addressCountry": "UA",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "areaServed": ["UA", "EU", "AS", "US"],
        "availableLanguage": ["Ukrainian", "Russian", "English"],
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.code-site.art/#person",
      "name": "Fedir Alpatov",
      "url": "https://www.code-site.art",
      "worksFor": {
        "@id": "https://www.code-site.art/#organization",
      },
      "sameAs": [
        "https://www.linkedin.com/in/fediralpatov/",
        "https://www.instagram.com/cyanidium/",
        "https://www.tiktok.com/@cyanidium.dev",
        "https://t.me/fedirdev",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.code-site.art/#website",
      "url": "https://www.code-site.art",
      "name": "Code-Site.Art",
      "publisher": {
        "@id": "https://www.code-site.art/#organization",
      },
      "inLanguage": ["uk", "ru", "en"],
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.code-site.art/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.code-site.art/#primaryimage",
      "url":
        "https://www.code-site.art/uk/opengraph-image.jpg?opengraph-image.6b45ea51.jpg",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.code-site.art/#homepage",
      "url": "https://www.code-site.art/",
      "name": "Code-Site.Art – головна",
      "inLanguage": ["uk", "ru", "en"],
      "mainEntity": {
        "@id": "https://www.code-site.art/#organization",
      },
      "primaryImageOfPage": {
        "@id": "https://www.code-site.art/#primaryimage",
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "@id": "https://www.code-site.art/#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Головна",
            "item": "https://www.code-site.art/",
          },
        ],
      },
      "alternateName": [
        {
          "@type": "WebPage",
          "url": "https://www.code-site.art/uk/",
          "inLanguage": "uk",
        },
        {
          "@type": "WebPage",
          "url": "https://www.code-site.art/ru/",
          "inLanguage": "ru",
        },
        {
          "@type": "WebPage",
          "url": "https://www.code-site.art/en/",
          "inLanguage": "en",
        },
      ],
    },
  ],
} as const;

