import { getDefaultMetadata, getCanonicalUrl, getAlternateLanguages, getPageTypeFromPathname, METADATA_PAGE_KEYS, BASE_URL } from "@/utils/getDefaultMetadata";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import { IosDeviceProvider } from "@/contexts/IosDeviceContext";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import { getLocale, getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import SplashGate from "@/components/shared/splashScreen/SplashGate";
import PageTransitionEffect from "@/components/shared/pageTransitionEffect/PageTransitionEffect";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const actay = localFont({
  src: [
    {
      path: "../../../public/fonts/ActayWide-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-actay",
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
});

const guanoApes = localFont({
  src: [
    {
      path: "../../../public/fonts/GuanoApes.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-guano-apes",
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
});

const parkia = localFont({
  src: [
    {
      path: "../../../public/fonts/Parkia-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-parkia",
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
});

export async function generateMetadata() {
  const locale = await getLocale();
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? `/${locale}`;
  const canonicalUrl = getCanonicalUrl(pathname);
  const languages = getAlternateLanguages(pathname);

  const baseMetadata = await getDefaultMetadata(locale);
  const pageType = getPageTypeFromPathname(pathname);
  const pageKey = METADATA_PAGE_KEYS[pageType];

  let title = baseMetadata.title as string | undefined;
  let description = baseMetadata.description as string | undefined;
  let openGraph = baseMetadata.openGraph as Record<string, unknown> | undefined;

  if (pageKey) {
    try {
      const t = await getTranslations("metadataPages");
      const pageTitle = t(`${pageKey}.title`);
      const pageDescription = t(`${pageKey}.description`);
      if (pageTitle) title = pageTitle;
      if (pageDescription) description = pageDescription;
    } catch {
      // use base metadata
    }
  }

  return {
    metadataBase: new URL(BASE_URL),
    ...baseMetadata,
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      ...openGraph,
      url: canonicalUrl,
      ...(title && { title }),
      ...(description && { description }),
    },
    twitter:
      title || description
        ? {
            card: "summary_large_image" as const,
            ...(baseMetadata.twitter as Record<string, unknown> | undefined),
            ...(title && { title }),
            ...(description && { description }),
          }
        : baseMetadata.twitter,
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Preconnect to Vimeo for faster video player and thumbnails */}
        <link rel="preconnect" href="https://vimeo.com" />
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" />
        <link rel="preconnect" href="https://f.vimeocdn.com" />
        {/* Preconnect to Sanity CDN for faster images */}
        <link rel="preconnect" href="https://cdn.sanity.io" />
      </head>
      <body
        className={`${montserrat.variable} ${actay.variable} ${guanoApes.variable} ${parkia.variable} flex min-h-screen flex-col antialiased overflow-hidden`}
      >
        <NextIntlClientProvider>
          <IosDeviceProvider>
            <SplashGate>
              <Header />
              <main className="flex-1">
                <PageTransitionEffect>{children}</PageTransitionEffect>
              </main>
              <Footer />
            </SplashGate>
          </IosDeviceProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
