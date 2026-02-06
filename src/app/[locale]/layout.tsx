import { getDefaultMetadata } from "@/utils/getDefaultMetadata";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
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
