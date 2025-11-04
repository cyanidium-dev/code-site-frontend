import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export async function getDefaultMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("openGraph.title"),
      description: t("openGraph.description"),
      images: [
        {
          url: `${SITE_URL}/opengraph-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Efedra Clinic",
        },
      ],
      type: "website",
      locale: "uk_UA",
      siteName: "Efedra Clinic",
    },
  };
}
