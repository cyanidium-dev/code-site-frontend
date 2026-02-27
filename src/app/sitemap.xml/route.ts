import { NextResponse } from "next/server";
import { client } from "@/lib/sanityClient";

type BlogPost = {
  slug: string;
  _updatedAt?: string;
};

type Project = {
  slug: string;
  _updatedAt?: string;
};

type SanitySitemapData = {
  blogs: BlogPost[];
  projects: Project[];
};

const GET_DYNAMIC_PAGES_SLUGS = `{
  "blogs": *[_type == "blog"]{
    "slug": slug.current,
    _updatedAt
  },
  "projects": *[_type == "project"]{
    "slug": slug.current,
    _updatedAt
  }
}`;

async function fetchSanityDataServer<T>(
  query: string,
  params = {}
): Promise<T | null> {
  try {
    return await client.fetch<T>(query, params);
  } catch (error) {
    console.warn("Sanity fetch failed:", error);
    return null;
  }
}

type SitemapUrl = {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: number;
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";

async function getDynamicPages(): Promise<SitemapUrl[]> {
  const res = await fetchSanityDataServer<SanitySitemapData>(
    GET_DYNAMIC_PAGES_SLUGS
  );

  const blogs = res?.blogs || [];
  const blogPaths: SitemapUrl[] = blogs.map((post) => ({
    loc: `/blog/${post.slug}`,
    lastmod: post._updatedAt || new Date().toISOString(),
    changefreq: "monthly",
    priority: 0.7,
  }));

  const projects = res?.projects || [];
  const projectPaths: SitemapUrl[] = projects.map((project) => ({
    loc: `/portfolio/${project.slug}`,
    lastmod: project._updatedAt || new Date().toISOString(),
    changefreq: "monthly",
    priority: 0.8,
  }));

  return [...blogPaths, ...projectPaths];
}

function formatDate(date: string): string {
  return new Date(date).toISOString();
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function generateSitemapXml(urls: SitemapUrl[]): string {
  const baseUrl = SITE_URL.replace(/\/+$/, "");

  const urlEntries = urls
    .map((url) => {
      const normalizedLoc = url.loc.startsWith("/") ? url.loc : `/${url.loc}`;
      const fullUrl = `${baseUrl}${normalizedLoc}`;

      return `  <url>
    <loc>${escapeXml(fullUrl)}</loc>
    <lastmod>${formatDate(url.lastmod)}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

export async function GET() {
  try {
    const now = new Date().toISOString();

    const staticPages: SitemapUrl[] = [
      {
        loc: "/",
        lastmod: now,
        changefreq: "weekly",
        priority: 1.0,
      },
      {
        loc: "/blog",
        lastmod: now,
        changefreq: "monthly",
        priority: 0.8,
      },
      {
        loc: "/services",
        lastmod: now,
        changefreq: "monthly",
        priority: 0.9,
      },
      {
        loc: "/portfolio",
        lastmod: now,
        changefreq: "monthly",
        priority: 0.9,
      },
      {
        loc: "/contacts",
        lastmod: now,
        changefreq: "monthly",
        priority: 0.7,
      },
      {
        loc: "/policy",
        lastmod: now,
        changefreq: "monthly",
        priority: 0.7,
      },
      {
        loc: "/public-contract",
        lastmod: now,
        changefreq: "monthly",
        priority: 0.7,
      },
      {
        loc: "/offer",
        lastmod: now,
        changefreq: "monthly",
        priority: 0.7,
      },
      {
        loc: "/legal",
        lastmod: now,
        changefreq: "monthly",
        priority: 0.7,
      },
    ];

    const dynamicPages = await getDynamicPages();
    const allUrls = [...staticPages, ...dynamicPages];

    const xml = generateSitemapXml(allUrls);

    return new NextResponse(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control":
          "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new NextResponse("Error generating sitemap", { status: 500 });
  }
}

