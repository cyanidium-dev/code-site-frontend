import { getDefaultMetadata } from "@/utils/getDefaultMetadata";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import { IosDeviceProvider } from "@/contexts/IosDeviceContext";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import { getLocale } from "next-intl/server";
import SplashGate from "@/components/shared/splashScreen/SplashGate";
import PageTransitionEffect from "@/components/shared/pageTransitionEffect/PageTransitionEffect";

const GTM_ID = "GTM-TRCVT2FH";

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
  return await getDefaultMetadata(locale);
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
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* End Google Tag Manager */}
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
