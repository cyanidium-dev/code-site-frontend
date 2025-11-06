/** @type {import('next-sitemap').IConfig} */

import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "vh20xg14",
  dataset: "production",
  apiVersion: "2025-11-06",
  useCdn: true,
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export const fetchSanityDataServer = async (query, params = {}) => {
  try {
    return await client.fetch(query, params);
  } catch (error) {
    console.warn("Sanity fetch failed:", error);
  }
};

export const GET_DYNAMIC_PAGES_SLUGS = `{
  "posts": *[_type == "blog"] {
    "slug": slug.current,
    },
}`;

async function getDynamicPages() {
  const res = await fetchSanityDataServer(GET_DYNAMIC_PAGES_SLUGS);

  const articles = res?.posts || [];
  const articlesPages = articles.map((article) => `/blog/${article.slug}`);

  return [...articlesPages];
}

const sitemapConfig = {
  siteUrl: SITE_URL,
  changefreq: "monthly",
  sitemapSize: 5000,
  priority: 0.7,
  generateIndexSitemap: false,
  exclude: ["/api/*"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/api/*" },
    ],
  },
  alternateRefs: [
    {
      href: `${SITE_URL}/`,
      hreflang: "uk",
    },
    {
      href: `${SITE_URL}/en`,
      hreflang: "en",
    },
    {
      href: `${SITE_URL}/ru`,
      hreflang: "ru",
    },
  ],
  additionalPaths: async (config) => {
    const staticPages = [
      {
        loc: "/",
        changefreq: "weekly",
        priority: 1.0,
      },
      {
        loc: "/blog",
        changefreq: "monthly",
        priority: 0.8,
      },
      {
        loc: "/contacts",
        changefreq: "monthly",
        priority: 0.7,
      },
      {
        loc: "/services",
        changefreq: "monthly",
        priority: 0.9,
      },
      {
        loc: "/portfolio",
        changefreq: "monthly",
        priority: 0.9,
      },
      {
        loc: "/policy",
        changefreq: "monthly",
        priority: 0.7,
      },
      {
        loc: "/public-contract",
        changefreq: "monthly",
        priority: 0.7,
      },
      {
        loc: "/offer",
        changefreq: "monthly",
        priority: 0.7,
      },
      {
        loc: "/legal",
        changefreq: "monthly",
        priority: 0.7,
      },
    ];

    const staticPaths = await Promise.all(
      staticPages.map(async (page) => {
        const transformed = await config.transform(config, page.loc);
        return {
          ...transformed,
          changefreq: page.changefreq,
          priority: page.priority,
        };
      })
    );

    const dynamicPages = await getDynamicPages(config);
    const dynamicPaths = await Promise.all(
      dynamicPages.map((page) => config.transform(config, page))
    );

    return [...staticPaths, ...dynamicPaths];
  },
};

// Експортуємо конфігурацію
export default sitemapConfig;
