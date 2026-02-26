import { headers } from "next/headers";
import { getLocale } from "next-intl/server";
import {
  getBreadcrumbItems,
  buildBreadcrumbSchema,
} from "@/utils/getBreadcrumbItems";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { singlePostQuery, singleProjectQuery } from "@/lib/queries";

export default async function BreadcrumbJsonLd() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "/";
  const locale = (await getLocale()) ?? "en";

  const pathWithoutLocale =
    pathname.replace(/^\/(uk|ru|en)(?=\/|$)/, "") || "/";
  const segments =
    pathWithoutLocale === "/" ? [] : pathWithoutLocale.slice(1).split("/");

  let lastItemName: string | null = null;

  if (segments[0] === "blog" && segments.length > 1) {
    const slug = segments[1];
    try {
      const post = await fetchSanityData(singlePostQuery, {
        slug,
        lang: locale,
      });
      if (post?.name) lastItemName = post.name;
    } catch {
      // use slug as fallback via getBreadcrumbItems
    }
  } else if (segments[0] === "portfolio" && segments.length > 1) {
    const slug = segments[1];
    try {
      const project = await fetchSanityData(singleProjectQuery, {
        slug,
        lang: locale,
      });
      if (project?.name) lastItemName = project.name;
    } catch {
      // use slug as fallback via getBreadcrumbItems
    }
  }

  const items = await getBreadcrumbItems(pathname, locale, {
    lastItemName,
  });
  const schema = buildBreadcrumbSchema(items);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
